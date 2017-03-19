/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2016-09-06 17:53:23
 * @Last Modified by: JB (jb@codecorsair.com)
 * @Last Modified time: 2017-03-06 18:41:29
 */

import * as React from 'react';
interface AudioProps extends React.HTMLProps<HTMLAudioElement> {
  id: string;
  ref?: any;
  onRefCallback: (ref: HTMLAudioElement) => void;
  onEnded: (e: React.SyntheticEvent<HTMLAudioElement>, id?: string) => void;
}

export default class Audio extends React.Component<AudioProps, {}> {
  private handleEnd = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const {
      onEnded,
      id,
    } = this.props;

    if (typeof onEnded === 'function') {
      onEnded(e, id);
    }
  }

  private handleRef = (r: HTMLAudioElement) => {
    this.props.onRefCallback(r);
  }

  public render() {
    const {
      id,
      onEnded,
      onRefCallback,
      ...otherProps,
    } = this.props;
    return (
      <audio
        ref={this.handleRef}
        autoPlay
        onEnded={this.handleEnd}
        {...otherProps}
      />
    );
  }
}
