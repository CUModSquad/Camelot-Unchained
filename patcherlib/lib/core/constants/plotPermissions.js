"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// Keep up to date with the versions in BuildingNetworkState.h and Building.cs
var plotPermissions;
(function (plotPermissions) {
    plotPermissions[plotPermissions["Self"] = 0] = "Self";
    plotPermissions[plotPermissions["Group"] = 1] = "Group";
    plotPermissions[plotPermissions["Friends"] = 2] = "Friends";
    plotPermissions[plotPermissions["Guild"] = 4] = "Guild";
    plotPermissions[plotPermissions["Realm"] = 8] = "Realm";
    plotPermissions[plotPermissions["All"] = 16] = "All";
    plotPermissions[plotPermissions["COUNT"] = 32] = "COUNT";
})(plotPermissions || (plotPermissions = {}));
exports.default = plotPermissions;