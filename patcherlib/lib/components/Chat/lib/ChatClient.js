"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var CSEChat_1 = require("./CSEChat");
var Config_1 = require("./Config");
var EventEmitter_1 = require("./EventEmitter");
var RoomId_1 = require("../components/RoomId");
var ChatMessage_1 = require("../components/ChatMessage");
var GLOBAL_ROOM_ID = new RoomId_1.default('_global', ChatMessage_1.chatType.GROUP);
var CUBE_ROOM_ID = new RoomId_1.default('_cube', ChatMessage_1.chatType.GROUP);
var DEFAULT_ROOM_LIST = [GLOBAL_ROOM_ID, CUBE_ROOM_ID];
var ChatClient = /** @class */function () {
    function ChatClient() {
        this.chat = null;
        this.connected = false;
        this.updated = 0;
        this.errorListener = null;
        this.config = null;
        this.emitter = new EventEmitter_1.default();
    }
    ChatClient.prototype.on = function (topic, handler) {
        return this.emitter.on(topic, handler);
    };
    ChatClient.prototype.off = function (id) {
        this.emitter.removeListener(id);
    };
    ChatClient.prototype.connectWithToken = function (accessToken, nick, rooms) {
        if (nick === void 0) {
            nick = '';
        }
        if (rooms === void 0) {
            rooms = DEFAULT_ROOM_LIST;
        }
        if (this.chat) {
            console.warn('ChatClient:connect() called when already connected.');
            return;
        }
        // this._fire('connecting');
        this.connected = false;
        this.updated = 0;
        this.config = new Config_1.default('', accessToken, nick);
        this.internalConnect(rooms);
    };
    ChatClient.prototype.connect = function (username, password, nick, rooms) {
        if (nick === void 0) {
            nick = '';
        }
        if (rooms === void 0) {
            rooms = DEFAULT_ROOM_LIST;
        }
        if (this.chat) {
            console.warn('ChatClient:connect() called when already connected.');
            return;
        }
        // this._fire('connecting');
        this.connected = false;
        this.updated = 0;
        this.config = new Config_1.default(username, password, nick);
        this.internalConnect(rooms);
    };
    ChatClient.prototype.disconnect = function () {
        this.internalDisconnect();
        this.internalFire('disconnect');
    };
    ChatClient.prototype.reconnect = function (rooms) {
        this._connect(rooms);
    };
    ChatClient.prototype.getNick = function () {
        return this.chat.client.jid._local;
    };
    ChatClient.prototype.getStoredRooms = function () {
        try {
            var storedRooms = localStorage.getItem('CSE_CHAT_Stored_channels');
            if (storedRooms) {
                return JSON.parse(storedRooms);
            }
            return [];
        } catch (err) {
            // Just reset stored channels, there was some bad/old data in there.
            localStorage.setItem('CSE_CHAT_Stored_channels', '');
            return [];
        }
    };
    ChatClient.prototype.removeFromStoredRooms = function (room) {
        var storedRooms = this.getStoredRooms();
        var idx = lodash_1.findIndex(storedRooms, function (_room) {
            return _room.name === room;
        });
        if (idx !== -1) {
            storedRooms.splice(idx, 1);
        }
        this.setStoredRooms(storedRooms);
    };
    ChatClient.prototype.addToStoredRooms = function (room) {
        var storedRooms = this.getStoredRooms();
        var idx = lodash_1.findIndex(storedRooms, function (_room) {
            return _room.name === room.name;
        });
        if (idx !== -1) {
            return;
        }
        storedRooms.push(room);
        this.setStoredRooms(storedRooms);
    };
    ChatClient.prototype.setStoredRooms = function (rooms) {
        if (rooms.length > 0) {
            localStorage.setItem('CSE_CHAT_Stored_channels', JSON.stringify(rooms));
        } else {
            localStorage.removeItem('CSE_CHAT_Stored_channels');
        }
    };
    ChatClient.prototype.sendMessageToRoom = function (message, roomName) {
        if (!this.chat || !this.connected) {
            console.warn('ChatClient:sendMessageToRoom() called when not connected.');
            return;
        }
        this.chat.sendMessageToRoom(message, roomName);
    };
    // ChatAction.sendMessageToUser(...)
    ChatClient.prototype.sendMessageToUser = function (message, userName) {
        if (!this.chat || !this.connected) {
            console.warn('ChatClient:sendMessageToUser() called when not connected.');
            return;
        }
        this.chat.sendMessageToUser(message, userName);
    };
    ChatClient.prototype.joinRoom = function (roomId) {
        if (!this.chat) {
            console.warn('ChatClient:joinRoom() called when not connected.');
            return;
        }
        this.chat.joinRoom(roomId.name + this.chat.config.serviceAddress);
        this.addToStoredRooms(roomId);
    };
    ChatClient.prototype.leaveRoom = function (roomName) {
        if (!this.chat) {
            console.warn('ChatClient:leaveRoom() called when not connected.');
            return;
        }
        this.chat.leaveRoom(roomName + this.chat.config.serviceAddress);
        this.removeFromStoredRooms(roomName);
    };
    ChatClient.prototype.getRooms = function () {
        if (!this.chat) {
            console.warn('ChatClient:leaveRoom() called when not connected.');
            return;
        }
        this.chat.getRooms();
    };
    ChatClient.prototype._connect = function (rooms) {
        var _this = this;
        if (this.chat) {
            console.warn('ChatClient:connect() called when already connected.');
            return;
        }
        this.chat = new CSEChat_1.CSEChat(this.config);
        this.errorListener = this.chat.on('error', function (err) {
            return _this._onerror(err);
        });
        this.chat.once('online', function () {
            return _this._online(rooms);
        });
        this.chat.connect();
    };
    ChatClient.prototype._online = function (rooms) {
        var _this = this;
        this.connected = true;
        this._initializeEvents();
        this._fire('connect');
        rooms = rooms.concat(this.getStoredRooms());
        var joining = {};
        rooms.forEach(function (room) {
            if (!joining[room.name]) {
                joining[room.name] = true;
                _this.chat.joinRoom(room.name + _this.config.serviceAddress);
            }
        });
    };
    ChatClient.prototype._onerror = function (err) {
        return;
        // const connected: boolean = this.connected;
        // this._disconnect();
        // if (!connected) {
        //   // if not connected when we got the error, connect failed
        //   this._fire('connectfailed', err);
        // } else {
        //   // if connected when got the error, signal we were disconnected
        //   this._fire('disconnect');
        // }
    };
    ChatClient.prototype._initializeEvents = function () {
        var _this = this;
        this.chat.on('presence', function (presence) {
            return _this._fire('presence', presence);
        });
        this.chat.on('message', function (message) {
            return _this._fire('message', message);
        });
        this.chat.on('groupmessage', function (message) {
            return _this._fire('groupmessage', message);
        });
        this.chat.on('ping', function (ping) {
            return _this._fire('ping', ping);
        });
        this.chat.on('rooms', function (rooms) {
            return _this._fire('rooms', rooms);
        });
    };
    ChatClient.prototype._disconnect = function () {
        if (this.chat) {
            this.chat.removeListener(this.errorListener);
            this.chat.disconnect();
            this.chat = null;
        }
        this.connected = false;
    };
    ChatClient.prototype._fire = function (topic, data) {
        this.emitter.emit(topic, data);
        this.updated = Date.now();
    };
    ChatClient.prototype.internalConnect = function (rooms) {
        var _this = this;
        if (this.chat) {
            console.warn('ChatClient:connect() called when already connected.');
            return;
        }
        this.chat = new CSEChat_1.CSEChat(this.config);
        this.errorListener = this.chat.on('error', function (err) {
            return _this.internalOnError(err);
        });
        this.chat.once('online', function () {
            return _this.internalOnline(rooms);
        });
        this.chat.connect();
    };
    ChatClient.prototype.internalOnline = function (rooms) {
        var _this = this;
        this.connected = true;
        this.internalInitEvents();
        this.internalFire('connect');
        var newRooms = rooms;
        newRooms = newRooms.concat(this.getStoredRooms());
        var joining = {};
        newRooms.forEach(function (room) {
            if (!joining[room.name]) {
                joining[room.name] = true;
                _this.chat.joinRoom(room.name + _this.config.serviceAddress);
            }
        });
    };
    ChatClient.prototype.internalOnError = function (err) {
        return;
        // const connected: boolean = this.connected;
        // this._disconnect();
        // if (!connected) {
        //   // if not connected when we got the error, connect failed
        //   this._fire('connectfailed', err);
        // } else {
        //   // if connected when got the error, signal we were disconnected
        //   this._fire('disconnect');
        // }
    };
    ChatClient.prototype.internalInitEvents = function () {
        var _this = this;
        this.chat.on('presence', function (presence) {
            return _this.internalFire('presence', presence);
        });
        this.chat.on('message', function (message) {
            return _this.internalFire('message', message);
        });
        this.chat.on('groupmessage', function (message) {
            return _this.internalFire('groupmessage', message);
        });
        this.chat.on('ping', function (ping) {
            return _this.internalFire('ping', ping);
        });
        this.chat.on('rooms', function (rooms) {
            return _this.internalFire('rooms', rooms);
        });
    };
    ChatClient.prototype.internalDisconnect = function () {
        if (this.chat) {
            this.chat.removeListener(this.errorListener);
            this.chat.disconnect();
            this.chat = null;
        }
        this.connected = false;
    };
    ChatClient.prototype.internalFire = function (topic, data) {
        this.emitter.emit(topic, data);
        this.updated = Date.now();
    };
    return ChatClient;
}();
exports.default = ChatClient;