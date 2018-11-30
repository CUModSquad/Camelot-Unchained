"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Announcement = /** @class */function () {
    function Announcement(message, type) {
        if (message === void 0) {
            message = '';
        }
        if (type === void 0) {
            type = 0;
        }
        this.message = message;
        this.type = type;
    }
    return Announcement;
}();
exports.default = Announcement;