"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */function () {
    function Message(id, time, message, roomName, type, sender) {
        this.id = id;
        this.time = time;
        this.message = message;
        this.roomName = roomName;
        this.sender = sender;
        this.type = type;
    }
    return Message;
}();
exports.default = Message;