/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

import * as React from 'react';
import styled from 'react-emotion';
import { filter } from 'lodash';
import { events } from '@csegames/camelot-unchained';
import { ProgressionAlert, IInteractiveAlert } from '@csegames/camelot-unchained/lib/graphql/schema';

// Utility Functions
export function removeProgressionAlert(alertsList: IInteractiveAlert[], toRemove: ProgressionAlert) {
  const alerts = filter([...alertsList], (a) => {
    return !(a.category === 'Progression' && (a as ProgressionAlert).when === toRemove.when);
  });
  return {
    alerts,
  };
}

const Container = styled('div')`
  position: relative;
`;

const AlertText = styled('div')`
  background: url(images/alert/text-background.png) no-repeat;
  width: 504px;
  height: 59px;
  margin: 0 auto;
`;

const AlterTextInner = styled('div')`
  width: 340px;
  height: 59px;
  max-height: 59px;
  margin: 0 auto;
  padding: 10px 0 0;
  overflow: hidden;
  text-align: center;
  color: #baa892;
  font-family: 'Caudex', serif;
  font-size: 14px;
`;

const AlertButton = styled('div')`
  background: url(images/alert/button-background.png) no-repeat;
  width: 420px;
  height: 49px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const AlertButtonContainer = styled('div')`
  width: 50%;
`;

const AlertLeftButton = styled('div')`
  background: url(images/alert/button-off.png) no-repeat;
  width: 82px;
  height: 27px;
  float: right;
  margin: 10px 10px 0 0;
  text-align: center;
  color: #828282;
  cursor: pointer;
  &:hover {
    background: url(images/alert/button-on.png) no-repeat;
    color: #968876;
  }
`;

const AlertRightButton = styled('div')`
  background: url(images/alert/button-off.png) no-repeat;
  width: 82px;
  height: 27px;
  margin: 10px 0 0 10px;
  text-align: center;
  color: #828282;
  cursor: pointer;
  &:hover {
    background: url(images/alert/button-on.png) no-repeat;
    color: #968876;
  }
`;

export interface Props {
  alert: ProgressionAlert;
  remove: (alert: IInteractiveAlert) => void;
}

export interface State {

}

export class ProgressionAlertView extends React.Component<Props, State> {
  public render() {
    return (
      <Container>
        <AlertText>
            <AlterTextInner>
                A new progression report is available! Would you like to view it now and collect your rewards?
            </AlterTextInner>
        </AlertText>
        <AlertButton>
            <AlertButtonContainer><AlertLeftButton onClick={this.onOpenProgressionClick}>Yes</AlertLeftButton></AlertButtonContainer>
            <AlertButtonContainer><AlertRightButton onClick={this.onDismissClick}>Later</AlertRightButton></AlertButtonContainer>
        </AlertButton>
      </Container>
    );
  }

  private onOpenProgressionClick = () => {
    events.fire('hudnav--navigate', 'progression', true);
    this.props.remove(this.props.alert);
  }

  private onDismissClick = () => {
    this.props.remove(this.props.alert);
  }
}
