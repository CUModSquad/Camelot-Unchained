"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var baneBoonCategory;
(function (baneBoonCategory) {
    baneBoonCategory[baneBoonCategory["NONE"] = -1] = "NONE";
    baneBoonCategory[baneBoonCategory["GENERAL"] = 1] = "GENERAL";
    baneBoonCategory[baneBoonCategory["FACTION"] = 2] = "FACTION";
    baneBoonCategory[baneBoonCategory["RACE"] = 3] = "RACE";
    baneBoonCategory[baneBoonCategory["ARCHETYPE"] = 4] = "ARCHETYPE";
})(baneBoonCategory || (baneBoonCategory = {}));
exports.default = baneBoonCategory;