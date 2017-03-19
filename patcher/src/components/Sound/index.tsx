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
import { events } from 'camelot-unchained';
import { generateID } from 'redux-typed-modules';

import { SoundsState } from '../../services/session/sounds';

import Audio from './Audio';

export interface SoundProps {
  soundsState: SoundsState;
  onPlayMusic: Function;
}

export interface SoundState {
  sounds: { [id: string]: string };
 };

const DEFAULT_MUSIC_VOLUME = 0.5;

export class Sound extends React.Component<SoundProps, SoundState> {
  constructor(props: SoundProps) {
    super(props);
    this.state = {
      sounds: {},
    };
  }

  private playSound(name: string) {
    if (this.props.soundsState.playSound) {
      const id = generateID(7);
      this.setState({
        sounds: {...this.state.sounds, [id]: name}
      });
    }
  }

  private onEnded = (e: React.SyntheticEvent<HTMLAudioElement>, id: string) => {
    if (id) {
      if (id === 'intro') {
        this.props.onPlayMusic('bg');
      } else {
        const sounds = {...this.state.sounds}
        delete sounds[id];
        delete this.audioRefs[id];
        this.setState({
          sounds,
        });
      }
    }
  }

  private bgRef: HTMLAudioElement = null;
  private audioRefs: { [id: string]: HTMLAudioElement } = {};

  private soundsMapping: {[id: string]: React.HTMLProps<HTMLAudioElement>} = {
    'select': {
      src: 'sounds/UI_Menu_GenericSelect_v1_02.ogg',
    },
    'launch-game': { 
      src: 'sounds/UI_Patcher_PlayButton_v3.ogg'
    },
    'patch-complete': {
      src: 'sounds/patch-complete.ogg'
    },
    'select-change': {
      src: 'sounds/UI_Menu_CharacterSelect_Change_v1_01.ogg'
    },
    'create-character': { 
      src: 'sounds/UI_Menu_CreateNewCharacter_v1_01.ogg'
    },
    'realm-select': { 
      src: 'sounds/UI_Menu_SelectRealm_v1_01.ogg'
    },
    'server-select': { 
      src: 'sounds/UI_Menu_ServerSelect_v1_01.ogg'
    },
    'intro': {
      src: 'sounds/patcher-theme.ogg',
    },
    'bg': {
      src: 'sounds/Music_MainMenu_Amb_BaseLoops_Main_v1.ogg',
      loop: true,
    },
  }


  private handleMusicRef = (ref: HTMLAudioElement) => {
    this.bgRef = ref;
    this.handleMusicState();
  }

  private handleMusicState = () => {
    const {
      playMusic,
      activeMusicName,
    } = this.props.soundsState;

    const currentSound = this.bgRef;

    if (activeMusicName && currentSound) {
      if (!playMusic && !currentSound.paused) {
        currentSound.pause();
      } else if (playMusic && currentSound.paused) {
        currentSound.play();
        currentSound.volume = DEFAULT_MUSIC_VOLUME;
      }
    }
  }

  public componentDidUpdate(prevProps: SoundProps) {
    this.handleMusicState();
    if (prevProps.soundsState.activeMusicName && !this.props.soundsState.activeMusicName) {
      // no activeMusicName here, means stop playing music but not necessarily mute
      if (this.bgRef && !this.bgRef.paused) {
        this.bgRef.pause();
      }
    }
  }

  public componentDidMount() {
    this.props.onPlayMusic('intro');
    events.on('play-sound', (name: string) => this.playSound(name));
  }

  public componentWillUnmount() {
    events.off('play-sound');
  }
  
  public render() {
    const {
      activeMusicName,
    } = this.props.soundsState;

    const musicProps = activeMusicName && this.soundsMapping[activeMusicName];
    return (
      <div>
        {Object.keys(this.state.sounds).map((id: string) => {
          const sound = this.state.sounds[id];
          const props = this.soundsMapping[sound];
          return (
            <Audio
              key={id}
              id={id}
              onEnded={this.onEnded}
              onRefCallback={r => this.audioRefs[id]}
              {...props}
            />
          );
        })}

        {musicProps && (
          <Audio
            key={activeMusicName}
            id={activeMusicName}
            onEnded={this.onEnded}
            onRefCallback={this.handleMusicRef}
            {...musicProps}
          />
        )}
      </div>
    );
  }
};

export default Sound;
