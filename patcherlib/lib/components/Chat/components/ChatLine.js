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
var __1 = require("../../../");
var React = require("react");
var ChatMessage_1 = require("./ChatMessage");
var ChatLineParser_1 = require("./ChatLineParser");
var CombatLogParser_1 = require("./CombatLogParser");
var ChatConfig_1 = require("./ChatConfig");
var ChatLine = /** @class */function (_super) {
    __extends(ChatLine, _super);
    function ChatLine(props) {
        var _this = _super.call(this, props) || this;
        _this.timestamp = function (message) {
            var s = '';
            var d = message.when;
            if (message.isNewDay()) s += d.toLocaleDateString() + ' ';
            s += d.toLocaleTimeString();
            return s;
        };
        _this.buildMessage = function (timestamp, text, classes) {
            if (classes === void 0) {
                classes = null;
            }
            var parser = new ChatLineParser_1.default();
            var isAction = parser.isAction(text);
            var nick = _this.props.message.nick;
            var elements;
            if (isAction) {
                elements = parser.parseAction(text);
            } else {
                nick += ':';
                elements = [React.createElement("span", { key: '0', className: 'chat-line-message' }, parser.parse(text))];
            }
            var chatLineClassName = _this.props.message.isCSE ? 'chat-line cse-chat-line' : 'chat-line';
            return React.createElement("div", { className: chatLineClassName + (classes ? ' ' + classes : '') }, timestamp, React.createElement("span", { className: "chat-line-nick " + (_this.props.message.isCSE ? 'cse' : ''), onClick: _this.PM.bind(_this) }, nick), elements);
        };
        _this.PM = function () {
            __1.events.fire('cse-chat-private-message', _this.props.message.nick);
        };
        return _this;
    }
    ChatLine.prototype.render = function () {
        if (this.props.message.text === null) return null;
        var element = null;
        var timestamp = ChatConfig_1.chatConfig.TIMESTAMPS ? React.createElement("span", { className: 'chat-timestamp' }, this.timestamp(this.props.message)) : null;
        var chatLineClassName = this.props.message.isCSE ? 'chat-line cse-chat-line' : 'chat-line';
        switch (this.props.message.type) {
            case ChatMessage_1.chatType.AVAILABLE:
                if (!ChatConfig_1.chatConfig.JOIN_PARTS) break;
                element = React.createElement("div", { className: chatLineClassName }, React.createElement("span", { className: 'chat-line-entry' }, this.props.message.nick, " entered the room"));
                break;
            case ChatMessage_1.chatType.UNAVAILABLE:
                if (!ChatConfig_1.chatConfig.JOIN_PARTS) break;
                element = React.createElement("div", { className: chatLineClassName }, React.createElement("span", { className: 'chat-line-exit' }, this.props.message.nick, " left the room"));
                break;
            case ChatMessage_1.chatType.GROUP:
                element = this.buildMessage(timestamp, this.props.message.text);
                break;
            case ChatMessage_1.chatType.PRIVATE:
                element = this.buildMessage(timestamp, this.props.message.text, 'chat-private');
                break;
            case ChatMessage_1.chatType.COMBAT:
                var cbparser = new CombatLogParser_1.default();
                element = React.createElement("div", { className: chatLineClassName }, timestamp, React.createElement("span", { key: '0', className: 'chat-line-message' }, cbparser.parse(this.props.message.text)));
                break;
            case ChatMessage_1.chatType.SYSTEM:
            case ChatMessage_1.chatType.BROADCAST:
                element = React.createElement("div", { className: chatLineClassName }, timestamp, React.createElement("span", { className: 'chat-line-system' }, this.props.message.text));
                break;
            default:
                element = React.createElement("div", { className: chatLineClassName }, timestamp, React.createElement("span", { className: 'chat-line-system' }, "[ Unrecognised chat message type ]"), React.createElement("span", { className: 'chat-line-message' }, JSON.stringify(this.props.message)));
        }
        return element;
    };
    return ChatLine;
}(React.Component);
exports.default = ChatLine;