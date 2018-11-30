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
var __1 = require("../../");
var ChatSession_1 = require("./components/ChatSession");
var ChatMessage_1 = require("./components/ChatMessage");
var SlashCommand_1 = require("./components/SlashCommand");
var RoomId_1 = require("./components/RoomId");
var ChatConfig_1 = require("./components/ChatConfig");
var Info_1 = require("./components/Info");
var Content_1 = require("./components/Content");
var chat_defaults_1 = require("./components/settings/chat-defaults");
var Chat = /** @class */function (_super) {
    __extends(Chat, _super);
    function Chat(props) {
        var _this = _super.call(this, props) || this;
        _this._eventHandlers = [];
        // Send a message to the current room, named room (not implemented) or user (not implemneted)
        _this.send = function (roomId, text) {
            switch (roomId.type) {
                case ChatMessage_1.chatType.GROUP:
                    _this.state.chat.send(text, roomId.name);
                    break;
                case ChatMessage_1.chatType.PRIVATE:
                    _this.state.chat.sendMessage(text, roomId.name);
                    break;
            }
        };
        _this.update = function (chat) {
            _this.setState({ chat: chat, now: Date.now() });
        };
        _this.optionsUpdated = function (config) {
            _this.setState({ config: config, now: Date.now() });
        };
        _this.selectRoom = function (roomId) {
            _this.state.chat.joinRoom(roomId);
        };
        _this.leaveRoom = function (roomId) {
            _this.state.chat.leaveRoom(roomId);
        };
        _this.joinRoom = function (roomName, displayName) {
            var roomId = new RoomId_1.default(roomName, ChatMessage_1.chatType.GROUP, displayName);
            _this.state.chat.joinRoom(roomId);
        };
        _this.slashCommand = function (command) {
            if (__1.parseMessageForSlashCommand(command)) return true;
            var cmd = new SlashCommand_1.default(command);
            if (cmd.exec(_this.state.chat)) return true;
            __1.client.SendSlashCommand(command);
            return true;
        };
        _this.close = function () {
            window['_cse_chat_session'] = _this.state.chat;
            _this.props.hideChat();
        };
        _this.disconnect = function () {
            _this.state.chat.simulateDisconnect();
        };
        _this.getRooms = function () {
            _this.state.chat.getRooms();
        };
        _this.state = _this.initialState();
        // load configuration (before subscribing to options updates!)
        ChatConfig_1.chatConfig.refresh();
        // handle updates to chat session
        _this._eventHandlers.push(__1.events.on('chat-session-update', _this.update));
        _this._eventHandlers.push(__1.events.on('chat-show-room', _this.joinRoom));
        _this._eventHandlers.push(__1.events.on('chat-leave-room', function (name) {
            return _this.leaveRoom(new RoomId_1.default(name, ChatMessage_1.chatType.GROUP));
        }));
        _this._eventHandlers.push(__1.events.on('chat-options-update', _this.optionsUpdated));
        // Initialize chat settings in localStorage
        chat_defaults_1.initLocalStorage();
        return _this;
    }
    Chat.prototype.componentWillMount = function () {
        // hook up to chat
        this.state.chat.connectWithToken(this.props.accessToken);
    };
    Chat.prototype.componentDidMount = function () {
        if (!this.state.chat.currentRoom) {
            var roomId = new RoomId_1.default('_global', ChatMessage_1.chatType.GROUP);
            this.state.chat.setCurrentRoom(roomId);
        }
    };
    Chat.prototype.componentWillUnmount = function () {
        this._eventHandlers.forEach(function (value) {
            __1.events.off(value);
        });
    };
    // Render chat
    Chat.prototype.render = function () {
        var current = this.state.chat.currentRoom;
        var room = current ? this.state.chat.getRoom(current) : undefined;
        return React.createElement("div", { className: 'cse-chat no-select' }, React.createElement("div", { className: 'chat-frame' }, React.createElement(Info_1.default, { chat: this.state.chat, currentRoom: this.state.chat.currentRoom, selectRoom: this.selectRoom, leaveRoom: this.leaveRoom }), React.createElement(Content_1.default, { room: room, send: this.send, slashCommand: this.slashCommand })));
    };
    Chat.prototype.initialState = function () {
        return {
            chat: window['_cse_chat_session'] || new ChatSession_1.default(),
            now: 0,
            config: ChatConfig_1.chatConfig
        };
    };
    return Chat;
}(React.Component);
exports.Chat = Chat;