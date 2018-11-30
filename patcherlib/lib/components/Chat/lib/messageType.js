"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var messageType;
(function (messageType) {
    messageType[messageType["SYSTEM"] = -1] = "SYSTEM";
    messageType[messageType["NONE"] = 0] = "NONE";
    messageType[messageType["AVAILIBLE"] = 1] = "AVAILIBLE";
    messageType[messageType["UNAVAILIBLE"] = 2] = "UNAVAILIBLE";
    messageType[messageType["MESSAGE_GROUP"] = 3] = "MESSAGE_GROUP";
    messageType[messageType["MESSAGE_CHAT"] = 4] = "MESSAGE_CHAT";
    messageType[messageType["COMBAT_LOG"] = 5] = "COMBAT_LOG";
})(messageType || (messageType = {}));
exports.default = messageType;