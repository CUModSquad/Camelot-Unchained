"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var activeEffectActions;
(function (activeEffectActions) {
  activeEffectActions[activeEffectActions["APPLIED"] = 0] = "APPLIED";
  activeEffectActions[activeEffectActions["REMOVED"] = 1] = "REMOVED";
  activeEffectActions[activeEffectActions["TIMED_OUT"] = 2] = "TIMED_OUT";
})(activeEffectActions = exports.activeEffectActions || (exports.activeEffectActions = {}));