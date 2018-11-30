"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ChatState = /** @class */function () {
    function ChatState() {
        var _this = this;
        this.state = {};
        this.set = function (name, value) {
            _this.state[name] = value;
        };
        this.get = function (name) {
            return _this.state[name];
        };
    }
    return ChatState;
}();
exports.ChatState = ChatState;
exports.chatState = new ChatState();