/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import { Vec2f, Vec3f } from '@csegames/camelot-unchained';
import {
  getCompassData,
  CompassData,
  calculateBearing,
  calculateDistance,
  convertToMinusAngle,
  calculateElevation,
} from 'actions/compass';
import { easeLinear } from 'd3-ease';
import Animate from 'react-move/Animate';

export interface CompassContext extends CompassData {
  getBearing: (target: Vec2f | Vec3f) => number;
  getDistance: (target: Vec2f | Vec3f) => number;
  getElevation: (target: Vec2f | Vec3f) => number;
  isTargetAbove: (target: Vec2f | Vec3f, byAtLeast?: number) => boolean;
  isTargetBelow: (target: Vec2f | Vec3f, byAtLeast?: number) => boolean;
  isTargetLevel: (target: Vec2f | Vec3f, buffer?: number) => boolean;
  getPoiPlacement: (angleOrLocation: number | Vec2f | Vec3f) => number;
  getPoiPlacementStyle: (angleOrLocation: number | Vec2f | Vec3f, offset?: number) => React.CSSProperties;
}

const { Provider, Consumer } = React.createContext<CompassContext>({} as CompassContext);

export interface CompassContextProviderInnerProps extends CompassData {
  degreesToShow: number;
}

export interface CompassContextProviderInnerState {}

export class CompassContextProviderInner extends React.Component<
  CompassContextProviderInnerProps,
  CompassContextProviderInnerState
> {

  public render() {
    return (
      <Provider
        value={{
          facing: this.props.facing,
          facingNorth: this.props.facingNorth,
          position: this.props.position,
          getBearing: this.getBearing,
          getDistance: this.getDistance,
          getElevation: this.getElevation,
          isTargetAbove: this.isTargetAbove,
          isTargetBelow: this.isTargetBelow,
          isTargetLevel: this.isTargetLevel,
          getPoiPlacement: this.getPoiPlacement,
          getPoiPlacementStyle: this.getPoiPlacementStyle,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  public shouldComponentUpdate(nextProps: CompassContextProviderInnerProps, nextState: CompassContextProviderInnerState) {
    if (this.props.facing !== nextProps.facing) {
      return true;
    }
    if (this.props.facingNorth !== nextProps.facingNorth) {
      return true;
    }
    if (
      nextProps.position.x !== this.props.position.x ||
      nextProps.position.y !== this.props.position.y ||
      nextProps.position.z !== this.props.position.z
    ) {
      return true;
    }
    return false;
  }

  private getBearing = (target: Vec2f | Vec3f) => {
    return calculateBearing(this.props.position, target);
  }

  private getDistance = (target: Vec2f | Vec3f) => {
    return calculateDistance(this.props.position, target);
  }

  private getElevation = (target: Vec2f | Vec3f) => {
    return calculateElevation(this.props.position, target);
  }

  private isTargetAbove = (target: Vec2f | Vec3f, byAtLeast: number = 0) => {
    return (this.getElevation(target) - byAtLeast) > 0;
  }

  private isTargetBelow = (target: Vec2f | Vec3f, byAtLeast: number = 0) => {
    return (this.getElevation(target) + byAtLeast)  < 0;
  }

  private isTargetLevel = (target: Vec2f | Vec3f, buffer: number = 0) => {
    return this.getElevation(target) <= buffer &&  this.getElevation(target) >= (0 - buffer);
  }

  private getPoiPlacement = (angleOrPosition: number | Vec3f | Vec2f): number => {
    let angle;
    if (typeof angleOrPosition === 'number') {
      angle = angleOrPosition;
    } else {
      angle = this.getBearing(angleOrPosition);
    }
    angle = angle % 360;
    const facingAdjustment = 360 - this.props.facingNorth;
    const percentPerDegree = 100 / this.props.degreesToShow;
    const adjustedAngle = convertToMinusAngle((angle + facingAdjustment) % 360);
    const leftPosition = (adjustedAngle * percentPerDegree) + 50;
    return leftPosition;
  }

  private getPoiPlacementStyle = (angleOrPosition: number | Vec3f | Vec2f, offset: number = 0): React.CSSProperties => {
    const leftPosition = this.getPoiPlacement(angleOrPosition);
    return {
      left: `calc(${leftPosition}% - ${offset}px)`,
    };
  }
}
export interface CompassContextProviderProps {
  degreesToShow: number;
}

export interface CompassContextProviderState extends CompassData {}

export class CompassContextProvider extends React.Component<CompassContextProviderProps, CompassContextProviderState> {
  private updateSpeed: number = 25;
  private intervalId: NodeJS.Timer;

  public state = {
    facing: 0,
    facingNorth: 0,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  };

  public render() {
    return (
      <Animate
        key={'position'}
        start={{
          x: this.state.position.x,
          y: this.state.position.y,
          z: this.state.position.z,
        }}
        update={{
          x: [this.state.position.x],
          y: [this.state.position.y],
          z: [this.state.position.z],
          timing: { duration: 200, ease: easeLinear, delay: 0 },
        }}
        >
        {({ x, y, z }: any | Vec3f) => (
          <CompassContextProviderInner
            degreesToShow={this.props.degreesToShow}
            position={{ x, y, z }}
            facing={this.state.facing}
            facingNorth={this.state.facingNorth}
          >
            {this.props.children}
          </CompassContextProviderInner>
        )}
      </Animate>
    );
  }

  public componentWillMount() {
    this.updateCompassData();
  }

  public componentDidMount() {
    this.updateCompassData();
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => this.updateCompassData(), this.updateSpeed);
  }

  public componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  public shouldComponentUpdate(nextProps: CompassContextProviderProps, nextState: CompassContextProviderState) {
    if (this.state.facing !== nextState.facing) {
      return true;
    }
    if (this.state.facingNorth !== nextState.facingNorth) {
      return true;
    }
    if (
      nextState.position.x !== this.state.position.x ||
      nextState.position.y !== this.state.position.y ||
      nextState.position.z !== this.state.position.z
    ) {
      return true;
    }
    return false;
  }

  private updateCompassData = () => {
    this.setState(getCompassData());
  }
}

export const CompassContextConsumer = Consumer;
