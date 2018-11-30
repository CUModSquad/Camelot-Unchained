"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var warbandRoles;
(function (warbandRoles) {
  warbandRoles[warbandRoles["NONE"] = 0] = "NONE";
  warbandRoles[warbandRoles["TEMPORARY"] = 1] = "TEMPORARY";
  warbandRoles[warbandRoles["PERMANENT"] = 2] = "PERMANENT";
  warbandRoles[warbandRoles["OWNER"] = 3] = "OWNER";
})(warbandRoles || (warbandRoles = {}));
exports.default = warbandRoles;