"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ChatMessage_1 = require("./ChatMessage");
var ChatConfig_1 = require("./ChatConfig");
var ChatRoomInfo = /** @class */function () {
    function ChatRoomInfo(roomId, scrollbackThreshold, scrollbackPageSize) {
        if (scrollbackThreshold === void 0) {
            scrollbackThreshold = 50;
        }
        if (scrollbackPageSize === void 0) {
            scrollbackPageSize = 50;
        }
        var _this = this;
        this.messages = [];
        this.users = [];
        this.key = 0;
        this.players = 0;
        this.unread = 0;
        this.scrollback = 0;
        this.diagnostics = function () {
            console.log('|  Room: ' + _this.roomId.name + ' Players: ' + _this.players + ' Unread: ' + _this.unread + ' Messages: ' + _this.messages.length + ' ScrollBack: ' + _this.scrollback);
        };
        this.addUser = function (user) {
            var sortIndex = _this.users.length;
            for (var i = 0; i < _this.users.length; i++) {
                if (user.isCSE) {
                    if (!_this.users[i].info.isCSE) {
                        sortIndex = i - 1 > -1 ? i-- : 0;
                        break;
                    }
                } else if (_this.users[i].info.isCSE) {
                    continue;
                }
                if (_this.users[i].info.name > user.name) {
                    sortIndex = i;
                    break;
                }
            }
            _this.users.splice(sortIndex, 0, { key: _this.key++, info: user });
            _this.players++;
        };
        this.removeUser = function (user) {
            var users = _this.users;
            for (var i = 0; i < users.length; i++) {
                if (users[i].info.name === user.name) {
                    users.splice(i, 1);
                    _this.players--;
                    break;
                }
            }
        };
        this.add = function (message) {
            message.checkIsNewDay(_this.messages.length > 1 ? _this.messages[_this.messages.length - 2].message.when : undefined);
            // manage scrollback buffer size
            if (_this.messages.length > ChatConfig_1.chatConfig.SCROLLBACK_BUFFER_SIZE) {
                _this.messages[0] = null;
                _this.messages = _this.messages.map(function (_message, i) {
                    if (_this.messages[i + 1]) {
                        var newMessage = __assign({}, _this.messages[i + 1], { key: i });
                        return newMessage;
                    }
                    return { key: i, message: message };
                });
            } else {
                _this.messages.push({
                    key: _this.messages.length - 1,
                    message: message
                });
            }
        };
        this.push = function (message) {
            _this.add(message);
            _this.unread++;
        };
        this.seen = function () {
            _this.unread = 0;
        };
        this.countVisibleMessages = function () {
            var count = 0;
            _this.messages.forEach(function (message) {
                if (!ChatConfig_1.chatConfig.JOIN_PARTS) {
                    // not showing JOIN/PARTS so don't count these message types
                    if (message.message.type === ChatMessage_1.chatType.AVAILABLE) return;
                    if (message.message.type === ChatMessage_1.chatType.UNAVAILABLE) return;
                }
                count++;
            });
            return count;
        };
        this.startScrollback = function () {
            var count = _this.countVisibleMessages();
            if (count > _this.scrollbackThreshold) {
                _this.scrollback = count - _this.scrollbackThreshold;
            } else {
                _this.scrollback = 0;
            }
        };
        this.cancelScrollback = function () {
            _this.scrollback = 0;
        };
        this.nextScrollbackPage = function () {
            if (_this.scrollbackPageSize > _this.scrollback) {
                _this.cancelScrollback();
            } else {
                _this.scrollback -= _this.scrollbackPageSize;
            }
        };
        this.roomId = roomId;
        this.scrollbackThreshold = scrollbackThreshold;
        this.scrollbackPageSize = scrollbackPageSize;
    }
    return ChatRoomInfo;
}();
exports.default = ChatRoomInfo;