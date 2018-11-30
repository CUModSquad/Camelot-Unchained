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
var ChatLine_1 = require("./ChatLine");
var ChatTextState = /** @class */function () {
    function ChatTextState() {}
    return ChatTextState;
}();
exports.ChatTextState = ChatTextState;
var AUTOSCROLL_FUZZYNESS = 12;
var ChatText = /** @class */function (_super) {
    __extends(ChatText, _super);
    function ChatText(props) {
        var _this = _super.call(this, props) || this;
        _this.SCROLLBACK_PAGESIZE = 50;
        _this.autoScroll = true;
        _this.lazyLoadTop = null;
        _this.autoScrollToBottom = function () {
            var chatBox = _this.refs['chatbox'];
            if (_this.autoScroll && chatBox.lastElementChild) {
                chatBox.scrollTop = chatBox.scrollHeight - chatBox.offsetHeight;
            }
        };
        _this.registerEvents = function () {
            var el = _this.refs['chatbox'];
            el.addEventListener('scroll', _this.handleScroll);
            el.addEventListener('auto-scroll', _this.handleAutoScroll);
        };
        _this.unregisterEvents = function () {
            var el = _this.refs['chatbox'];
            el.removeEventListener('scroll', _this.handleScroll);
            el.removeEventListener('auto-scroll', _this.handleAutoScroll);
        };
        _this.handleScroll = function (e) {
            // auto-scroll is enabled when the scroll bar is at or very near the bottom
            var chatBox = _this.refs['chatbox'];
            _this.autoScroll = chatBox.scrollHeight - (chatBox.scrollTop + chatBox.offsetHeight) < AUTOSCROLL_FUZZYNESS;
            // if lazy loading is active, and we have scrolled up to where the lazy loaded
            // content should be then lazy load the next page of content
            var lazy = _this.refs['lazyload'];
            if (lazy) {
                if (chatBox.scrollTop < lazy.offsetHeight) {
                    _this.lazyLoadTop = lazy.nextElementSibling;
                    _this.props.room.nextScrollbackPage();
                    _this.forceUpdate();
                }
            }
        };
        _this.handleAutoScroll = function () {
            _this.autoScrollToBottom();
        };
        _this.newRoom = function () {
            _this.currentRoom = _this.props.room.roomId;
            _this.autoScroll = true;
        };
        _this.state = new ChatTextState();
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleAutoScroll = _this.handleAutoScroll.bind(_this);
        return _this;
    }
    ChatText.prototype.componentDidUpdate = function () {
        this.autoScrollToBottom();
        if (this.lazyLoadTop) {
            // after a lazy load, reposition the element that was at the top
            // back at the top
            this.lazyLoadTop.scrollIntoView(true);
            this.lazyLoadTop = undefined;
        }
    };
    ChatText.prototype.componentDidMount = function () {
        this.autoScrollToBottom();
        this.registerEvents();
    };
    ChatText.prototype.componentWillUnmount = function () {
        this.unregisterEvents();
    };
    ChatText.prototype.render = function () {
        var room = this.props.room;
        var messages;
        var lazy = undefined;
        if (room) {
            if (!this.currentRoom || !room.roomId.same(this.currentRoom)) {
                this.newRoom();
            }
            if (room.scrollback > 0) {
                lazy = React.createElement("div", { ref: 'lazyload', className: 'chat-lazyload', style: { height: room.scrollback * 1.7 + 'em' } });
            }
            if (room.messages) {
                messages = room.messages.slice(room.scrollback);
            }
        }
        return React.createElement("div", { ref: 'chatbox', className: 'chat-text allow-select-text' }, lazy, messages && messages.map(function (msg, i) {
            return React.createElement(ChatLine_1.default, { key: i, message: msg.message });
        }));
    };
    return ChatText;
}(React.Component);
exports.default = ChatText;