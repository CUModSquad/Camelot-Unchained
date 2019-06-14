/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import { styled } from '@csegames/linaria/react';
import { isEqual } from 'lodash';

const fadeTime = 2000;

const FadeAlertItem = styled.div`
  position: fixed;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 15px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000 !important;
  z-index: 9999;
  -webkit-animation: fadeOut 500ms ease-in-out;
  -webkit-animation-delay: ${fadeTime - 500}ms;
  animation: fadeOut 500ms ease-in-out;
  animation-delay: ${fadeTime - 500}ms;

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

export interface Alert {
  id: number;
  message: string;
}

export interface Props {
}

export interface State {
  alertMessage: string;
  clientX: number;
  clientY: number;
  messageStyles: React.CSSProperties;
}

export class ActionAlert extends React.Component<Props, State> {
  private actionAlertListener: EventHandle;
  private removeTimer: number;
  constructor(props: Props) {
    super(props);
    this.state = {
      alertMessage: '',
      clientX: 0,
      clientY: 0,
      messageStyles: null,
    };
  }

  public render() {
    const { alertMessage, clientX, clientY, messageStyles } = this.state;
    return alertMessage ? (
      <FadeAlertItem
        style={{ top: `${clientY}px`, left: `${clientX}px`, ...messageStyles }}
      >
        {alertMessage}
      </FadeAlertItem>
    ) : null;
  }

  public componentDidMount() {
    this.actionAlertListener = game.on('show-action-alert', this.handleShowAlert);
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    return !isEqual(this.state.alertMessage, nextState.alertMessage) ||
      this.state.clientX !== nextState.clientX ||
      this.state.clientY !== nextState.clientY;
  }

  public componentWillUnmount() {
    this.actionAlertListener.clear();

    if (this.removeTimer) {
      window.clearTimeout(this.removeTimer);
      this.removeTimer = null;
    }
  }

  private handleShowAlert = (
    alertMessage: string,
    mousePos: { clientX: number, clientY: number },
    messageStyles?: React.CSSProperties,
  ) => {
    this.setState({ alertMessage, clientX: mousePos.clientX, clientY: mousePos.clientY, messageStyles });
    this.removeTimer = window.setTimeout(() =>
      this.setState({ alertMessage: '', clientX: 0, clientY: 0, messageStyles: null }),
    fadeTime);
  }
}
