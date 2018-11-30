"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var gearSlot;
(function (gearSlot) {
    gearSlot[gearSlot["NONE"] = 0] = "NONE";
    gearSlot[gearSlot["CHEST"] = 1] = "CHEST";
    gearSlot[gearSlot["LEFT_HAND"] = 2] = "LEFT_HAND";
    gearSlot[gearSlot["RIGHT_HAND"] = 4] = "RIGHT_HAND";
    gearSlot[gearSlot["TWO_HANDED"] = 6] = "TWO_HANDED";
    gearSlot[gearSlot["PANTS"] = 8] = "PANTS";
    gearSlot[gearSlot["BOOTS"] = 16] = "BOOTS";
    gearSlot[gearSlot["LEFT_GLOVE"] = 32] = "LEFT_GLOVE";
    gearSlot[gearSlot["RIGHT_GLOVE"] = 64] = "RIGHT_GLOVE";
    gearSlot[gearSlot["HELMET"] = 128] = "HELMET";
    gearSlot[gearSlot["BELT"] = 256] = "BELT";
    gearSlot[gearSlot["SKIRT"] = 512] = "SKIRT";
    gearSlot[gearSlot["TABARD"] = 1024] = "TABARD";
    gearSlot[gearSlot["CAPE"] = 2048] = "CAPE";
})(gearSlot || (gearSlot = {}));
exports.default = gearSlot;