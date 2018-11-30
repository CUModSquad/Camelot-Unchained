"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var keyboardModifier;
(function (keyboardModifier) {
  keyboardModifier[keyboardModifier["NONE"] = 0] = "NONE";
  keyboardModifier[keyboardModifier["CTRL"] = 1] = "CTRL";
  keyboardModifier[keyboardModifier["ALT"] = 2] = "ALT";
  keyboardModifier[keyboardModifier["SHIFT"] = 4] = "SHIFT";
})(keyboardModifier || (keyboardModifier = {}));
exports.default = keyboardModifier;