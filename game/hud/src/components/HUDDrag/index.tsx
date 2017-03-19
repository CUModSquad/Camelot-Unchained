/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import {merge, clone, Dictionary} from '../../lib/reduxUtils';

export enum LayoutMode {
  FLOAT,
  GRID,
  EDGESNAP,
  WIDGETSNAP
}

export enum Edge {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
}

enum EditMode {
  NONE,
  MOVE,
  SIZEX,
  SIZEXLEFT,
  SIZEY,
  SIZEYUP,
  SIZEBOTH,
  SCALE,
  SCALEHOLD,
  OPACITY,
  OPACITYHOLD,
}

export interface HUDSize {
  height: number;
  width: number;
  scale: number;
}

export interface HUDPosition {
  height: number;
  width: number;
  scale: number;
  x: number;
  y: number;
  visible: boolean;
  layoutMode?: LayoutMode;
  xGrid?: number;
  yGrid?: number;
  edge?: Edge;
}

export interface HUDDragOptions {
  minHeight?: number; // px -- default: this.defaultHeight / 4
  minWidth?: number; // px -- default: this.defaultWidth / 4
  maxHeight?: number; // px -- default: this.defaultHeight * 5
  maxWidth?: number; // px; -- default: this.defaultWidth * 5

  minScale?: number; // % -- default: .25
  maxScale?: number; // % -- default: 3

  defaultVisible?: boolean;  // is this widget visible -- default: true

  lockHeight?: boolean;
  lockWidth?: boolean;
  lockScale?: boolean;
  lockX?: boolean;
  lockY?: boolean;
  lockDrag?: boolean;
  lockVisibility?: boolean;
  lockOpacity?: boolean;

  scaleFactor?: number; // default 0.01
}

export interface HUDDragProps extends HUDDragOptions {
  // element specific
  name: string;

  defaultHeight: number; // px
  defaultWidth: number;  // px

  defaultScale: number;  // %
  defaultOpacity: number; // %

  defaultX: number; // x position in px from grid line
  defaultY: number;  // y position in px from grid line
  defaultXAnchor: any;  // position relative to grid index on x
  defaultYAnchor: any;  // position relative to grid index on You

  defaultMode: LayoutMode;

  render: (size: HUDSize) => any;  // function called to render this view withint the defined space.
  save: (position: HUDPosition) => any; // called to save position.

  // general settings
  locked: boolean;  // is the ui locked for editing?
  gridDivisions: number; // how divided is the grid (we divide the height and width by this number)
}


export interface HUDDragState {
  height: number;
  width: number;
  scale: number;
  opacity: number;
  x: number;
  y: number;
  visible: boolean;

  // GRID MODE
  xAnchor?: any;
  yAnchor?: any;

  // config
  minHeight: number;
  minWidth: number;
  maxHeight: number;
  maxWidth: number;
  minScale: number;
  maxScale: number;
  scaleFactor: number;

  // controls
  mode: EditMode
  layoutMode: LayoutMode;
}

class HUDDrag extends React.Component<HUDDragProps, HUDDragState> {

  private didUpdate: boolean = false;

  constructor(props: HUDDragProps) {
    super(props);
    this.state = {
      height: props.defaultHeight,
      width: props.defaultWidth,
      scale: props.defaultScale,
      opacity: props.defaultOpacity,
      x: props.defaultX,
      y: props.defaultY,
      xAnchor: props.defaultXAnchor,
      yAnchor: props.defaultYAnchor,
      visible: props.defaultVisible || true,

      minHeight: props.minHeight || props.defaultHeight / 4,
      maxHeight: props.maxHeight || props.defaultHeight * 5,
      minWidth: props.minWidth || props.defaultWidth / 4,
      maxWidth: props.maxWidth || props.defaultWidth * 5,
      minScale: props.minScale || 0.5,
      maxScale: props.maxScale || 3,

      scaleFactor: props.scaleFactor || 0.01,

      mode: EditMode.NONE,
      layoutMode: props.defaultMode || LayoutMode.GRID,
    };
  }

  componentWillReceiveProps(props: HUDDragProps) {

    if (this.state.mode == EditMode.NONE) {
      this.setState({
        height: props.defaultHeight,
        width: props.defaultWidth,
        scale: props.defaultScale,
        opacity: props.defaultOpacity,
        x: props.defaultX,
        y: props.defaultY,
        xAnchor: props.defaultXAnchor,
        yAnchor: props.defaultYAnchor,
        visible: props.defaultVisible || true,

        minHeight: props.minHeight || props.defaultHeight / 4,
        maxHeight: props.maxHeight || props.defaultHeight * 5,
        minWidth: props.minWidth || props.defaultWidth / 4,
        maxWidth: props.maxWidth || props.defaultWidth * 5,
        minScale: props.minScale || 0.5,
        maxScale: props.maxScale || 3,

        scaleFactor: props.scaleFactor || 0.01,

        mode: EditMode.NONE,
        layoutMode: props.defaultMode || LayoutMode.GRID,
      });
    }
  
    if (this.state.layoutMode === LayoutMode.EDGESNAP) {
      const fixedPos = this.getPosition();
      const pos = HUDDrag.fixedToEdgeSnap(fixedPos.x, fixedPos.y, this.state.height, this.state.width);
      this.setState(pos as any);
    }

    // update min & max height if needed
    let stateUpdate: any = {};

    if (this.props.minHeight !== props.minHeight) {
      stateUpdate.minHeight = props.minHeight || props.defaultHeight / 4;
    }

    if (this.props.maxHeight !== props.maxHeight) {
      stateUpdate.maxHeight = props.maxHeight || props.defaultHeight * 5;
    }

    if (this.props.minWidth !== props.minWidth) {
      stateUpdate.minWidth = props.minWidth || props.defaultWidth / 4;
    }

    if (this.props.maxWidth !== props.maxWidth) {
      stateUpdate.maxWidth = props.maxWidth || props.defaultWidth * 5;
    }

    if (this.props.defaultVisible !== props.defaultVisible) {
      stateUpdate.visible = props.defaultVisible;
    }

    if (stateUpdate !== {}) this.setState(stateUpdate);
  }

  private setMode = (m: EditMode) => {
    this.setState({
      mode: m
    } as any);
  }

  
  private lastPosition = {x: NaN , y: NaN}
  private mouseMovement = (e: MouseEvent) => {
    if (this.lastPosition.x === NaN) {
      // just starting to move, so 0 move
      this.lastPosition = {x: e.screenX, y: e.screenY};
      return {x: 0, y: 0};
    }
    const movement = {x: e.screenX - this.lastPosition.x, y: e.screenY - this.lastPosition.y};
    this.lastPosition = {x: e.screenX, y: e.screenY};
    return movement;
  }

  private onMouseMove = (e: MouseEvent | any) => {
    let mouseMove = this.mouseMovement(e);
    switch(this.state.mode) {
      default: return;
      case EditMode.NONE: return;
      case EditMode.MOVE:
      {
        const deltaX = this.props.lockX ? 0 : mouseMove.x;
        const deltaY = this.props.lockY ? 0 : mouseMove.y;
        const fixedPos = this.getPosition();
        switch (this.state.layoutMode) {
          case LayoutMode.GRID:
          {
            const pos = HUDDrag.fixedToGrid(fixedPos.x + deltaX, fixedPos.y + deltaY, this.props.gridDivisions);
            this.setState(pos as any);
          }
          break;
          case LayoutMode.EDGESNAP:
          {
            const pos = HUDDrag.fixedToEdgeSnap(fixedPos.x + deltaX, fixedPos.y + deltaY, this.state.height, this.state.width);
            this.setState(pos as any);
          }
          break;
        }

        
      }
      break;
      case EditMode.SIZEX:
      {
        const deltaX = mouseMove.x;
        this.setState({
          width: this.state.width + deltaX,
        } as any);
      }
      break;
      case EditMode.SIZEXLEFT:
      {
        const deltaX = mouseMove.x;
        this.setState({
          x: this.state.x + deltaX,
          width: this.state.width - deltaX,
        } as any);
      }
      break;
      case EditMode.SIZEY:
      {
        const deltaY = mouseMove.y;
        this.setState({
          height: this.state.height + deltaY,
        } as any);
      }
      break;
      case EditMode.SIZEYUP:
      {
        const deltaY = mouseMove.y;
        this.setState({
          y: this.state.y + deltaY,
          height: this.state.height - deltaY,
        } as any);
      }
      break;
      case EditMode.SIZEBOTH:
      {
        const deltaX = mouseMove.x;
        const deltaY = mouseMove.y;
        this.setState({
          width: this.state.width + deltaX,
          height: this.state.height + deltaY,
        } as any);
      }
      break;
      case EditMode.SCALE: 
      {
        this.setScale(this.state.scale + (mouseMove.y * this.state.scaleFactor))
      }
      break;
      case EditMode.OPACITY: 
      {
        this.setOpacity(this.state.opacity + (mouseMove.y * 0.01))
      }
      break;
    }
    this.didUpdate = true;
  }

  private onMouseDown = (e: any, mode: EditMode) => {
    // check if we can do this or not...

    // for now we always allow it
    this.setMode(mode);
    e.preventDefault();
    e.stopPropagation();
    this.lastPosition = {x: e.screenX , y: e.screenY}
  }

  private onMouseUp = () => {
    this.lastPosition = {x: NaN , y: NaN};
    this.mouseDownForScaleHold = false;
    if (this.mouseScaleHoldInitTimeout != null) {
      clearTimeout(this.mouseScaleHoldInitTimeout);
    }
    this.mouseDownForOpacityHold = false;
    if (this.mouseDownForOpacityHold != null) {
      clearTimeout(this.mouseOpacityHoldInitTimeout);
    }
    if (this.state.mode != EditMode.NONE) this.setMode(EditMode.NONE);
    if (this.didUpdate) {
      this.props.save(clone(this.state));
      this.didUpdate = false;
    }
  }

  private setScale = (s: number) => {
    if (s < this.state.minScale) s = this.state.minScale;
    if (s > this.state.maxScale) s = this.state.maxScale;
    this.setState({scale: s} as any);
    this.didUpdate = true;
  }

  private setOpacity = (o: number) => {
    if (o < 0.1) o = 0.1;
    if (o > 1) o = 1;
    this.setState({opacity: o} as any);
    this.didUpdate = true;
  }

  private setVisible = (v: boolean) => {
    this.setState({visible: v} as any);
    this.didUpdate = true;
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp)
    window.addEventListener('mousemove', this.onMouseMove);
  }

  private mouseDownForScaleHold: boolean = false;
  private mouseScaleHoldInitTimeout: NodeJS.Timer = null;
  private startScaleHold = (up: boolean) => {
    if (this.mouseDownForScaleHold || this.state.mode != EditMode.NONE) return;
    this.mouseDownForScaleHold = true;
    
    this.mouseScaleHoldInitTimeout = setTimeout(() => {
      if (this.mouseDownForScaleHold) {
        this.setMode(EditMode.SCALEHOLD);
      }
      this.runScaleHold(up, true, 1);
    }, 750);
  }

  private runScaleHold = (up: boolean, initial: boolean, speed: number) => {
    if (!initial && this.state.mode != EditMode.SCALEHOLD) return;

    const s = up ? this.state.scale + this.state.scaleFactor : this.state.scale - this.state.scaleFactor;
    this.setScale(s);
    setTimeout(() => this.runScaleHold(up, false, speed - 0.00001), 700 * speed > 0.5 ? speed : 0.5);
  }

  private mouseDownForOpacityHold: boolean = false;
  private mouseOpacityHoldInitTimeout: NodeJS.Timer = null;
  private startOpacityHold = (up: boolean) => {
    if (this.mouseDownForOpacityHold || this.state.mode != EditMode.NONE) return;
    this.mouseDownForOpacityHold = true;
    
    this.mouseScaleHoldInitTimeout = setTimeout(() => {
      if (this.mouseDownForOpacityHold) {
        this.setMode(EditMode.OPACITYHOLD);
      }
      this.runOpacityHold(up, true, 1);
    }, 750);
  }

  private runOpacityHold = (up: boolean, initial: boolean, speed: number) => {
    if (!initial && this.state.mode != EditMode.OPACITYHOLD) return;

    const o = this.state.opacity + (up ? 0.01 : -0.01);
    this.setOpacity(o);
    setTimeout(() => this.runOpacityHold(up, false, speed - 0.00001), 700 * speed > 0.5 ? speed : 0.5);
  }

  private getPosition = () => {
    switch(this.state.layoutMode) {
      default: return null;
      case LayoutMode.GRID: return HUDDrag.gridToFixed(this.state.x, this.state.y, this.state.xAnchor, this.state.yAnchor, this.props.gridDivisions);
      case LayoutMode.EDGESNAP:
      {
        const screen = { width: window.innerWidth, height: window.innerHeight };
        return {
          x: this.state.xAnchor == Edge.LEFT ?  this.state.x : screen.width - this.state.width * this.state.scale - this.state.x,
          y: this.state.yAnchor == Edge.TOP ? this.state.y : screen.height - this.state.height * this.state.scale - this.state.y
        };
      }
    }
  }


  private static gridToFixed(x: number, y: number, xGrid: number, yGrid: number, divisions: number) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
      x: (width / divisions) * xGrid + x,
      y: (height / divisions) * yGrid + y
    }
  }

  private static fixedToGrid(x: number, y: number, divisions: number) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const segmentWidth = width / divisions;
    const segmentHeight = height / divisions;

    const xGrid = (x / segmentWidth) | 0;
    const yGrid = (y / segmentHeight) | 0;

    return {
      x: x - segmentWidth * xGrid,
      xAnchor: xGrid,
      y: y - segmentHeight * yGrid,
      yAnchor: yGrid
    }
  }

  private static fixedToEdgeSnap(x: number, y: number, h: number, w: number) {
    const s = { w: window.innerWidth, h: window.innerHeight };

    let left = y < (s.w - (y - w));
    let top = x < (s.h - (x - h));

    return {
      x: left ? x : s.w - x + w,
      xAnchor: left ? Edge.LEFT : Edge.RIGHT,
      y: top ? y : s.h - y + h,
      yAnchor: top ? Edge.TOP : Edge.BOTTOM,
    }
  }

  private renderEditControls = () => {
    return (
      <div className='HUDDrag__controls'>
        <div className='HUDDrag__controls__name'>{this.props.name}</div>
        {this.props.lockDrag || (this.props.lockX && this.props.lockY) ? null : <div className='HUDDrag__controls__dragHandle' onMouseDown={e => this.onMouseDown(e, EditMode.MOVE)}/>}
        {this.props.lockWidth ? null : <div className='HUDDrag__controls__resizeXHandle HUDDrag__controls__resizeXHandle--left' onMouseDown={e => this.onMouseDown(e, EditMode.SIZEXLEFT)}/>}
        {this.props.lockWidth ? null : <div className='HUDDrag__controls__resizeXHandle HUDDrag__controls__resizeXHandle--right' onMouseDown={e => this.onMouseDown(e, EditMode.SIZEX)}/>}
        {this.props.lockHeight ? null : <div className='HUDDrag__controls__resizeYHandle HUDDrag__controls__resizeYHandle--top' onMouseDown={e => this.onMouseDown(e, EditMode.SIZEYUP)}/>}
        {this.props.lockHeight ? null : <div className='HUDDrag__controls__resizeYHandle HUDDrag__controls__resizeYHandle--bottom' onMouseDown={e => this.onMouseDown(e, EditMode.SIZEY)}/>}
        {this.props.lockWidth || this.props.lockHeight ? null : <div className='HUDDrag__controls__resizeXYHandle' onMouseDown={e => this.onMouseDown(e, EditMode.SIZEBOTH)}/>}
        
        <div className='HUDDrag__controls__toolbar'>

          {
            this.props.lockVisibility ? null :
              <div className='HUDDrag__controls__toolbar__visibility'
                   >
                <a href='#'>
                  <i className={`fa ${this.state.visible ? 'fa-eye' : 'fa-eye-slash'}`}
                     onClick={() => this.setVisible(!this.state.visible)}></i>
                </a>
              </div>
          }

          {
            this.props.lockOpacity ? null : 
              <div className='HUDDrag__controls__toolbar__scale'>
                
                <div className='HUDDrag__controls__toolbar__scale__controls'>
                  <a href='#'>
                    <div onClick={() => this.setOpacity(this.state.opacity - 0.01)}
                         onMouseDown={e => this.startOpacityHold(false)}>-</div>
                  </a>
                  <a href='#'>
                    <div onClick={() => this.setOpacity(this.state.opacity + 0.01)}
                         onMouseDown={e => this.startOpacityHold(true)}>+</div>
                  </a>
                </div>
                <a href='#' className='HUDDrag__controls__toolbar__dragControl'
                   onMouseDown={e => this.onMouseDown(e, EditMode.OPACITY)}
                   onWheel={e => {
                     const deltaY = e.deltaY;
                     setTimeout(() => this.setOpacity(this.state.opacity + (deltaY < 0 ? 0.01 : -0.01)))
                   }}>
                  <i className="fa fa-sun-o"></i>
                </a>
                <div className='HUDDrag__controls__scaleText'>{`${(this.state.opacity * 100).toFixed(0)}%`}</div>
              </div>
          }

          {
            this.props.lockScale ? null : 
              <div className='HUDDrag__controls__toolbar__scale'>
                <div className='HUDDrag__controls__toolbar__scale__controls'>
                  <div onClick={() => this.setScale(this.state.scale - this.state.scaleFactor)}
                       onMouseDown={e => this.startScaleHold(false)}><a href='#'>-</a></div>
                  <div onClick={() => this.setScale(this.state.scale + this.state.scaleFactor)}
                       onMouseDown={e => this.startScaleHold(true)}><a href='#'>+</a></div>
                </div>
                <a href='#'  className='HUDDrag__controls__toolbar__dragControl'
                     onMouseDown={e => this.onMouseDown(e, EditMode.SCALE)}
                     onWheel={e => {
                       const deltaY = e.deltaY;
                       setTimeout(() => this.setScale(this.state.scale + (deltaY < 0 ? 0.01 : -0.01)))
                      }}>
                  <i className="fa fa-search-plus"></i>
                </a>
                <div className='HUDDrag__controls__scaleText'>{`${(this.state.scale * 100).toFixed(0)}%`}</div>
              </div>
          }
          
        </div>
      </div>
    )
  }

  render() {
    const position = this.getPosition();
    return (
      <div className={`HUDDrag`}
          style={{
            position: 'fixed',
            height: `${this.state.height}px`,
            width: `${this.state.width}px`,
            transform: `scale(${this.state.scale})`,
            WebkitTransform: `scale(${this.state.scale})`,
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: 'none',
          }}>
          <div style={{
                height: '100%',
                width: '100%',
                opacity: this.state.opacity,
                visibility: `${this.state.visible ? 'visible' : 'hidden'}`,
                display: `${this.state.visible ? 'block': 'none'}`,
               }} >
            {this.props.render(clone(this.state))}
          </div>
        {this.props.locked ? null : this.renderEditControls()}
      </div>
    )
  }
}

export default HUDDrag;
