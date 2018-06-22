/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

import * as React from 'react';
import styled from 'react-emotion';
import { isEmpty } from 'lodash';
import * as moment from 'moment';
import { Spinner } from '@csegames/camelot-unchained';
import { CharacterProgressionData } from '@csegames/camelot-unchained/lib/graphql/schema';
import { GraphQLResult } from '@csegames/camelot-unchained/lib/graphql/react';
import { toSentenceCase } from '@csegames/camelot-unchained/lib/utils/textUtils';
import RewardsView from './RewardsView';

const Container = styled('div')`
  position: relative;
`;

const LoadingContainer = styled('div')`
  position: relative;
`;

const InnerContainer = styled('div')`
  position: relative;
  pointer-events: all;
  width: 800px;
  height: 400px;
  padding: 0px;
  margin:0 auto;
  background-color: gray;
  color: white;
  background: url("images/progression/progress-bg-grey.png") no-repeat;
  z-index: 1;
  border: 1px solid #6e6c6c;
  box-shadow: 0 0 30px 0 #000;
`;

const ProgressionTitle = styled('div')`
  text-align: center;
  background: url("images/progression/progress-top-title.png") center top no-repeat;
  margin: 0 auto -9px auto;
  position: relative;
  z-index: 999;
  width: 319px;
  height: 23px;
  h6 {
    color: #848484;
    font-size: 10px;
    text-transform: uppercase;
    padding: 7px 0 0 0;
    margin: 0 0 0 0;
    font-family: 'Caudex', serif;
  }
`;

const ProgressionCorner = styled('div')`
  position: absolute;
  min-width: 800px;
  min-height: 400px;
  background:
  url("images/progression/progress-ornament-top-left.png") left 0 top 0 no-repeat,
  url("images/progression/progress-ornament-top-right.png") right 0 top 0 no-repeat,
  url("images/progression/progress-ornament-bottom-left.png") left 0 bottom 0 no-repeat,
  url("images/progression/progress-ornament-bottom-right.png") right 0 bottom 0 no-repeat;
  z-index: 1;
`;

const ProgressionContent = styled('div')`
  height: 295px;
  margin-top: 30px;
  max-height: 295px;
  padding: 10px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  border-top: 1px solid #3b3634;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  width: calc(100% - 40px);
  position: absolute;
  h2 {
    font-family: 'Caudex', serif;
    font-size: 18px;
  }
  h3 {
    font-size: 18px;
    color: #706764;
    text-transform: uppercase;
    border-bottom: 1px solid #706764;
  }
  ul {
    margin-bottom: 20px !important;
    li {
      background: #191919;
      margin-bottom: 4px;
      div {
        display: inline-block;
        padding: 5px 10px;
      }
      div:first-of-type {
        width: calc(40% - 25px);
        background: #141414;
        border-left: 5px solid #3b3634;
      }
      div:last-of-type {
        width: calc(60% - 20px);
        background: #191919;
        color: #595553;
      }
      &:hover {
        background: #191919;
        div:first-of-type {
          border-left: 5px solid #93866c;
        }
        div:last-of-type {
          color: #93866c;
        }
      }
    }
  }
  .ProgressList {
    background-color: rgba(24, 24, 24, 0.35);
    margin-bottom: 30px;
    border: 1px solid #313131;
    border-left: none;
    border-right: none;
    padding: 20px;
  }
  .NoReward {
    width: calc(100% - 25px);
    background: #141414;
    border-left: 5px solid #3b3634;
    padding: 5px 10px;
  }
`;

const ProgressionBorder = styled('div')`
  background: url("images/progression/progression-daily-item-top.png") center bottom no-repeat;
  width: 108px;
  height: 9px;
  margin: 0 auto -4px;
}
`;

const ProgressionLoading = styled('div')`
  text-align: center;
  margin-top: 130px;
`;

const ProgressionFooter = styled('div')`
  position: absolute;
  min-width: 800px;
  height: 55px;
  bottom: 0;
  left: 0;
  background: rgba(55, 52, 51, 0.3);
  border-top: 1px solid #3b3634;
  z-index: 11;
`;

const CollectButton = styled('div')`
  &.btn {
    background: url("images/progression/button-off.png") no-repeat;
    width: 95px;
    height: 30px;;
    border: none;
    margin: 12px 16px 0 16px;
    cursor: pointer;
    color: #848484;
    font-family: 'Caudex', serif;
    font-size: 10px;
    text-transform: uppercase;
    text-align: center;
    line-height: 30px;
    &:hover {
      background: url("images/progression/button-on.png") no-repeat;
      color: #fff;
    }
  }
`;

const ProgressionFooterBorder = styled('div')`
  position: absolute;
  border: 1px solid #2e2b28;
  margin: 7px 10px 0;
  display: block;
  width: 780px;
  height: 40px;
  z-index: 3;
`;

const ProgressionFooterOuter = styled('div')` {
  position: absolute;
  z-index: 4;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ProgressionFooterLeft = styled('div')` {
  background: url("images/progression/progress-botnav-left-ornament.png") no-repeat;
  height: 55px;
  width: 75px
`;

const ProgressionFooterRight = styled('div')` {
  background: url("images/progression/progress-botnav-right-ornament.png") no-repeat;
  height: 55px;
  width: 75px
`;

const CloseButton = styled('div')`
  position: absolute;
  z-index: 11;
  top: 6px;
  right: 7px;
  width: 12px;
  height: 12px;
  background: url(images/inventory/close-button-grey.png) no-repeat;
  cursor: pointer;
  &:hover {
    -webkit-filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.9));
  }
  &:active {
    -webkit-filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 1));
  }
`;

export interface Props {
  graphql: GraphQLResult<{ myprogression: CharacterProgressionData }>;
  logIDs: string[];
  onCloseClick: () => void;
  onCollectClick: () => void;
  collected: boolean;
  collecting: boolean;
}

export interface State {

}

class ProgressionView extends React.Component<Props, State> {
  public render() {
    const { graphql } = this.props;
    if (this.props.collecting) {
      return (
        <LoadingContainer>
          <ProgressionTitle><h6>Progression</h6></ProgressionTitle>
          <InnerContainer>
            <ProgressionCorner />
            <CloseButton onClick={this.props.onCloseClick} />
            <ProgressionContent>
              <ProgressionLoading>
                <div>Collecting...</div>
                <Spinner />
              </ProgressionLoading>
            </ProgressionContent>
            <ProgressionFooter />
          </InnerContainer>
        </LoadingContainer>
      );
    }

    if (graphql.lastError && graphql.lastError !== 'OK') {
      return (
        <LoadingContainer>
          <ProgressionTitle><h6>Progression</h6></ProgressionTitle>
          <InnerContainer>
            <ProgressionCorner />
            <CloseButton onClick={this.props.onCloseClick} />
            <ProgressionContent>
              <ProgressionLoading>
                <div>{graphql.lastError}</div>
              </ProgressionLoading>
            </ProgressionContent>
            <ProgressionFooter />
          </InnerContainer>
        </LoadingContainer>
      );
    }

    if (graphql.loading || !graphql.data || !graphql.data.myprogression) {
      return (
        <LoadingContainer>
          <ProgressionTitle><h6>Progression</h6></ProgressionTitle>
          <InnerContainer>
            <ProgressionCorner />
            <CloseButton onClick={this.props.onCloseClick} />
            <ProgressionContent>
              <ProgressionLoading>
                <div>Loading...</div>
                <Spinner />
              </ProgressionLoading>
            </ProgressionContent>
            <ProgressionFooter />
          </InnerContainer>
        </LoadingContainer>
      );
    }

    if (this.props.collected || isEmpty(graphql.data.myprogression.unCollectedDayLogs)) {
      return (
        <LoadingContainer>
          <ProgressionTitle><h6>Progression</h6></ProgressionTitle>
          <InnerContainer>
            <ProgressionCorner />
            <CloseButton onClick={this.props.onCloseClick} />
            <ProgressionContent>
              <ProgressionLoading>
                <div>All progression packages have been collected</div>
              </ProgressionLoading>
            </ProgressionContent>
            <ProgressionFooter />
          </InnerContainer>
        </LoadingContainer>
      );
    }

    return (
      <Container>
        <ProgressionTitle><h6>Progression</h6></ProgressionTitle>
        <InnerContainer>
          <CloseButton onClick={this.props.onCloseClick} />
          <ProgressionCorner />
          <ProgressionContent>

          {graphql.data.myprogression.unCollectedDayLogs.map((uncollectedDay) => {
            const { secondsActive, distanceMoved, skillPartsUsed, damage, plots, crafting, scenarios } = uncollectedDay;

            let damageDetails: JSX.Element[] = [];
            Object.keys(damage).map((damageKey) => {
              Object.keys(damage[damageKey]).map((damageType) => {
                if (damage[damageKey][damageType] > 0) damageDetails.push(<li><div>{toSentenceCase(damageKey)} ({toSentenceCase(damageType)}): </div><div>{damage[damageKey][damageType]}</div></li>);
              });
            });

            let plotDetails: JSX.Element[] = [];
            Object.keys(plots).map((plotKey) => {
              if (plots[plotKey] > 0) plotDetails.push(<li><div>{toSentenceCase(plotKey)}: </div><div>{plots[plotKey]}</div></li>);
            });

            let craftingDetails: JSX.Element[] = [];
            Object.keys(crafting).map((craftingKey) => {
              Object.keys(crafting[craftingKey]).map((craftingType) => {
                if (crafting[craftingKey][craftingType] > 0) craftingDetails.push(<li><div>{toSentenceCase(craftingKey)} ({toSentenceCase(craftingType)}): </div><div>{crafting[craftingKey][craftingType]}</div></li>);
              });
            });

            let scenarioDetails: JSX.Element[] = [];
            let scenariosWon: number = 0;
            let scenariosLost: number = 0;
            let scenariosTied: number = 0;
            scenarios.map((scenario) => {
              if (scenario.outcome === 'Win') scenariosWon++;
              if (scenario.outcome === 'Lose') scenariosLost++;
              if (scenario.outcome === 'Draw') scenariosTied++;
            });
            if (scenariosWon > 0) scenarioDetails.push(<li><div>Scenarios Won: </div><div>{scenariosWon}</div></li>);
            if (scenariosLost > 0) scenarioDetails.push(<li><div>Scenarios Lost: </div><div>{scenariosLost}</div></li>);
            if (scenariosLost > 0) scenarioDetails.push(<li><div>Scenarios Tied: </div><div>{scenariosTied}</div></li>);

            let skillDetails: JSX.Element[] = [];
            skillPartsUsed.map((skillPartUsed) => {
              skillDetails.push(
                <li>
                  <div>Skill Used ({ skillPartUsed.skillPartID }):&nbsp;</div>
                  <div>{ skillPartUsed.usedInCombatCount > 0 ? ( `${skillPartUsed.usedInCombatCount} (In Combat)` ): null }</div>
                  { skillPartUsed.usedInCombatCount > 0 && skillPartUsed.usedNonCombatCount > 0 ? ' / ' : null }
                  { skillPartUsed.usedNonCombatCount > 0 ? ( `${skillPartUsed.usedNonCombatCount} (Out of Combat)` ): null }
                </li>
              );
            });

            return (
              <div id={uncollectedDay.id}>
                <h2>{moment(uncollectedDay.dayStart).format('dddd, MMMM Do YYYY')}</h2>
                <ProgressionBorder />
                <div className="ProgressList">
                  <ul>
                    <h3>General Details</h3>
                    <li><div>Day ID: </div><div>{uncollectedDay.id}</div></li>
                    { secondsActive ? (
                      <li><div>Time Active: </div><div>{moment.duration(secondsActive, 'seconds').humanize()}</div></li>
                    ): null}
                    { distanceMoved ? (
                      <li><div>Distance Traveled: </div><div>{distanceMoved} meters</div></li>
                    ): null}
                  </ul>
                  { damageDetails.length > 0 ? (
                  <ul>
                    <h3>Damage Details</h3>
                    {damageDetails}
                  </ul>
                  ): null}
                  { plotDetails.length > 0 ? (
                  <ul>
                    <h3>Plot Details</h3>
                    {plotDetails}
                  </ul>
                  ): null}
                  { craftingDetails.length > 0 ? (
                  <ul>
                    <h3>Crafting Details</h3>
                    {craftingDetails}
                  </ul>
                  ): null}
                  { scenarioDetails.length > 0 ? (
                  <ul>
                    <h3>Scenario Details</h3>
                    {scenarioDetails}
                  </ul>
                  ): null}
                  { skillDetails.length > 0 ? (
                  <ul>
                    <h3>Skill Details</h3>
                    {skillDetails}
                  </ul>
                  ): null}
                  <h3>Rewards</h3>
                  <RewardsView key={uncollectedDay.id} logID={uncollectedDay.id} />
                </div>
              </div>
            );
          })}

          </ProgressionContent>
          <ProgressionFooter>
            <ProgressionFooterBorder />
            <ProgressionFooterOuter>
                <ProgressionFooterLeft />
                <CollectButton
                  className="btn"
                  onClick={this.props.onCollectClick}>
                  Collect All
                </CollectButton>
                <ProgressionFooterRight />
            </ProgressionFooterOuter>
          </ProgressionFooter>
        </InnerContainer>
      </Container>
    );
  }
}

export default ProgressionView;