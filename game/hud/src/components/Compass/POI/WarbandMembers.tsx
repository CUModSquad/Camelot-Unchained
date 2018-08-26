/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import styled from 'react-emotion';
import { client, events, GroupMemberState, Vec3f } from '@csegames/camelot-unchained';
import { CompassContextConsumer, CompassContext } from '../CompassContext';
import CompassElevationSwitch from '../CompassElevationSwitch';
import { hubEvents } from '@csegames/camelot-unchained/lib/signalR/hubs/groupsHub';
import { easeLinear } from 'd3-ease';
import Animate from 'react-move/Animate';

const MemberPoi = styled('div')`
  position: absolute;
  margin: 0;
  padding: 0;
  margin-top: 6px;
  text-shadow: 2px 2px 4px black;
  font-size: 0.6em;
  color: rgba(0,255,0,.8);
  width: 40px;
  text-align: center;
  font-weight: bold;
  border-radius: 100px;
  height: 25px;
  line-height: 8px;
`;

const StyledSvg = styled('svg')`
  fill: rgba(0,255,0,.8);
  text-shadow: none;
  stroke: rgba(0,255,0,.8);
  stroke-opacity: 0;
  display: block;
  margin: 0 auto;
`;

// from https://material.io/tools/icons/?icon=person&style=baseline
const MemberIcon = () => (
  <StyledSvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
    <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/>
    <path d='M0 0h24v24H0z' fill='none'/>
  </StyledSvg>
);

interface WarbandMemberData {
  characterID: string;
  name: string;
  isAlive: boolean;
  position: Vec3f;
}

export interface WarbandMembersState {
  members: WarbandMemberData[];
}

export default class WarbandMembers extends React.Component<{}, WarbandMembersState> {

  private eventUpdateHandle: number;
  private eventJoinedHandle: number;
  private eventRemovedHandle: number;

  public state: WarbandMembersState = {
    members: [],
  };

  public render() {
    return (
      <CompassContextConsumer>
        {(compass: CompassContext) => (
          <>
            {this.state.members.filter(member => member.isAlive).map(member => (
              <Animate
                key={member.characterID}
                start={{
                  x: member.position.x,
                  y: member.position.y,
                  z: member.position.z,
                }}
                update={{
                  x: [member.position.x],
                  y: [member.position.y],
                  z: [member.position.z],
                  timing: { duration: 200, ease: easeLinear, delay: 0 },
                }}
                >
                {({ x, y, z }: any) => (
                  <MemberPoi style={compass.getPoiPlacementStyle({ x, y, z }, 12.5)}>
                    <MemberIcon />
                    {Math.round(compass.getDistance({ x, y, z }))}
                    <CompassElevationSwitch bufferZone={1} target={{ x, y, z }}>
                      {(isLevel, isAbove, isBelow) => (
                        <>
                          {
                            isLevel ? '' :
                            isAbove ? `↑` :
                            `↓`
                          }
                        </>
                      )}
                    </CompassElevationSwitch>
                  </MemberPoi>
                )}
              </Animate>
            ))}
          </>
        )}
      </CompassContextConsumer>
    );
  }

  public componentWillMount() {
    this.eventUpdateHandle = events.on(hubEvents.memberUpdate, this.onWarbandMemberUpdated);
    this.eventJoinedHandle = events.on(hubEvents.memberJoined, this.onWarbandMemberJoined);
    this.eventRemovedHandle = events.on(hubEvents.memberRemoved, this.onWarbandMemberRemoved);
  }

  public componentWillUnmount() {
    events.off(this.eventUpdateHandle);
    events.off(this.eventJoinedHandle);
    events.off(this.eventRemovedHandle);
  }

  public shouldComponentUpdate(nextProps: {}, nextState: WarbandMembersState) {
    if (nextState.members.length !== this.state.members.length) {
      return true;
    }
    for (let i = 0; i < this.state.members.length; i++) {
      const memberA = this.state.members[i];
      const memberB = nextState.members[i];
      if (memberA.characterID !== memberB.characterID) {
        return true;
      }
      if (memberA.isAlive !== memberB.isAlive) {
        return true;
      }
      if (
        memberA.position.x !== memberB.position.x ||
        memberA.position.y !== memberB.position.y ||
        memberA.position.z !== memberB.position.z
      ) {
        return true;
      }
    }
    return false;
  }

  public onWarbandMemberUpdated = (rawNewMemberState: string) => {
    const newMemberState: GroupMemberState = JSON.parse(rawNewMemberState);
    if (newMemberState.characterID !== client.characterID) {
      this.setState(state => ({
        members: state.members.map((member) => {
          if (member.characterID === newMemberState.characterID) {
            return this.getWarbandMemberData(newMemberState);
          } else {
            return member;
          }
        }),
      }));
    }
  }

  public onWarbandMemberJoined = (rawNewMemberState: string) => {
    const newMemberState: GroupMemberState = JSON.parse(rawNewMemberState);
    if (newMemberState.characterID !== client.characterID) {
      this.setState((state) => {
        return {
          members: state.members.filter((member) => {
            return member.characterID !== newMemberState.characterID;
          }).concat([this.getWarbandMemberData(newMemberState)]),
        };
      });
    }
  }

  public onWarbandMemberRemoved = (characterID: string) => {
    if (characterID !== client.characterID) {
      this.setState(state => ({
        members: state.members.filter((member) => {
          return member.characterID !== characterID;
        }),
      }));
    } else {
      this.setState({
        members: [],
      });
    }
  }

  private getWarbandMemberData = (state: GroupMemberState): WarbandMemberData => {
    return {
      characterID: state.characterID,
      name: state.name,
      isAlive: state.isAlive,
      position: {
        x: Math.round(state.position.x),
        y: Math.round(state.position.y),
        z: Math.round(state.position.z),
      },
    };
  }
}
