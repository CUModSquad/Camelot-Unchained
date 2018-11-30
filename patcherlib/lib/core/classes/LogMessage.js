"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var LogMessage = /** @class */function () {
    function LogMessage(logMessage) {
        if (logMessage === void 0) {
            logMessage = {};
        }
        this.category = logMessage.category;
        this.level = logMessage.level;
        this.time = logMessage.time;
        this.process = logMessage.process;
        this.thread = logMessage.thread;
        this.message = logMessage.message;
    }
    LogMessage.create = function () {
        var a = new LogMessage();
        return a;
    };
    return LogMessage;
}();
exports.default = LogMessage;