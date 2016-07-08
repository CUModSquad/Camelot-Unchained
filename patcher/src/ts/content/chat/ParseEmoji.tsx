/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';

function emojiNameFromText(text:string): string {
  switch(text) {
    case ':angry:': 
      return 'angry';
    case ':baffled:': case 'O.o':  
      return 'baffled';
    case ':confused:': case 'o.O':
      return 'confused';
    case ':cool:': case '8)': case '8-)':
      return 'cool';
    case ':cry:': case ':\'(': case ':qq:':
      return 'crying';
    case ':evil:': case '3:)':
      return 'evil';
    case ':frustrated:':
      return 'frustrated';
    case ':grin:': case ':D': case ':-D':
      return 'grin';
    case ':happy:': case ':)': case ':-)':
      return 'happy';
    case ':hipster:':
      return 'hipster';
    case ':neutral:': case ':|': case ':-|':
      return 'neutral';
    case ':sad:': case ':(': case ':-(':
      return 'sad';
    case ':shocked:': case '8o': case '8-o': case '8-O':
    case ':O': case ':o':
      return 'shocked';
    case ':sleepy:': case '-_-zzZ': case '(-_-)zzZ': case ':zzz:':
      return 'sleepy';
    case ':smile:': case ':>':
      return 'smile';
    case ':tongue:':
    case ':p': case ':-p': case ':P': case ':-P':
    case ';p': case ';-p': case ';P': case ';-P':
    case '8p': case '8-p': case '8P': case '8-P':
      return 'tongue';
    case ':wink:': case ';)': case ';-)':
      return 'wink';
    case ':wondering:': case ':wonder:':
      return 'wondering';
    //add CSE custom emoticons
    case ':andrewfez:':
      return 'andrewfez';
    case ':jbhead:':
      return 'jbhead';
    case ':markhead:':
      return 'markhead';
    case ':mjelf:':
      return 'mjelf';
    case ':sandragrin:':
      return 'sandragrin';
    case ':timhead:':
      return 'timhead';
    case ':tinymichelle:':
      return 'tinymichelle';
    case ':batgrin:':
      return 'batgrin';
    case ':bathappy:':
      return 'bathappy';
    case ':batmad:':
      return 'batmad';
    case ':batsad:':
      return 'batsad';
    case ':battongue:':
      return 'battongue';
    case ':bob:':
      return 'bob';
    case ':boblove:':
      return 'boblove';
    case ':crown:':
      return 'crown';
    case ':cupotears:': case ':qqcup:':
      return 'cupotears';
    case ':dragonlick:':
      return 'dragonlick';
    case ':dragonwhale:':
      return 'dragonwhale';
    case ':duck:':
      return 'duck';
    case ':duckmage:':
      return 'duckmage';
    case ':frownstrm:':
      return 'frownstrm';
    case ':happystrm:':
      return 'happystrm';
    case ':judgingduckone:': case ':judgingduck1:':
      return 'judgingduckone';
    case ':judgingducktwo:': case ':judgingduck2:':
      return 'judgingducktwo';
    case ':arthurianlove:':
      return 'arthurianlove';
    case ':tuathalove:':
      return 'tuathalove';
    case ':vikinglove:':
      return 'vikinglove';
    case ':plusten:': case ':plus10:':
      return 'plusten';
    case ':pvp:' :
      return 'pvp';   
    case ':rage:':
      return 'rage';
    case ':salt:':
      return 'salt';
    case ':arthurianshield:':
      return 'arthurianshield';
    case ':tuathashield:':
      return 'tuathashield';
    case ':vikingshield:':
      return 'vikingshield';
    case ':shotsfired:':
      return 'shotsfired';
    case ':unicorn:':
      return 'unicorn';
  }
  return null;
}

function fromText(text: string, keygen: () => number) : JSX.Element[] {
  const emoji : string = emojiNameFromText(text);
  if (emoji) {
    return [<span key={keygen()} className={'chat-emoticon emote-' + emoji}></span>];
  }
}

function createRegExp() : RegExp {
  return /:[a-zA-Z0-9]+:|[3]*[;:8][-']*[()@oO#$*pPD/|><]|\([6aAhH]\)|-_-zzZ|\(-_-\)zzZ|[oO]\.[oO]/g;
}

export default {
  fromText,
  createRegExp
}
