"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var channelId;
(function (channelId) {
  channelId[channelId["NONE"] = -1] = "NONE";
  channelId[channelId["HATCHERY"] = 4] = "HATCHERY";
  channelId[channelId["WYRMLING"] = 10] = "WYRMLING";
  channelId[channelId["FLEDGLING"] = 30] = "FLEDGLING";
})(channelId || (channelId = {}));
exports.default = channelId;