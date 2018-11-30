"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ChatMessage = /** @class */function () {
    function ChatMessage(chatMessage) {
        if (chatMessage === void 0) {
            chatMessage = {};
        }
        this.type = chatMessage.type;
        this.from = chatMessage.from;
        this.body = chatMessage.body;
        this.nick = chatMessage.nick;
        this.iscse = chatMessage.iscse;
    }
    ChatMessage.create = function () {
        var a = new ChatMessage();
        return a;
    };
    return ChatMessage;
}();
exports.default = ChatMessage;