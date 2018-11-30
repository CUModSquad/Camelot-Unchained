/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import ConfigVar from './ConfigVar';
import { AudioSetting } from './AudioSetting';
declare class AudioConfigVar extends ConfigVar {
    _value: AudioSetting;
    value: AudioSetting;
    constructor(config?: AudioConfigVar);
    create(): AudioConfigVar;
}
export default AudioConfigVar;
