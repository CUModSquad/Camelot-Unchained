"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var warbandPermissions;
(function (warbandPermissions) {
    warbandPermissions[warbandPermissions["NONE"] = 0] = "NONE";
    warbandPermissions[warbandPermissions["JOIN"] = 1] = "JOIN";
    warbandPermissions[warbandPermissions["INVITE"] = 2] = "INVITE";
    warbandPermissions[warbandPermissions["KICK"] = 4] = "KICK";
    warbandPermissions[warbandPermissions["MANAGEPRIVACY"] = 8] = "MANAGEPRIVACY";
    warbandPermissions[warbandPermissions["MANGEPERMANENT"] = 16] = "MANGEPERMANENT";
    warbandPermissions[warbandPermissions["MANAGEBANNER"] = 32] = "MANAGEBANNER";
    warbandPermissions[warbandPermissions["MANAGENAME"] = 64] = "MANAGENAME";
    warbandPermissions[warbandPermissions["ALL"] = -1] = "ALL";
})(warbandPermissions || (warbandPermissions = {}));
exports.default = warbandPermissions;