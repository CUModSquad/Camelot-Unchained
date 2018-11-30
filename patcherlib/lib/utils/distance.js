"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

Object.defineProperty(exports, "__esModule", { value: true });
function distanceVec2(positionOne, positionTwo) {
    if (!positionOne || !positionTwo) return;
    var xDiff = positionTwo.x - positionOne.x;
    var yDiff = positionTwo.y - positionOne.y;
    var sumOfDiff = Math.pow(xDiff, 2) + Math.pow(yDiff, 2);
    return Math.sqrt(sumOfDiff);
}
exports.distanceVec2 = distanceVec2;
function distanceVec3(positionOne, positionTwo) {
    if (!positionOne || !positionTwo) return;
    var xDiff = positionTwo.x - positionOne.x;
    var yDiff = positionTwo.y - positionOne.y;
    var zDiff = positionTwo.z - positionOne.z;
    var sumOfDiff = Math.pow(xDiff, 2) + Math.pow(yDiff, 2) + Math.pow(zDiff, 2);
    return Math.sqrt(sumOfDiff);
}
exports.distanceVec3 = distanceVec3;