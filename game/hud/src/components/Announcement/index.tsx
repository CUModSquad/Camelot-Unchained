/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class AnnouncementProps {}

class AnnouncementState {
  public message: string = '';
}

class Announcement extends React.Component<AnnouncementProps, AnnouncementState> {

  private eventOnAnnouncementHandle: EventHandle;
  private isUnMounting: boolean = false;

  public render() {
    const messageClassNames = 'message ' + (this.state.message.length < 20 ? 'large ' : '');
    let announcement: any;
    if (this.state.message) {
      announcement = (
        <div className='announcement' key={this.state.message}>
          <div className={messageClassNames}>{this.state.message}</div>
        </div>
      );
    }

    return (
      <CSSTransitionGroup transitionName='announcement' transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {announcement}
      </CSSTransitionGroup>
    );
  }

  public componentDidMount() {
    this.eventOnAnnouncementHandle = game.onAnnouncement((message: string) => {
      this.setState({ message });
      setTimeout(() => {
        if (!this.isUnMounting) {
          this.setState({ message: '' });
        }
      }, 20000);
    });
    this.setState({ message: '' });
  }

  public componentWillUnmount() {
    this.isUnMounting = true;
    this.eventOnAnnouncementHandle.clear();
  }
}

export default Announcement;
