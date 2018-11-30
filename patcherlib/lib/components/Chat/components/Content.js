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
var ChatText_1 = require("./ChatText");
var ChatInput_1 = require("./ChatInput");
var Content = /** @class */function (_super) {
    __extends(Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.send = function (text) {
            _this.props.send(_this.props.room.roomId, text);
        };
        _this.scroll = function () {
            var text = _this.refs['text'];
            text.autoScrollToBottom();
        };
        return _this;
    }
    Content.prototype.render = function () {
        return React.createElement("div", { className: 'chat-content' }, React.createElement(ChatText_1.default, { ref: 'text', room: this.props.room }), React.createElement(ChatInput_1.default, { label: 'SEND', send: this.send, slashCommand: this.props.slashCommand, scroll: this.scroll }));
    };
    return Content;
}(React.Component);
exports.default = Content;