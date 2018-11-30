"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Prefixer_1 = require("../utils/Prefixer");
var chat_defaults_1 = require("./chat-defaults");
var pre = new Prefixer_1.default(chat_defaults_1.prefixes.rooms);
var ChatRooms = /** @class */function (_super) {
    __extends(ChatRooms, _super);
    function ChatRooms(props) {
        var _this = _super.call(this, props) || this;
        // initialize state from local storage
        _this.initializeState = function () {
            var state = {};
            var val = JSON.parse(localStorage.getItem(pre.prefix('autojoins')));
            state.rooms = val == null ? chat_defaults_1.rooms : val;
            return state;
        };
        _this.state = _this.initializeState();
        return _this;
    }
    ChatRooms.prototype.render = function () {
        return React.createElement("div", null, "Hello from ChatRooms!");
    };
    return ChatRooms;
}(React.Component);
exports.default = ChatRooms;