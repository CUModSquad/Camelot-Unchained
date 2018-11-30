"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var defaultTopics_1 = require("../defaultTopics");
var ConsoleMessage_1 = require("../../core/classes/ConsoleMessage");
var client_1 = require("../../core/client");
function run(emitter, topic) {
    client_1.default.OnConsoleText(function (text) {
        emitter.emit(topic, new ConsoleMessage_1.default({ text: text }));
    });
}
var ConsoleListener = /** @class */function () {
    function ConsoleListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesConsole;
    }
    ConsoleListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return ConsoleListener;
}();
exports.default = ConsoleListener;