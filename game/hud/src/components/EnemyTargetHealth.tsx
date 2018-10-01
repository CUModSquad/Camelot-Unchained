/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { EnemyTargetState } from '@csegames/camelot-unchained';
import * as React from 'react';
import * as _ from 'lodash';
import styled from 'react-emotion';

import { isEqualPlayerState } from '../lib/playerStateEqual';
import HealthBar from './HealthBar';
import { showEnemyTargetContextMenu } from 'actions/contextMenu';

const Container = styled('div')`
  transform: scale(0.45);
  -webkit-transform: scale(0.45);
  margin-left: -125px;
  margin-top: -80px;
  pointer-events: auto;
`;

export interface PlayerHealthProps {

}

export interface PlayerHealthState {
  playerState: EnemyTargetState;
}

class PlayerHealth extends React.Component<PlayerHealthProps, PlayerHealthState> {
  private eventEnemyTargetStateOnUpdatedHandle: EventHandle;
  constructor(props: PlayerHealthProps) {
    super(props);
    this.state = {
      playerState: null,
    };
    this.setPlayerState = _.throttle(this.setPlayerState, 100);
  }

  public render() {
    if (!this.state.playerState || this.state.playerState.type !== 'player') return null;

    return (
      <Container onContextMenu={this.handleContextMenu}>
        <HealthBar type='compact' target='enemy' playerState={this.state.playerState} />
      </Container>
    );
  }

  public componentDidMount() {
    this.eventEnemyTargetStateOnUpdatedHandle = game.enemyTargetState.onUpdated(() => {
      this.setPlayerState(game.enemyTargetState as EnemyTargetState);
    });
  }

  public componentWillUnmount() {
    this.eventEnemyTargetStateOnUpdatedHandle.clear();
  }

  public shouldComponentUpdate(nextProps: PlayerHealthProps, nextState: PlayerHealthState) {
    return !isEqualPlayerState(nextState.playerState, this.state.playerState);
  }

  private setPlayerState = (playerState: EnemyTargetState) => {
    this.setState({ playerState });
  }

  private handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    showEnemyTargetContextMenu(this.state.playerState, event);
  }
}

export default PlayerHealth;
