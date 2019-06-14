/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

import * as React from 'react';
import { debounce } from 'lodash';
import { css } from '@csegames/linaria';
import { TextInput } from 'shared/TextInput';
import { MediaBreakpoints } from 'fullscreen/Crafting/lib/MediaBreakpoints';

const InputStyle = css`
  width: 50px;
  height: 40px;
  font-size: 22px !important;
  color: #91FFFF !important;
  background-color: transparent !important;
  font-family: Caudex !important;
  border: 0px;
  text-align: center;
  pointer-events: all;
  margin-top: 5px !important;
  overflow: visible;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (min-width: ${MediaBreakpoints.UHDWidth}px) and (min-height: ${MediaBreakpoints.UHDHeight}px) {
    width: 120px;
    height: 120px;
    font-size: 44px !important;
  }
`;

export interface Props {
  value: number;
  minValue: number;
  maxValue: number;
  onChange: (newVal: number) => void;

  // These are for display only
  // Text to add before the value in the input
  prevValueDecorator?: string;
  trailValueDecorator?: string;
}

export interface State {
  tempValue: number;
}

class NumberWheelInput extends React.Component<Props, State> {
  private inputRef: HTMLInputElement = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      tempValue: props.value,
    };
    this.onChange = debounce(this.onChange, 500);
  }

  public render() {
    return (
      <TextInput
        type='text'
        overrideInputStyles
        inputClassName={InputStyle}
        value={`${this.props.prevValueDecorator || ''}${this.state.tempValue}${this.props.trailValueDecorator || ''}`}
        onChange={this.onInputChange}
        onFocus={() => this.placeCursor() }
        getRef={r => this.inputRef = r}
      />
    );
  }

  public componentDidUpdate(prevProps: Props) {
    // Debounced prop value has updated, check to make sure local state and prop are in sync.
    if (prevProps.value !== this.props.value && this.props.value !== this.state.tempValue) {
      this.setState({ tempValue: this.props.value });
    }
    this.placeCursor();
  }

  private placeCursor = () => {
    const valueLength = this.inputRef.value.length;
    const cursorPos = this.inputRef.selectionStart;
    if (this.props.trailValueDecorator && (cursorPos > valueLength - this.props.trailValueDecorator.length)) {
      const newPos = valueLength - this.props.trailValueDecorator.length;
      this.inputRef.setSelectionRange(newPos, newPos);
    } else if (this.props.prevValueDecorator && (cursorPos < this.props.prevValueDecorator.length)) {
      const newPos = this.props.prevValueDecorator.length;
      this.inputRef.setSelectionRange(newPos, newPos);
    }
  }

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // get start and end of the number to remove the decorators
    const start = this.props.prevValueDecorator ? this.props.prevValueDecorator.length : 0;
    const end = this.props.trailValueDecorator
      ? - this.props.trailValueDecorator.length
      : e.target.value.length;

    const newVal = Number(e.target.value.slice(start, end));
    const validationMessage = this.validateInput(newVal);
    if (validationMessage === 'ok') {
      this.setState({ tempValue: newVal });
      this.onChange(newVal);
    } else {
      const { left, top } = e.target.getBoundingClientRect();
      game.trigger(
        'show-action-alert',
        validationMessage,
        { clientX: left - validationMessage.length, clientY: top - 8 },
        { color: 'red' },
      );
      this.setState({ tempValue: this.props.value });
    }
  }

  private validateInput = (value: number): string => {
    if (value > this.props.maxValue) {
      return (`Maximum: ${this.props.maxValue}`);
    }
    if (value < this.props.minValue) {
      return (`Minimum: ${this.props.minValue}`);
    }
    if (isNaN(value)) {
      return ('No number');
    }
    return 'ok';
  }

  private onChange = (newVal: number) => {
    this.props.onChange(newVal);
  }
}

export default NumberWheelInput;
