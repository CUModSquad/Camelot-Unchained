"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var buildUIMode;
(function (buildUIMode) {
    buildUIMode[buildUIMode["NOTBUILDING"] = 0] = "NOTBUILDING";
    buildUIMode[buildUIMode["PLACINGPHANTOM"] = 1] = "PLACINGPHANTOM";
    buildUIMode[buildUIMode["PHANTOMPLACED"] = 2] = "PHANTOMPLACED";
    buildUIMode[buildUIMode["SELECTINGBLOCK"] = 4] = "SELECTINGBLOCK";
    buildUIMode[buildUIMode["BLOCKSELECTED"] = 8] = "BLOCKSELECTED";
})(buildUIMode || (buildUIMode = {}));
exports.default = buildUIMode;