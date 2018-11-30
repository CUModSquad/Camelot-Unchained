"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * These are needed by the C++ Layer to know which build variables
 * to send to the window.
 */
var configCategory;
(function (configCategory) {
  configCategory[configCategory["KEYBIND_MOVEMENT"] = 0] = "KEYBIND_MOVEMENT";
  configCategory[configCategory["KEYBIND_COMBAT"] = 1] = "KEYBIND_COMBAT";
  configCategory[configCategory["KEYBIND_BUILDING"] = 3] = "KEYBIND_BUILDING";
  configCategory[configCategory["KEYBIND_INTERFACE"] = 4] = "KEYBIND_INTERFACE";
  configCategory[configCategory["KEYBIND_UTILITY"] = 5] = "KEYBIND_UTILITY";
  configCategory[configCategory["AUDIO_PRIMARY"] = 6] = "AUDIO_PRIMARY";
  configCategory[configCategory["VIDEO_PRIMARY"] = 7] = "VIDEO_PRIMARY";
  configCategory[configCategory["GAME_PRIMARY"] = 8] = "GAME_PRIMARY";
})(configCategory || (configCategory = {}));
exports.default = configCategory;