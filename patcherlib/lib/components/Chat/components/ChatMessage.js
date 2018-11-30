"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var chatType;
(function (chatType) {
    chatType[chatType["AVAILABLE"] = 1] = "AVAILABLE";
    chatType[chatType["UNAVAILABLE"] = 2] = "UNAVAILABLE";
    chatType[chatType["PRIVATE"] = 3] = "PRIVATE";
    chatType[chatType["GROUP"] = 4] = "GROUP";
    chatType[chatType["SYSTEM"] = 5] = "SYSTEM";
    chatType[chatType["BROADCAST"] = 6] = "BROADCAST";
    chatType[chatType["COMBAT"] = 7] = "COMBAT";
})(chatType || (chatType = {}));
exports.chatType = chatType;
var ChatMessage = /** @class */function () {
    function ChatMessage(type, roomName, nick, text, isCSE, time) {
        if (nick === void 0) {
            nick = null;
        }
        if (text === void 0) {
            text = null;
        }
        if (isCSE === void 0) {
            isCSE = false;
        }
        if (time === void 0) {
            time = new Date();
        }
        this.type = type;
        this.roomName = roomName.toLowerCase();
        this.nick = nick.toLowerCase();
        this.text = text;
        this.isCSE = isCSE;
        this.when = time;
        this._newDay = false; // we don't know yet, assumed not
    }
    ChatMessage.prototype.isNewDay = function () {
        return this._newDay;
    };
    ChatMessage.prototype.checkIsNewDay = function (prev) {
        if (!prev || prev.toLocaleDateString() !== this.when.toLocaleDateString()) {
            // message is for a new day, flag it as such
            // first message in a room is always flagged as a new day
            this._newDay = true;
        }
    };
    return ChatMessage;
}();
exports.ChatMessage = ChatMessage;