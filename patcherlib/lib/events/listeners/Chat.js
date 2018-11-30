"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var defaultTopics_1 = require("../defaultTopics");
var ChatMessage_1 = require("../../core/classes/ChatMessage");
var client_1 = require("../../core/client");
function run(emitter, topic) {
    client_1.default.OnChat(function (type, from, body, nick, iscse) {
        emitter.emit(topic, new ChatMessage_1.default({
            type: type,
            from: from,
            body: body,
            nick: nick,
            iscse: iscse
        }));
    });
}
var ChatListener = /** @class */function () {
    function ChatListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesChat;
    }
    ChatListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return ChatListener;
}();
exports.default = ChatListener;