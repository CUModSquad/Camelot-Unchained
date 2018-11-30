"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

Object.defineProperty(exports, "__esModule", { value: true });
function numEqualsCloseEnough(a, b, closeEnoughNumber) {
  if (closeEnoughNumber === void 0) {
    closeEnoughNumber = 0.01;
  }
  return Math.abs(a - b) < closeEnoughNumber;
}
exports.numEqualsCloseEnough = numEqualsCloseEnough;