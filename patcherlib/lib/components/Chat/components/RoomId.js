"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var RoomId = /** @class */function () {
    function RoomId(name, type, displayName) {
        this.type = type;
        this.name = typeof name === 'string' ? name.toLowerCase() : '';
        this.displayName = typeof displayName === 'string' ? displayName.toLowerCase() : '';
    }
    RoomId.prototype.same = function (roomId) {
        return roomId && this.type === roomId.type && this.name === roomId.name;
    };
    return RoomId;
}();
exports.default = RoomId;