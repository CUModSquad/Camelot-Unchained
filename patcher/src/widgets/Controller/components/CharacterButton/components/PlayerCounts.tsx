/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

import * as React from 'react';
import styled from 'react-emotion';
import { MetricsData } from '@csegames/camelot-unchained/lib/graphql/schema';
import { GraphQL, GraphQLResult } from '@csegames/camelot-unchained/lib/graphql/react';

const PlayerCount = styled('span')`
  font-size: 12px;
  color: ${props => props.faction === 'arthurian' ? '#FF8080' : props.faction === 'viking' ? '#6DB9D9' : '#92E989'};
`;

function query(server: string) {
  return `
      {
        metrics {
          currentPlayerCount(server: "${server}") {
            arthurian
            tuatha
            viking
          }
        }
      }
    `
}

type QueryType = {
  metrics: MetricsData;
};

export interface PlayerCountsProps {
  server: string;
}

export interface PlayerCountsState {
  playerCountA: number;
  playerCountT: number;
  playerCountV: number;
}

class PlayerCounts extends React.Component<PlayerCountsProps, PlayerCountsState> {
  constructor(props: PlayerCountsProps) {
    super(props);
    this.state = {
      playerCountA: 0,
      playerCountT: 0,
      playerCountV: 0,
    };
  }

  handleQueryResult = (graphql: GraphQLResult<QueryType>) => {
    if (graphql.data) {
      const currentPlayerCount = graphql.data.metrics.currentPlayerCount;
      if (currentPlayerCount.arthurian !== this.state.playerCountA) {
        this.setState({playerCountA: currentPlayerCount.arthurian});
      }
      if (currentPlayerCount.tuatha !== this.state.playerCountT) {
        this.setState({playerCountT: currentPlayerCount.tuatha});
      }
      if (currentPlayerCount.viking !== this.state.playerCountV) {
        this.setState({playerCountV: currentPlayerCount.viking});
      }
    }
  }

  public render() {
    return (
      <div>
        <PlayerCount faction='arthurian'>{this.state.playerCountA} A</PlayerCount> &nbsp; <PlayerCount faction='tuatha'>{this.state.playerCountT} T</PlayerCount> &nbsp; <PlayerCount faction='viking'>{this.state.playerCountV} V</PlayerCount>
        <GraphQL query={{
        query: query(this.props.server),
        pollInterval: 30000
        }} onQueryResult={this.handleQueryResult} />
      </div>
    );
  }

  public shouldComponentUpdate(nextProps: PlayerCountsProps, nextState: PlayerCountsState) {
    if (this.props.server !== nextProps.server ||
        this.state.playerCountA !== nextState.playerCountA ||
        this.state.playerCountT !== nextState.playerCountT ||
        this.state.playerCountV !== nextState.playerCountV) {
          return true;
        }
    return false;
  }
}

export default PlayerCounts;