"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __1 = require("../../../");
var React = require("react");
var ChatState_1 = require("./ChatState");
function fromText(text, keygen) {
    return [React.createElement("span", { key: keygen(), className: 'chat-nickname', onClick: function onClick() {
            __1.events.fire('cse-chat-private-message', text);
        } }, text)];
}
function createRegExp() {
    var regex;
    var chat = ChatState_1.chatState.get('chat');
    var allUsers = chat.getAllUsers();
    if (allUsers.length) {
        allUsers.forEach(function (u) {
            if (!regex) {
                regex = '\\b' + u + '\\b';
            } else {
                regex += '|\\b' + u + '\\b';
            }
        });
        return new RegExp(regex, 'g');
    }
}
exports.default = {
    fromText: fromText,
    createRegExp: createRegExp
};