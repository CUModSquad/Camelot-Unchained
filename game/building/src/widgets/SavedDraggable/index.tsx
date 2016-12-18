/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import {connect} from 'react-redux';
const Resizable = require('react-resizable').Resizable;
const ResizableBox = require('react-resizable').ResizableBox;
const Draggable = require('react-draggable');
const DraggableCore = Draggable.DraggableCore;

const CURRENT_STATE_VERSION: number = 5;
const MIN_STATE_VERSION_PERCENT: number = 5;

export enum Anchor {
  TO_START = -1,
  TO_CENTER = 0,
  TO_END = 1
}

export interface AnchoredAxis {
  anchor: Anchor;               // -1 (start) 0 (center) 1 (end)
  px: number;
}

interface AnchoredPosition {
  x: AnchoredAxis;
  y: AnchoredAxis;
  size: Size;
  scale: number;
}

export interface AbsolutePosition {
  x: number,
  y: number,
  size: Size
  scale: number;
}

export interface Size {
  width: number;
  height: number;
}

interface LayoutState {
  version?: number;
  position: AnchoredPosition;
}

export interface SavedDraggableProps {
  saveName: string;
  defaultX: [number, Anchor];
  defaultY: [number, Anchor];
  defaultSize?: [number, number];
  defaultScale?: number;
  scaleOnWheel?: boolean;
}

export interface SavedDraggableState {
  absolutePosition: AbsolutePosition;
  resizable: boolean;
  scaleOnWheel: boolean;
}

const SAVE_PREFIX = "cu/game/draggable/";
const MIN_SCALE = 0.5;
const MAX_SCALE = 4.0;

class SavedDraggable extends React.Component<SavedDraggableProps, SavedDraggableState> {


  constructor(props: SavedDraggableProps) {
    super(props);

    this.state = this.loadLayoutState();
  }

  getScreenSize(): Size {
    return { width: window.innerWidth, height: window.innerHeight }
  }

  loadLayoutState(): SavedDraggableState {
    const screen: Size = this.getScreenSize();
    const defaultPos: AnchoredPosition = {
      x: { px: this.props.defaultX[0], anchor: this.props.defaultX[1] },
      y: { px: this.props.defaultY[0], anchor: this.props.defaultY[1] },
      size: { width: 0, height: 0 },
      scale: 1
    };

    let resizable = false;
    if (this.props.defaultSize != null) {
      resizable = true;
      defaultPos.size = {
        width: this.props.defaultSize[0],
        height: this.props.defaultSize[1]
      };
    }

    if (this.props.defaultScale != null)
      defaultPos.scale = this.props.defaultScale;

    const absPosition: AbsolutePosition = this.loadLayout(this.anchored2position(defaultPos, screen), screen);

    return {
      absolutePosition: absPosition,
      resizable: resizable,
      scaleOnWheel: this.props.scaleOnWheel
    }
  }


  axis2anchor(position: number, width: number, range: number): AnchoredAxis {
    if (position < (range * 0.25)) return { anchor: Anchor.TO_START, px: position };
    if ((position + width) > (range * 0.75)) return { anchor: Anchor.TO_END, px: range - position };
    return { anchor: Anchor.TO_CENTER, px: position - (range * 0.5) };
  }

  position2anchor(current: AbsolutePosition, screen: Size): AnchoredPosition {
    return {
      x: this.axis2anchor(current.x, current.size.width, screen.width),
      y: this.axis2anchor(current.y, current.size.height, screen.height),
      size: {
        width: current.size.width,
        height: current.size.height
      },
      scale: current.scale
    };
  }

  anchor2axis(anchored: AnchoredAxis, range: number): number {
    switch (anchored.anchor) {
      case Anchor.TO_CENTER: // relative to center
        return (range * 0.5) + anchored.px;
      case Anchor.TO_START: // relative to start
        return anchored.px;
      case Anchor.TO_END:
        return range - anchored.px;
    }
  }

  anchored2position(anchored: AnchoredPosition, screen: Size): AbsolutePosition {
    return {
      x: this.anchor2axis(anchored.x, screen.width),
      y: this.anchor2axis(anchored.y, screen.height),
      size: anchored.size,
      scale: anchored.scale
    };
  }

  forceOnScreen(pos: AbsolutePosition, screen: Size): AbsolutePosition {
    //const size = pos.size;
    const size = { width: pos.size.width * pos.scale, height: pos.size.height * pos.scale };

    while (size.width > screen.width || size.height > screen.height) {
      pos.scale -= 0.1;
      size.width = pos.size.width * pos.scale,
        size.height = pos.size.height * pos.scale
    }

    if (pos.x < 0) pos.x = 0;
    if (pos.y < 0) pos.y = 0;
    if (pos.x + size.width > screen.width) pos.x = screen.width - size.width;
    if (pos.y + size.height > screen.height) pos.y = screen.height - size.height;
    if (pos.x < 0) { pos.x = 0; size.width = screen.width; }
    if (pos.y < 0) { pos.y = 0; size.height = screen.height; }
    return pos;
  }

  savePositionAndSize(position: AbsolutePosition) {
    const screen: Size = this.getScreenSize();
    position = this.forceOnScreen(position, screen);

    const save: LayoutState = {
      version: CURRENT_STATE_VERSION,
      position: this.position2anchor(position, screen),
    };
    localStorage.setItem(SAVE_PREFIX + this.props.saveName, JSON.stringify(save));
  }


  loadLayout(defaultPosition: AbsolutePosition, screen: Size): AbsolutePosition {
    const state: LayoutState = JSON.parse(localStorage.getItem(SAVE_PREFIX + this.props.saveName)) as LayoutState;
    //const state: LayoutState = null;

    if (state && ((state.version | 0) >= MIN_STATE_VERSION_PERCENT)) {
      defaultPosition = this.anchored2position(state.position, screen);
    }

    return this.forceOnScreen(defaultPosition, screen);
  }

  saveLayout = (event: Event, dragPosition: { x: number, y: number }) => {
    let position: AbsolutePosition = {
      x: dragPosition.x,
      y: dragPosition.y,
      size: this.state.absolutePosition.size,
      scale: this.state.absolutePosition.scale
    };
    this.savePositionAndSize(position);
    this.setState({ absolutePosition: position } as SavedDraggableState);
    this.stopDrag();
  }

  saveResize = (event: Event, resize: { element: any, size: Size }) => {
    let position: AbsolutePosition = {
      x: this.state.absolutePosition.x,
      y: this.state.absolutePosition.y,
      size: this.state.absolutePosition.size,
      scale: this.state.absolutePosition.scale
    };


    this.savePositionAndSize(position);

    this.setState({ absolutePosition: position } as SavedDraggableState);
    this.stopDrag();
  }

  trimDigits(value: number, digitsAfterDecimal: number) {
    let precision: number = 1;
    if (digitsAfterDecimal > 0)
      precision = digitsAfterDecimal * 10;
    if (digitsAfterDecimal < 0)
      precision = 1 / digitsAfterDecimal * 10;

    return Math.floor(value * precision) / precision;
  }

  handleResize = (event: any, resize: { element: any, size: any }) => {

    let scale = this.state.absolutePosition.scale;
    let size = this.state.absolutePosition.size;

    //drag = rescale
    //ALT+drag = resize
    if (event.altKey) {
      size = { width: this.trimDigits(resize.size.width / scale, 1), height: this.trimDigits(resize.size.height / scale, 1) }
    } else {
      scale = this.trimDigits(resize.size.width / this.state.absolutePosition.size.width, 1);

      if (scale < MIN_SCALE)
        scale = MIN_SCALE;
      if (scale > MAX_SCALE)
        scale = MAX_SCALE;
    }

    let position: AbsolutePosition = {
      x: this.state.absolutePosition.x,
      y: this.state.absolutePosition.y,
      size: size,
      scale: scale
    };

    this.setState({ absolutePosition: position } as SavedDraggableState);
  }

  handleWheel = (e: any) => {
    if (!this.state.scaleOnWheel)
      return;

    const factor = 0.10;
    let scale = this.state.absolutePosition.scale;

    if (e.nativeEvent.deltaY < 0) {
      scale -= factor;
    } else {
      scale += factor;
    }

    if (scale < MIN_SCALE)
      scale = MIN_SCALE;
    if (scale > MAX_SCALE)
      scale = MAX_SCALE;

    let position: AbsolutePosition = {
      x: this.state.absolutePosition.x,
      y: this.state.absolutePosition.y,
      size: this.state.absolutePosition.size,
      scale: scale
    };

    this.savePositionAndSize(position);
    this.setState({ absolutePosition: position } as SavedDraggableState);
  }

  handleWindowResize = (ev: UIEvent) => {
    //minimizing the window sets the innerWidth/Height to zero. 
    //this prevents that from messing with the calculations
    if (window.innerWidth >= 640 && window.innerHeight >= 480) {
      this.setState(this.loadLayoutState());
    }
  }

  startDrag = () => {
    window.document.body.style.backgroundColor = 'rgba(100,100,200, 0.1)';
  }

  stopDrag = () => {
    window.document.body.style.backgroundColor = null;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    this.stopDrag();
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  render() {
    const screen: Size = this.getScreenSize();
    const pos = this.state.absolutePosition;
    const grid = [10, 10];

    let content: JSX.Element = (<div style={{
      transform: `scale(${pos.scale})`,
      '-webkit-transform': `scale(${pos.scale})`,
      'transform-origin': 'top left',
      '-webkit-transform-origin': 'top left',
      width: pos.size.width + 'px',
      height: (pos.size.height) + 'px'
    }}
      onWheel={this.handleWheel}>
      {this.props.children}
    </div>);

    if (this.state.resizable) {
      content = (
        <Resizable width={pos.size.width * pos.scale} height={pos.size.height * pos.scale}
          draggableOpts={{ grid: grid }}
          onResizeStart={this.startDrag}
          onResize={this.handleResize}
          onResizeStop={this.saveResize} >
          {content}
        </Resizable>
      );
    }

    return (
      <Draggable handle=".dragHandle"
        position={pos} grid={grid} zIndex={100}
        onStart={this.startDrag}
        onStop={this.saveLayout} >
        <div className="building__saveddraggable">
          {content}
        </div>
      </Draggable >
    )
  }
}

export default SavedDraggable;
