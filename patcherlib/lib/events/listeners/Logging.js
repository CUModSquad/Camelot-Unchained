"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var defaultTopics_1 = require("../defaultTopics");
var LogMessage_1 = require("../../core/classes/LogMessage");
var client_1 = require("../../core/client");
function run(emitter, topic) {
    client_1.default.OnLogMessage(function (category, level, time, process, thread, message) {
        emitter.emit(topic, new LogMessage_1.default({
            category: category,
            level: level,
            time: time,
            process: process,
            thread: thread,
            message: message
        }));
    });
}
var LoggingListener = /** @class */function () {
    function LoggingListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesLogging;
    }
    LoggingListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return LoggingListener;
}();
exports.default = LoggingListener;