/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2016-09-06 17:53:23
 * @Last Modified by: JB (jb@codecorsair.com)
 * @Last Modified time: 2016-09-06 17:53:57
 */

import * as React from 'react';
import {events} from 'camelot-unchained';

import {SoundsState} from '../../services/session/sounds';

export interface SoundProps {
  soundsState: SoundsState;
  onPlayMusic: Function;
}

export interface SoundState { };

const DEFAULT_SOUND_VOLUME = 0.75;
const DEFAULT_MUSIC_VOLUME = 0.5;

export class Sound extends React.Component<SoundProps, SoundState> {
  public name = 'cse-patcher-sound';

  getSound(name: string): HTMLAudioElement {
    return this.refs[name] as HTMLAudioElement;
  }

  playSound(name: string) {
    if (this.props.soundsState.playSound) {
      let sound = this.getSound(name);
      if (sound) {
        sound.play();
        sound.volume = DEFAULT_SOUND_VOLUME;
      }
    }
  }

  handleFinishIntro = () => {
    // play bg music after intro music is done
    this.props.onPlayMusic('sound-bg');
  }

  componentDidUpdate(prevProps: SoundProps) {
    const {
      playMusic,
      activeMusicName,
    } = this.props.soundsState;

    if (activeMusicName) {
      const currentSound = this.getSound(activeMusicName);

      if (currentSound) {
        if (!playMusic && !currentSound.paused) {
          currentSound.pause();
        } else if (playMusic && currentSound.paused) {
          currentSound.play();
          currentSound.volume = DEFAULT_MUSIC_VOLUME;
        }
      }
    } else if (prevProps.soundsState.activeMusicName) {
      // no activeMusicName here, means stop playing music but not necessarily mute
      const currentSound = this.getSound(prevProps.soundsState.activeMusicName);
      if (currentSound && !currentSound.paused) {
        currentSound.pause();
      }
    }
  }

  componentDidMount() {
    this.props.onPlayMusic('sound-intro');
    events.on('play-sound', (info: string) => this.playSound('sound-' + info));
  }

  componentWillUnmount() {
    events.off('play-sound');
  }

  render() {
    return (
      <div>
        <audio src='sounds/select.ogg' ref='sound-select' />
        <audio src='sounds/launch-game.ogg' ref='sound-launch-game' />
        <audio src='sounds/patch-complete.ogg' ref='sound-patch-complete' />
        <audio src='sounds/patch-complete.ogg' ref='sound-patch-complete' />
        <audio src='sounds/patcher-theme-v0.1.ogg' ref='sound-intro' onEnded={this.handleFinishIntro} />
        <audio src='sounds/Music_MainMenu_Amb_BaseLoops_Main_v1.ogg' ref='sound-bg' loop />
      </div>
    );
  }
};

export default Sound;
