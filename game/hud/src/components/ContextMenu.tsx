/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import styled from 'react-emotion';
import { isEmpty } from 'lodash';

import * as actions from 'actions/contextMenu';

const Container = styled('div')`
  background: rgba(0, 0, 0, 0.01);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
`;

const Menu = styled('ol')`
  background: #444;
  list-style: none;
  position: fixed;
  margin: 0;
  padding: 0;
  z-index: 10001;
`;

const Item = styled('li')`
  padding: 5px 10px;
  margin: 0;
  color: #ececec;
  pointer-events: all;
  cursor: pointer;
  &:hover {
    background-color: #888;
  }
`;

export type MenuItem = {
  title: string;
  onSelected: () => void;
};

export type StylePosition = {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
};

export type Props = {
};

export type State = {
  show: boolean;
  styledPosition: StylePosition;
  content: JSX.Element;
  items: MenuItem[];
};

function getViewportWidth() {
  if (window.innerWidth) {
    return window.innerWidth;
  } else if (document.body && document.body.offsetWidth) {
    return document.body.offsetWidth;
  } else {
    return 0;
  }
}

function getViewportHeight() {
  if (window.innerHeight) {
    return window.innerHeight;
  } else if (document.body && document.body.offsetHeight) {
    return document.body.offsetHeight;
  } else {
    return 0;
  }
}

export class ContextMenu extends React.Component<Props, State> {

  private mouseOffset = {
    x: 10,
    y: 0,
  };

  private eventHandles: EventHandle[] = [];

  constructor(props: Props) {
    super(props);
    this.state = {
      show: false,
      items: [],
      content: null,
      styledPosition: {
        right: '-1000px',
        bottom: '-1000px',
      },
    };
    this.eventHandles.push(actions.onShowContextMenu(this.onShowContextMenu));
    this.eventHandles.push(actions.onShowContextMenuContent(this.onShowContextMenuContent));
    this.eventHandles.push(actions.onHideContextMenu(this.hide));
  }

  public componentWillUnmount() {
    this.eventHandles.forEach(eventHandle => eventHandle.clear());
  }

  public render() {
    if (this.state.show === false) return null;

    return (
      <Container data-input-group='block' onMouseDown={this.hide}>
        <Menu onMouseDown={(e: MouseEvent) => e.stopPropagation()} style={this.state.styledPosition}>
          {this.state.content && this.state.content}
          {
            this.state.items &&
              this.state.items.map(item => <Item key={item.title}
                onMouseDown={(event: MouseEvent) => {
                  event.stopPropagation();
                  this.hide();
                  item.onSelected();
                }}>{item.title}</Item>)
          }
        </Menu>
      </Container>
    );
  }

  private hide = () => {
    if (this.state.show === false) return;

    this.setState({
      show: false,
      styledPosition: {
        right: '-1000px',
        bottom: '-1000px',
      },
      items: [],
    });
  }

  private onShowContextMenuContent = (content: JSX.Element, event: MouseEvent) => {
    if (!content) return;

    this.setState({
      show: true,
      styledPosition: this.getStyledPosition(event),
      items: [],
      content,
    });
  }

  private onShowContextMenu = (items: MenuItem[], event: MouseEvent) => {
    // If there are no items, dont show context menu
    if (isEmpty(items)) return;

    this.setState({
      show: true,
      styledPosition: this.getStyledPosition(event),
      items,
      content: null,
    });
  }


  private getStyledPosition = (event: MouseEvent) => {
    let styledPosition: StylePosition = {};

    // using props initialEvent figure out position
    if (event.clientX + event.clientX < getViewportWidth()) {
      // left side
      if (event.clientY + event.clientY < getViewportHeight()) {
        // top
        styledPosition = {
          left: event.clientX + this.mouseOffset.x + 'px',
          top: event.clientY + this.mouseOffset.y + 'px',
        };
      } else {
        // bottom
        styledPosition = {
          left: event.clientX + this.mouseOffset.x + 'px',
          bottom: getViewportHeight() - event.clientY + this.mouseOffset.y + 'px',
        };
      }
    } else {
      // right side
      if (event.clientY + event.clientY < getViewportHeight()) {
        // top
        styledPosition = {
          right: getViewportWidth() - event.clientX + this.mouseOffset.x + 'px',
          top: event.clientY + this.mouseOffset.y + 'px',
        };
      } else {
        // bottom
        styledPosition = {
          right: getViewportWidth() - event.clientX + this.mouseOffset.x + 'px',
          bottom: getViewportHeight() - event.clientY + this.mouseOffset.y + 'px',
        };
      }
    }

    return styledPosition;
  }
}
