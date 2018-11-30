/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export declare enum AudioSettingType {
    RANGE = 0,
    BOOL = 1
}
export declare class AudioSetting {
    type: AudioSettingType;
    default: any;
    value: any;
    min: any;
    max: any;
}
