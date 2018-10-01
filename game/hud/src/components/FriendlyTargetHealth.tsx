/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import * as _ from 'lodash';
import styled from 'react-emotion';

import { isEqualPlayerState } from '../lib/playerStateEqual';
import HealthBar from './HealthBar';
import { showFriendlyTargetContextMenu } from 'actions/contextMenu';
import { FriendlyTargetState } from '@csegames/camelot-unchained';

const Container = styled('div')`
  cursor: pointer;
  pointer-events: all;
  transform: scale(0.45);
  -webkit-transform: scale(0.45);
  margin-left: -125px;
  margin-top: -80px;
  pointer-events: auto;
`;

export interface PlayerHealthProps {
}

export interface PlayerHealthState {
  playerState: FriendlyTargetState;
  showContextMenu: boolean;
}

class PlayerHealth extends React.Component<PlayerHealthProps, PlayerHealthState> {
  private eventFriendlyTargetStateOnUpdatedHandle: EventHandle;
  constructor(props: PlayerHealthProps) {
    super(props);
    this.state = {
      playerState: null,
      showContextMenu: false,
    };
    this.setPlayerState = _.throttle(this.setPlayerState, 100);
  }

  public render() {
    if (!this.state.playerState || this.state.playerState.type !== 'player') return null;

    return (
      <Container onContextMenu={this.handleContextMenu}>
        <HealthBar type='compact' target='friendly' playerState={this.state.playerState} />
      </Container>
    );
  }

  public componentDidMount() {
    this.eventFriendlyTargetStateOnUpdatedHandle = game.friendlyTargetState.onUpdated(() => {
      this.setPlayerState(game.friendlyTargetState as FriendlyTargetState);
    });
  }

  public componentWillUnmount() {
    this.eventFriendlyTargetStateOnUpdatedHandle.clear();
  }

  public shouldComponentUpdate(nextProps: PlayerHealthProps, nextState: PlayerHealthState) {
    return !isEqualPlayerState(nextState.playerState, this.state.playerState) ||
      nextState.showContextMenu !== this.state.showContextMenu;
  }

  private setPlayerState = (playerState: FriendlyTargetState) => {
    this.setState({ playerState });
  }

  private handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    showFriendlyTargetContextMenu(this.state.playerState, event);
  }
}

export default PlayerHealth;
