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
var BooleanOption_1 = require("./BooleanOption");
var chat_defaults_1 = require("./chat-defaults");
var ChatConfig_1 = require("../ChatConfig");
var pre = new Prefixer_1.default(chat_defaults_1.prefixes.display);
var ChatDisplay = /** @class */function (_super) {
    __extends(ChatDisplay, _super);
    function ChatDisplay(props) {
        var _this = _super.call(this, props) || this;
        // initialize state from local storage
        _this.initializeState = function () {
            var state = {};
            for (var key in chat_defaults_1.display) {
                var option = chat_defaults_1.display[key];
                var val = JSON.parse(localStorage.getItem(pre.prefix(option.key)));
                state[option.key] = val == null ? option.default : val;
            }
            return state;
        };
        _this.updateItem = function (key, value) {
            localStorage.setItem(pre.prefix(key), value);
            ChatConfig_1.chatConfig.refresh();
            _this.setState(_this.initializeState());
        };
        _this.generateBooleanOption = function (option) {
            var state = _this.state;
            return React.createElement(BooleanOption_1.default, { key: option.key, optionKey: option.key, title: option.title, description: option.description, isChecked: state[option.key], onChecked: _this.updateItem });
        };
        _this.state = _this.initializeState();
        return _this;
    }
    ChatDisplay.prototype.render = function () {
        var options = [];
        for (var key in chat_defaults_1.display) {
            var option = chat_defaults_1.display[key];
            switch (option.type) {
                case 'boolean':
                    options.push(this.generateBooleanOption(option));
                    break;
                default:
                    break;
            }
        }
        return React.createElement("div", null, options);
    };
    return ChatDisplay;
}(React.Component);
exports.default = ChatDisplay;