/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

import * as React from 'react';
import styled from 'react-emotion';
import { Spinner } from '@csegames/camelot-unchained';
import { CharacterProgressionData, CharacterAdjustmentDBModel } from '@csegames/camelot-unchained/lib/graphql/schema';
import { GraphQL, GraphQLResult } from '@csegames/camelot-unchained/lib/graphql/react';
// import ObjectDisplay from '../ObjectDisplay';

const progressionAdjustmentFragments = `
  fragment SkillPartLevelReason on CharacterAdjustmentReasonSkillPartLevel {
    skillPartID
    skillPartLevel
  }

  fragment UseSkillPartReason on CharacterAdjustmentReasonUseSkillPart {
    skillID
    inCombatCount
    nonCombatCount
  }

  fragment UseSkillsReason on CharacterAdjustmentReasonUseSkills {
    inCombatCount
    nonCombatCount
  }

  fragment AddItemAdjustment on CharacterAdjustmentAddItem {
    itemInstanceIDS
    staticDefinitionID
    unitCount
    quality
  }

  fragment PlayerStatAdjustment on CharacterAdjustmentPlayerStat {
    playerStat
    previousBonus
    newBonus
    previousProgressionPoints
    newProgressionPoints
  }

  fragment SkillPartAdjustment on CharacterAdjustmentSkillPartProgress {
    skillPartID
    previousLevel
    previousProgressionPoints
    newLevel
    newProgressPoints
  }

  fragment SkillNodeAdjustment on CharacterAdjustmentApplySkillNode {
    skillNodePath
  }

  fragment AdjustmentModel on CharacterAdjustmentDBModel {
    reason {
      skillPartLevel {
        ...SkillPartLevelReason
      }
      useSkillPart {
        ...UseSkillPartReason
      }
      useSkills {
        ...UseSkillsReason
      }
    }
    adjustment {
      addItem {
        ...AddItemAdjustment
      }
      playerStat {
        ...PlayerStatAdjustment
      }
      skillPart {
        ...SkillPartAdjustment
      }
      skillNode {
        ...SkillNodeAdjustment
      }
    }
  }
`;

const adjustmentsByDayLogIDQuery = (logID: string) => `
${progressionAdjustmentFragments}
{
  myprogression {
    adjustmentsByDayLogID(logID: "${logID}") {
      ...AdjustmentModel
    }
  }
}
`;

const LoadingContainer = styled('div')`
  position: relative;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  padding: 20px;
  background-color: gray;
  color: white;
`;

type QueryType = {
  myprogression: CharacterProgressionData;
};

export interface Props {
  logID: string;
}

export interface State {

}

class RewardsView extends React.Component<Props, State> {
  showRewards(progressionData: CharacterProgressionData) {
    let adjustmentsElement: JSX.Element[] = [];
    if (!progressionData.adjustmentsByDayLogID || progressionData.adjustmentsByDayLogID.length === 0) {
      adjustmentsElement.push(<div className="NoReward">No new rewards for you.</div>);
    } else {
      progressionData.adjustmentsByDayLogID.forEach((adjustment: CharacterAdjustmentDBModel, adjustmentID: number) => {
        console.log('adjustment', adjustment);
        const { addItem, playerStat, skillNode, skillPart } = adjustment.adjustment;
        const { skillPartLevel, useSkillPart, useSkills } = adjustment.reason;

        const adjustmentElement: JSX.Element =
          <div id={adjustmentID.toString()}>
            Adjustment {(adjustmentID + 1).toString()}:
            { addItem ? JSON.stringify(addItem) : null }
            { playerStat ? JSON.stringify(playerStat) : null }
            { skillNode ? JSON.stringify(skillNode) : null }
            { skillPart ? JSON.stringify(skillPart) : null }
            <br />Reason:
            { skillPartLevel ? JSON.stringify(skillPartLevel) : null }
            { useSkillPart ? JSON.stringify(useSkillPart) : null }
            { useSkills ? JSON.stringify(useSkills) : null }
            <br />&nbsp;<br />
          </div>;

        adjustmentsElement.push(adjustmentElement);
      });
    }
    return adjustmentsElement;
  }

  public render() {
    const query = adjustmentsByDayLogIDQuery(this.props.logID);
    return (
      <GraphQL query={query}>
        {(graphql: GraphQLResult<QueryType>) => {
          if (graphql.lastError && graphql.lastError !== 'OK') {
            return (
              <LoadingContainer>
                <div>{graphql.lastError}</div>
              </LoadingContainer>
            )
          }
          if (graphql.loading || !graphql.data || !graphql.data.myprogression) {
            return (
              <LoadingContainer>
                <div>Loading...</div>
                <Spinner />
              </LoadingContainer>
            );
          }
          return this.showRewards(graphql.data.myprogression);
        }}
      </GraphQL>
    );
  }
}

export default RewardsView;