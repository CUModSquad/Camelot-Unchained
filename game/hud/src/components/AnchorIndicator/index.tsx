
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import {Position} from '../../services/session/layout';

export interface AnchorIndicatorProps {
  name: string;     // widget name
  pos: Position;    // current widget position
  setAnchor: (name: string, pos: Position) => void;
}

export interface AnchorIndicatorState {
}

class AnchorIndicator extends React.Component<AnchorIndicatorProps, AnchorIndicatorState> {

  constructor(props: AnchorIndicatorProps) {
    super(props);
  }

  private anchorHere = (event: React.MouseEvent) => {
    const el: HTMLDivElement = event.currentTarget as HTMLDivElement;
    function a2n(a: string) : number {
      switch(a) {
        case 's': return -1;
        case 'e': return 1;
      }
      return 0;
    }
    const pos: Position = Object.assign({}, this.props.pos);
    let x: number = a2n(el.classList[1][7]);
    let y: number = a2n(el.classList[2][7]);
    if (x === pos.anchor.x && y === pos.anchor.y) {
      pos.anchor.locked = !pos.anchor.locked;
    } else {
      pos.anchor.locked = true;
      pos.anchor.x = x;
      pos.anchor.y = y;
    }
    this.props.setAnchor(this.props.name, pos);
  }

  render() {
    const anchors: JSX.Element[] = [];
    const pos: Position = this.props.pos;
    let key: number = 0;
    for (var x = -1; x < 2; x++) {
      for (let y: number = -1; y < 2; y++) {
        const classNames: string[] = [ 'anchor' ];
        classNames.push(x < 0 ? 'x-axis-start' : x > 0 ? 'x-axis-end' : 'x-axis-center');
        classNames.push(y < 0 ? 'y-axis-start' : y > 0 ? 'y-axis-end' : 'y-axis-center');
        if (pos.anchor.x === x && pos.anchor.y === y) {
          classNames.push('current');
          if (pos.anchor.locked) classNames.push('locked');
        }
        anchors.push(<div key={key++} className={classNames.join(' ')} onClick={this.anchorHere}/>);
      }
    }
    return (
      <div className="AnchorIndicator-main">
        {anchors}
      </div>
    );
  }
}

export default AnchorIndicator;
