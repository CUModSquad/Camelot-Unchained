"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Orientation;
(function (Orientation) {
    Orientation[Orientation["HORIZONTAL"] = 0] = "HORIZONTAL";
    Orientation[Orientation["VERTICAL"] = 1] = "VERTICAL";
})(Orientation = exports.Orientation || (exports.Orientation = {}));
var Quadrant;
(function (Quadrant) {
    Quadrant[Quadrant["TopLeft"] = 0] = "TopLeft";
    Quadrant[Quadrant["TopRight"] = 1] = "TopRight";
    Quadrant[Quadrant["BottomLeft"] = 2] = "BottomLeft";
    Quadrant[Quadrant["BottomRight"] = 3] = "BottomRight";
})(Quadrant = exports.Quadrant || (exports.Quadrant = {}));
function windowQuadrant(mouseX, mouseY) {
    var innerHeight = window.window.innerHeight;
    var innerWidth = window.window.innerWidth;
    var halfHeight = innerHeight * .5;
    if (mouseX <= innerWidth * .5) {
        return mouseY <= halfHeight ? Quadrant.TopLeft : Quadrant.BottomLeft;
    }
    return mouseY <= halfHeight ? Quadrant.TopRight : Quadrant.BottomRight;
}
exports.windowQuadrant = windowQuadrant;