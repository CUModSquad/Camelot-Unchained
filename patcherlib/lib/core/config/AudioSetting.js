"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var AudioSettingType;
(function (AudioSettingType) {
    AudioSettingType[AudioSettingType["RANGE"] = 0] = "RANGE";
    AudioSettingType[AudioSettingType["BOOL"] = 1] = "BOOL";
})(AudioSettingType = exports.AudioSettingType || (exports.AudioSettingType = {}));
var AudioSetting = /** @class */function () {
    function AudioSetting() {}
    return AudioSetting;
}();
exports.AudioSetting = AudioSetting;