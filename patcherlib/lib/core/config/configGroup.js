"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * These are the tags needed by the C++ Layer to know which build variables
 * to send to the window.
 */
var configGroup;
(function (configGroup) {
  configGroup[configGroup["KEYBIND"] = 2] = "KEYBIND";
  configGroup[configGroup["INPUT"] = 6] = "INPUT";
  configGroup[configGroup["AUDIO"] = 8] = "AUDIO";
})(configGroup || (configGroup = {}));
exports.default = configGroup;