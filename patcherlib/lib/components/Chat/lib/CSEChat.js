"use strict";
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var randomString = require("randomstring");
var node_xmpp_client_1 = require("node-xmpp-client");
var Config_1 = require("./Config");
exports.Config = Config_1.default;
var EventEmitter_1 = require("./EventEmitter");
var Message_1 = require("./Message");
var Sender_1 = require("./Sender");
var messageType_1 = require("./messageType");
var NS_DISCO_ITEMS = 'http://jabber.org/protocol/disco#items';
function cseLoginTokenMechanism() {}
cseLoginTokenMechanism.prototype.name = 'CSELOGINTOKEN';
cseLoginTokenMechanism.prototype.authAttrs = function () {
    return {};
};
cseLoginTokenMechanism.prototype.auth = function () {
    return this.access_token;
};
cseLoginTokenMechanism.prototype.match = function (options) {
    if (options.loginToken) {
        return true;
    }
    return false;
};
function debounce(func, wait, immediate) {
    var timeout = null;
    return function () {
        var args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
}
var CSEChat = /** @class */function () {
    function CSEChat(config) {
        if (config === void 0) {
            config = {};
        }
        this.eventEmitter = new EventEmitter_1.default();
        this._reconnect = true;
        this._idCounter = 0;
        this._iqc = 0;
        this._msgs = {};
        this._inFlight = 0;
        this._pings = {};
        this._pingsInFlight = 0;
        this._recvQueue = [];
        this.messageHandlerTimeout = null;
        this.config = config;
    }
    CSEChat.prototype.connect = function () {
        if (this.client) return;
        this.config.init();
        this.client = new node_xmpp_client_1.Client({
            websocket: { url: this.config.websocketUrl },
            jid: "none@chat.camelotunchained.com/" + randomString.generate(7),
            loginToken: true,
            access_token: this.config.getPassword()
        });
        this.client.registerSaslMechanism(cseLoginTokenMechanism);
        this.initializeEvents();
        return this.client;
    };
    CSEChat.prototype.disconnect = function () {
        if (!this.client) return;
        if (this._pinger) {
            clearInterval(this._pinger);
            this._pinger = null;
        }
        this._reconnect = false;
        this.client.reconnect = false;
        this.client.removeAllListeners('disconnect');
        this.client.removeAllListeners('online');
        this.client.removeAllListeners('stanza');
        this.client.end();
        this.client = null;
    };
    CSEChat.prototype.sendMessageToRoom = function (message, roomName) {
        if (!this.client) return;
        this.client.send(new node_xmpp_client_1.Element('message', {
            to: roomName + '@' + this.config.service + '.' + this.config.address,
            type: 'groupchat'
        }).c('body').t(message));
    };
    CSEChat.prototype.sendMessageToUser = function (message, userName) {
        if (!this.client) return;
        this.client.send(new node_xmpp_client_1.Element('message', {
            to: userName + '@' + this.config.address,
            type: 'chat'
        }).c('body').t(message));
    };
    CSEChat.prototype.joinRoom = function (roomName) {
        if (!this.client) return;
        this.client.send(new node_xmpp_client_1.Element('presence', {
            to: roomName + '/' + this.client.jid._local
        }).c('x', { xmlns: 'http://jabber.org/protocol/muc' }));
    };
    CSEChat.prototype.leaveRoom = function (roomName) {
        if (!this.client) return;
        this.client.send(new node_xmpp_client_1.Element('presence', {
            from: this.client.jid._,
            to: roomName + '/' + this.client.jid._local,
            type: 'unavailable'
        }));
    };
    CSEChat.prototype.getRooms = function () {
        if (!this.client) return;
        var id = this.nextId('room');
        this.client.send(new node_xmpp_client_1.Element('iq', {
            id: id,
            from: this.client.jid.toString(),
            to: this.config.serviceAddress.substr(1),
            type: 'get'
        }).c('query', { xmlns: NS_DISCO_ITEMS }));
        this._msgs[id] = { id: id, type: 'rooms', now: Date.now() };
        this._inFlight++;
    };
    // alias eventEmitter
    CSEChat.prototype.on = function (event, callback) {
        return this.eventEmitter.on(event, callback);
    };
    CSEChat.prototype.once = function (event, callback) {
        return this.eventEmitter.listenOnce(event, callback);
    };
    CSEChat.prototype.removeListener = function (event) {
        this.eventEmitter.removeListener(event);
    };
    // PRIVATE METHODS (as private as they can be)
    // generate an id using an id generator
    CSEChat.prototype.nextId = function (prefix) {
        return prefix + this._iqc++;
    };
    CSEChat.prototype.initializeEvents = function () {
        var _this = this;
        if (!this.client) throw new Error('No connection to initialize');
        this.client.on('error', function (error) {
            switch (error.code) {
                case 'EADDRNOTAVAIL':
                case 'ENOTFOUND':
                    _this.eventEmitter.emit('error', 'Unable to connect to server at' + _this.config.address);
                    break;
                case 'ETIMEOUT':
                    _this.eventEmitter.emit('error', 'Connection timed out.');
                    break;
                default:
                    _this.eventEmitter.emit('error', error);
                    break;
            }
        });
        this.client.on('online', function () {
            // handle server assigned resource
            _this.config.resource = _this.client.jid._resource;
            // this.config.jid = this.client.jid.toString();
            _this.eventEmitter.emit('online');
            // send global presence
            _this.client.send(new node_xmpp_client_1.Element('presence', { type: 'available' }).c('show').t('chat'));
            _this.keepalive();
        }, this);
        this.client.on('disconnect', function () {
            _this.client = null;
            _this.eventEmitter.emit('disconnect', _this._reconnect);
            if (_this._reconnect) _this.connect();
        });
        this.client.on('stanza', function (stanza) {
            return _this.recvStanza(stanza);
        });
    };
    CSEChat.prototype.recvStanza = function (stanza) {
        var _this = this;
        if (stanza.is('presence')) {
            this._recvQueue.push(stanza);
            if (this.messageHandlerTimeout) return;
            this.messageHandlerTimeout = setTimeout(function () {
                return _this.messageHandler();
            }, 1);
        } else {
            this.processStanza(stanza);
        }
    };
    CSEChat.prototype.messageHandler = function () {
        var _this = this;
        var stanza = this._recvQueue.shift();
        this.processStanza(stanza);
        if (this._recvQueue.length === 0) {
            this.messageHandlerTimeout = null;
            return;
        }
        this.messageHandlerTimeout = setTimeout(function () {
            return _this.messageHandler();
        }, 2);
    };
    // called when we connect.  Initialise the ping response map, the inflight count
    // and if the interval time is not running, start the interval timer.
    CSEChat.prototype.keepalive = function () {
        var _this = this;
        this._pings = {};
        this._pingsInFlight = 0;
        if (!this._pinger) {
            this._pinger = setInterval(function () {
                // every 10 seconds, send a ping stanza
                _this.ping(function (ping) {
                    delete ping.pong; // dont pass handler to listener
                    _this.eventEmitter.emit('ping', ping);
                });
            }, 10000);
        }
    };
    CSEChat.prototype.ping = function (pong) {
        if (!pong) {
            console.error('ping without pong');
            debugger;
        }
        // If inflight is not 0, then we have a ping that was not responded to
        // so decide what to do (atm we disconnect)
        // if (this._pingsInFlight > 0) {
        //   // not got response to last ping, disconnect, stop ping timer
        //   // and trigger an error condition.
        //   this.disconnect();
        //   clearInterval(this._pinger);
        //   this._pinger = null;
        //   this.eventEmitter.emit('error', 'Ping timed out');
        //   return;
        // }
        // Create a new ping message
        var id = this.nextId('ping');
        this.client.send(new node_xmpp_client_1.Element('iq', {
            id: id,
            from: this.client.jid.toString(),
            to: this.config.serviceAddress.substr(1),
            type: 'get'
        }).c('ping', { xmlns: 'urn:xmpp:ping' }));
        // register this ping and callback, and count inflight pings
        // so we can tell if we have any outstanding
        this._pings[id] = { id: id, pong: pong, now: Date.now() };
        this._pingsInFlight++;
    };
    // handle the ping response.  Lookup the ping in the ping map, if there
    // then decrement inflight count (this ping just landed) and call the pong
    // handler, finally remove the ping from the ping map.
    CSEChat.prototype.pong = function (stanza) {
        var id = stanza.attrs.id;
        var ping = this._pings[id];
        if (ping) {
            this._pingsInFlight--;
            if (ping.pong) {
                ping.pong(ping);
            } else {
                console.warn('ping lost its pong ' + JSON.stringify(ping));
            }
            delete this._pings[id]; // reclaim memory
        }
    };
    // #########################################################################
    CSEChat.prototype.processStanza = function (stanza) {
        // if error?
        if (stanza.attrs.type === 'error') {
            return;
        }
        if (stanza.is('message')) {
            switch (stanza.attrs.type) {
                case 'groupchat':
                    this.eventEmitter.emit('groupmessage', this.parseMessageGroup(stanza));
                    break;
                case 'chat':
                    this.eventEmitter.emit('message', this.parseMessageChat(stanza));
                    break;
            }
            return;
        }
        if (stanza.is('presence')) {
            var x = stanza.getChild('x');
            if (!x) return;
            var status_1 = x.getChild('status');
            if (status_1) return;
            this.eventEmitter.emit('presence', this.parsePresence(stanza));
            return;
        }
        if (stanza.is('iq')) {
            if (stanza.attrs.type === 'result') {
                var bind = stanza.getChild('bind');
                if (bind) {
                    var jid = bind.getChild('jid');
                    // const jidString = jid
                }
                var ping = stanza.getChild('ping');
                if (ping) {
                    this.pong(stanza);
                }
                var query = stanza.getChild('query');
                if (query) {
                    if (query.attrs.xmlns === NS_DISCO_ITEMS) {
                        this.gotRooms(stanza.attrs.id, query);
                    }
                }
            }
        }
    };
    CSEChat.prototype.gotRooms = function (id, stanza) {
        var items = stanza.getChildren('item');
        var info = this._msgs[id];
        if (info) {
            this._inFlight--;
            delete this._msgs[id];
            var rooms_1 = [];
            items.forEach(function (item) {
                rooms_1.push({ name: item.attrs['name'], jid: item.attrs['jid'] });
            });
            this.eventEmitter.emit('rooms', rooms_1);
        }
    };
    CSEChat.prototype.parseMessageGroup = function (stanza) {
        var body = stanza.getChild('body');
        var message = body ? body.getText() : '';
        var nick = stanza.getChild('nick');
        var cseflags = stanza.getChild('cseflags');
        var isCSE = cseflags ? cseflags.attrs.cse : false;
        var fromArr = stanza.attrs.from.split('/');
        var roomName = fromArr[0].split('@')[0];
        var sender = fromArr[1];
        var senderName = nick ? nick.getText() : sender;
        var s = new Sender_1.default(0, sender, senderName, isCSE);
        return new Message_1.default(this._idCounter++, new Date(), message, roomName, messageType_1.default.MESSAGE_GROUP, s);
    };
    CSEChat.prototype.parseMessageChat = function (stanza) {
        var body = stanza.getChild('body');
        var message = body ? body.getText() : '';
        var nick = stanza.getChild('nick');
        var sender = stanza.from.split('@')[0];
        var senderName = nick ? nick.getText() : sender;
        var cseflags = stanza.getChild('cseflags');
        var isCSE = cseflags ? cseflags.attrs.cse : false;
        var s = new Sender_1.default(0, sender, senderName, isCSE);
        return new Message_1.default(this._idCounter++, new Date(), message, sender, messageType_1.default.MESSAGE_CHAT, s);
    };
    CSEChat.prototype.parsePresence = function (stanza) {
        var x = stanza.getChild('x');
        var status = x.getChild('status');
        var role = x.getChild('item').attrs.role;
        var fromArr = stanza.attrs.from.split('/');
        var room = fromArr[0];
        var roomName = room.split('@')[0];
        var sender = fromArr[1];
        var senderName = sender.split('@')[0];
        var cseflags = stanza.getChild('cseflags');
        // Kludge since presence stanzas don't currently set cseflags
        var isCSE = cseflags ? cseflags.attrs.cse : senderName.slice(0, 3) === 'cse';
        var s = new Sender_1.default(0, sender, senderName, isCSE);
        if (stanza.attrs.type === 'unavailable') {
            return new Message_1.default(this._idCounter++, new Date(), '', roomName, messageType_1.default.UNAVAILIBLE, s);
        }
        return new Message_1.default(this._idCounter++, new Date(), '', roomName, messageType_1.default.AVAILIBLE, s);
    };
    return CSEChat;
}();
exports.CSEChat = CSEChat;
exports.default = CSEChat;