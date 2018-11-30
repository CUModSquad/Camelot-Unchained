"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ChatMessage_1 = require("./ChatMessage");
var User_1 = require("./User");
var ChatRoomInfo_1 = require("./ChatRoomInfo");
var RoomId_1 = require("./RoomId");
var ChatClient_1 = require("../lib/ChatClient");
var messageType_1 = require("../lib/messageType");
var ChatConfig_1 = require("./ChatConfig");
var ChatState_1 = require("./ChatState");
var __1 = require("../../../");
var util_1 = require("util");
var ChatSession = /** @class */function () {
    function ChatSession() {
        var _this = this;
        this.rooms = [];
        this.currentRoom = undefined;
        this.reconnecting = false;
        this.connected = false;
        this.client = null;
        this.me = 'me';
        this.windowActive = true;
        this.SCROLLBACK_THRESHOLD = 50;
        this.SCROLLBACK_PAGESIZE = 100;
        this.diagnostics = function () {
            // const memory : any = (window.performance as any).memory;
            // const now : Date = new Date();
            // console.log(now.toISOString());
            // console.log(
            //   '| Memory Usage: ' + ((((memory.usedJSHeapSize/1024/1024)*100)|0)/100) + "MB"
            //   + ' Active: ' + this.windowActive
            //   + ' Latency: ' + this.latency
            //   + ' Reconnecting: ' + this.reconnecting
            //   + ' Rooms: ' + this.rooms.length
            // );
            // this.rooms.forEach((room: ChatRoomInfo) : void => {
            //   room.diagnostics();
            // });
        };
        this.onconnect = this.onconnect.bind(this);
        this.onconnectfailed = this.onconnectfailed.bind(this);
        this.onping = this.onping.bind(this);
        this.onchat = this.onchat.bind(this);
        this.ondisconnect = this.ondisconnect.bind(this);
        this.onrooms = this.onrooms.bind(this);
        window.onblur = function () {
            return _this.windowActive = false;
        };
        window.onfocus = function () {
            _this.windowActive = true;
            var room = _this.getRoom(_this.currentRoom);
            if (room) room.seen();
        };
    }
    ChatSession.prototype.connect = function (username, password) {
        this.internalConnect({ username: username, password: password });
    };
    ChatSession.prototype.connectWithToken = function (accessToken) {
        this.internalConnect({ accessToken: accessToken });
    };
    ChatSession.prototype.onping = function (ping) {
        this.latency = Date.now() - ping.now;
        __1.events.fire('chat-session-update', this);
        // this.diagnostics();
    };
    ChatSession.prototype.onconnect = function () {
        // TODO: if no rooms yet, this won't work.
        this.me = this.client.chat.client.jid._local;
        ChatConfig_1.chatConfig.setNick(this.me);
        ChatState_1.chatState.set('chat', this);
        this.broadcast(new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.SYSTEM, '', '', 'Connected to chat server.'));
        this.connected = true;
        this.reconnecting = false;
    };
    ChatSession.prototype.onconnectfailed = function () {
        // if failed to connect and we are trying to re-connect, we should
        // retry
        if (this.reconnecting) {
            // connectFailed while reconnecting, try again
            this.reconnect();
        }
    };
    ChatSession.prototype.ondisconnect = function () {
        this.broadcast(new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.SYSTEM, '', '', 'Disconnected from chat server.'));
        this.reconnect();
    };
    ChatSession.prototype.onchat = function (args) {
        switch (args.type) {
            case messageType_1.default.SYSTEM:
                if (util_1.isArray(args.message)) {
                    var arrayOfMessages = args.message.map(function (msg) {
                        return new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.SYSTEM, 'system', 'system', msg, false, new Date());
                    });
                    this.recv(arrayOfMessages);
                    return;
                }
                this.recv(new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.SYSTEM, 'system', 'system', args.message, false, new Date()));
                break;
            case messageType_1.default.COMBAT_LOG:
                if (util_1.isArray(args.message)) {
                    var arrayOfMessages = args.message.map(function (msg) {
                        return new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.COMBAT, 'combat', '', msg, false, new Date());
                    });
                    this.recv(arrayOfMessages);
                    return;
                }
                this.recv(new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.COMBAT, 'combat', '', args.message, false, new Date()));
                break;
            case messageType_1.default.AVAILIBLE:
            case messageType_1.default.UNAVAILIBLE:
                this.presence(args.type, new User_1.UserInfo(args.roomName, args.sender.sender, args.sender.isCSE));
                break;
            case messageType_1.default.MESSAGE_CHAT:
            case messageType_1.default.MESSAGE_GROUP:
                this.recv(new ChatMessage_1.ChatMessage(args.type === messageType_1.default.MESSAGE_CHAT ? ChatMessage_1.chatType.PRIVATE : ChatMessage_1.chatType.GROUP, args.roomName, args.sender.sender, args.message, args.sender.isCSE, args.time));
                break;
            case messageType_1.default.NONE:
                this.recv(new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.SYSTEM, '', '', 'Unrecognised message type ' + args.type));
                break;
        }
    };
    ChatSession.prototype.reconnect = function () {
        var _this = this;
        this.reconnecting = true;
        // Build list of rooms to re-connect to
        var rooms = [];
        for (var i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].roomId.type === ChatMessage_1.chatType.GROUP) {
                rooms.push(this.rooms[i].roomId);
                this.rooms[i].players = 0;
            }
        }
        // Reconnect in 1s
        setTimeout(function () {
            _this.client.reconnect(rooms);
        }, 10000);
    };
    ChatSession.prototype.simulateDisconnect = function () {
        this.client.disconnect();
    };
    ChatSession.prototype.getRooms = function () {
        this.client.getRooms();
    };
    ChatSession.prototype.onrooms = function (items) {
        __1.events.fire('chat-room-list', items);
    };
    // Broadcast a message to all rooms
    ChatSession.prototype.broadcast = function (message) {
        message.type = ChatMessage_1.chatType.BROADCAST;
        // send message to current tab
        var rooms = this.rooms;
        if (rooms.length) {
            for (var i = 0; i < rooms.length; i++) {
                rooms[i].add(message);
            }
            __1.events.fire('chat-session-update', this);
        } else {
            // TODO: What to do here?
        }
    };
    // Receive a message from a room or user.
    ChatSession.prototype.recv = function (message) {
        var _this = this;
        if (util_1.isArray(message)) {
            message.forEach(function (m) {
                // check for a broadcast message (private message sent by "")
                if (m.type === ChatMessage_1.chatType.PRIVATE && m.nick === 'chat.camelotunchained.com/warning') {
                    _this.broadcast(m);
                } else {
                    var roomId = new RoomId_1.default(m.roomName, m.type);
                    var room = _this.getRoom(roomId);
                    room.push(m); // increments unread
                    if (!_this.currentRoom) {
                        _this.currentRoom = roomId;
                    }
                    if (_this.windowActive && _this.currentRoom.same(roomId)) {
                        room.seen();
                    }
                }
            });
            __1.events.fire('chat-session-update', this);
            return;
        }
        // check for a broadcast message (private message sent by "")
        if (message.type === ChatMessage_1.chatType.PRIVATE && message.nick === 'chat.camelotunchained.com/warning') {
            this.broadcast(message);
        } else {
            var tempRoomId = new RoomId_1.default(message.roomName, message.type);
            var room = this.getRoom(tempRoomId);
            var roomId = room.roomId;
            room.push(message); // increments unread
            if (!this.currentRoom) {
                this.currentRoom = roomId;
            }
            if (this.windowActive && this.currentRoom.same(roomId)) {
                room.seen();
            }
            __1.events.fire('chat-session-update', this);
        }
    };
    // Deal with presence messages
    ChatSession.prototype.presence = function (type, user) {
        // find the room this user is in, don't create room unless this is an available presence
        var roomId = new RoomId_1.default(user.roomName, ChatMessage_1.chatType.GROUP);
        var room = this.getRoom(roomId, type === messageType_1.default.AVAILIBLE);
        if (room) {
            // enter or leave
            if (type === messageType_1.default.AVAILIBLE) {
                room.addUser(user);
                room.add(new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.AVAILABLE, '', user.name));
            } else {
                room.removeUser(user);
                room.add(new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.UNAVAILABLE, '', user.name));
            }
            __1.events.fire('chat-session-update', this);
        }
    };
    ChatSession.prototype.setCurrentRoom = function (roomId) {
        this.currentRoom = roomId;
        __1.events.fire('chat-session-update', this);
    };
    ChatSession.prototype.findRoom = function (roomId) {
        for (var i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].roomId && this.rooms[i].roomId.same(roomId)) {
                return this.rooms[i];
            }
        }
    };
    ChatSession.prototype.getRoom = function (roomId, add) {
        if (add === void 0) {
            add = true;
        }
        var room = this.findRoom(roomId);
        if (!room && add) {
            room = new ChatRoomInfo_1.default(roomId, this.SCROLLBACK_THRESHOLD, this.SCROLLBACK_PAGESIZE);
            this.rooms.push(room);
        }
        return room;
    };
    ChatSession.prototype.deleteRoom = function (roomId) {
        for (var i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].roomId.same(roomId)) {
                var room = this.rooms[i];
                this.rooms.splice(i, 1);
                return room;
            }
        }
    };
    ChatSession.prototype.send = function (text, roomName) {
        this.client.sendMessageToRoom(text, roomName);
    };
    ChatSession.prototype.sendMessage = function (text, user) {
        this.client.sendMessageToUser(text, user);
        var roomId = new RoomId_1.default(user, ChatMessage_1.chatType.PRIVATE);
        var message = new ChatMessage_1.ChatMessage(ChatMessage_1.chatType.PRIVATE, user, this.me, text);
        this.getRoom(roomId).add(message);
        this.joinRoom(roomId);
        __1.events.fire('chat-session-update', this);
    };
    ChatSession.prototype.joinRoom = function (roomId) {
        if (!this.findRoom(roomId)) {
            var room_1 = this.getRoom(roomId, true);
            this.client.joinRoom(room_1.roomId);
            room_1.seen();
            room_1.startScrollback();
            this.setCurrentRoom(room_1.roomId);
            return;
        }
        var room = this.getRoom(roomId);
        room.seen();
        room.startScrollback();
        this.setCurrentRoom(room.roomId);
    };
    ChatSession.prototype.leaveRoom = function (roomId) {
        var room = this.deleteRoom(roomId);
        if (room) {
            switch (roomId.type) {
                case ChatMessage_1.chatType.GROUP:
                    this.client.leaveRoom(roomId.name);
                    break;
                case ChatMessage_1.chatType.PRIVATE:
                    // no-op
                    break;
            }
            if (roomId.same(this.currentRoom)) {
                if (this.rooms.length) {
                    this.currentRoom = this.rooms[0].roomId;
                    this.rooms[0].seen();
                    this.rooms[0].startScrollback();
                } else {
                    this.currentRoom = undefined;
                }
            }
            __1.events.fire('chat-session-update', this);
        }
    };
    // get list of all users from rooms the user has joined
    ChatSession.prototype.getAllUsers = function () {
        var allUsers = [];
        this.rooms.forEach(function (room) {
            room.users.forEach(function (user) {
                if (allUsers.indexOf(user.info.name) < 0) allUsers.push(user.info.name);
            });
        });
        return allUsers;
    };
    ChatSession.prototype.internalConnect = function (login) {
        var _this = this;
        __1.events.on('system_message', function (msg) {
            return _this.onchat({ type: messageType_1.default.SYSTEM, message: msg });
        });
        __1.events.on('combatlog_message', function (msg) {
            return _this.onchat({ type: messageType_1.default.COMBAT_LOG, message: msg });
        });
        if (!this.client) {
            this.client = new ChatClient_1.default();
            this.client.on('connect', this.onconnect);
            this.client.on('connectfailed', this.onconnectfailed);
            this.client.on('ping', this.onping);
            this.client.on('presence', this.onchat);
            this.client.on('message', this.onchat);
            this.client.on('groupmessage', this.onchat);
            this.client.on('disconnect', this.ondisconnect);
            this.client.on('rooms', this.onrooms);
            // if (!patcher.hasRealApi()) {
            //   if (username === "") username = window.prompt('username?');
            //   if (password === "###") password = window.prompt('password?');
            // }
            if (login.accessToken) {
                this.client.connectWithToken(login.accessToken);
            } else {
                this.client.connect(login.username, login.password);
            }
        }
    };
    return ChatSession;
}();
exports.default = ChatSession;