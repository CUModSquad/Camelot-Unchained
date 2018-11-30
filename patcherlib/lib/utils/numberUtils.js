"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

Object.defineProperty(exports, "__esModule", { value: true });
Number.prototype.floatEquals = function (n, epsilon) {
  if (epsilon === void 0) {
    epsilon = Number.EPSILON;
  }
  return Math.abs(this - n) < epsilon;
};