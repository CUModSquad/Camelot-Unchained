"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var ReconnectingWebSocket_1 = require("../utils/ReconnectingWebSocket");
var env_1 = require("../utils/env");
var client_1 = require("../core/client");
var withDefaults_1 = require("../utils/withDefaults");
// issues with graphql .mjs file usage
// tslint:disable-next-line
var print = require('graphql/language/printer.js').print;
var subscriptionUrl = (client_1.default.webAPIHost + "/graphql").replace(/(http)(s?:\/\/)/, 'ws$2');
var subscriptionInitPayload = {
    shardID: client_1.default.shardID,
    token: client_1.default.accessToken,
    characterID: client_1.default.characterID
};
exports.defaultSubscriptionOpts = {
    url: subscriptionUrl,
    protocols: 'graphql-ws',
    reconnectInterval: 1000,
    connectTimeout: 2000,
    initPayload: subscriptionInitPayload,
    debug: env_1.getBooleanEnv('CUUI_LIB_DEBUG_GRAPHQL_SUBSCRIPTION', false),
    onDataReceived: function onDataReceived(data) {
        return console.log(data);
    },
    onError: function onError(e) {
        return console.error(e);
    },
    onClosed: function onClosed() {
        return null;
    }
};
// Follows Apollo GraphQL Protocol -- https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md
// Game -> Server
var GQL_CONNECTION_INIT = 'connection_init';
var GQL_START = 'start';
var GQL_STOP = 'stop';
var GQL_CONNECTION_TERMINATE = 'connection_terminate';
// Server -> Game
var GQL_CONNECTION_ACK = 'connection_ack';
var GQL_CONNECTION_ERROR = 'connection_error';
// NOTE: The keep alive message type does not follow the standard due to connection optimizations
var GQL_CONNECTION_KEEP_ALIVE = 'ka';
var GQL_DATA = 'data';
var GQL_ERROR = 'error';
var GQL_COMPLETE = 'complete';
exports.defaultSubscription = {
    operationName: null,
    query: '{}',
    variables: null
};
function getFrameIdentifier(frame) {
    var _a = typeof frame === 'string' ? JSON.parse(frame) : frame,
        id = _a.id,
        type = _a.type,
        payload = _a.payload;
    var operationName = payload && payload.operationName;
    if (operationName) {
        return "" + type + operationName;
    }
    return "" + type + id;
}
var SubscriptionManager = /** @class */function () {
    function SubscriptionManager(options) {
        var _this = this;
        this.idCounter = 0;
        this.subscriptions = {};
        this.debug = false;
        this.messageQueue = [];
        this.subscribe = function (subscription, onData, onError) {
            var id = _this.idCounter++ + '';
            var payload;
            if (typeof subscription === 'string' || subscription.hasOwnProperty('loc')) {
                payload = { query: subscription };
            } else {
                payload = subscription;
            }
            if (_typeof(payload.query) === 'object' && (payload.query.hasOwnProperty('loc') || payload.query.hasOwnProperty('definitions'))) {
                payload.query = print(payload.query);
            }
            var start = {
                payload: payload,
                id: id,
                type: GQL_START
            };
            if (_this.debug) {
                _this.log("subscribe => " + JSON.stringify(start));
            }
            _this.subscriptions[id] = {
                id: id,
                start: start,
                onData: onData,
                onError: onError
            };
            _this.send(start);
            return id;
        };
        this.stop = function (id) {
            if (_this.debug) {
                _this.log("stop => " + id);
            }
            if (_this.subscriptions[id]) {
                delete _this.subscriptions[id];
            }
            _this.send({
                id: id,
                type: GQL_STOP
            });
        };
        this.init = function () {
            if (_this.debug) {
                _this.log('init');
            }
            _this.socket.send(JSON.stringify({
                type: GQL_CONNECTION_INIT,
                payload: _this.initPayload
            }));
            if (_this.messageQueue.length > 0) {
                _this.messageQueue.forEach(function (m) {
                    return _this.socket.send(m);
                });
                _this.messageQueue = [];
            }
        };
        this.messageHandler = function (e) {
            var op = JSON.parse(e.data);
            if (_this.debug) {
                _this.log("messageHandler => op message: " + JSON.stringify(op));
            }
            switch (op.type) {
                case GQL_CONNECTION_ACK:
                    {
                        // Use lodash for version
                        _.values(_this.subscriptions).forEach(function (s) {
                            // Check to see if the message has already been added to the messageQueue
                            var inMessageQueue = _.findIndex(_this.messageQueue, function (message) {
                                var messageIdentifier = getFrameIdentifier(message);
                                return getFrameIdentifier(message) === getFrameIdentifier(s.start);
                            }) !== -1;
                            if (!inMessageQueue) {
                                _this.send(s.start);
                            }
                        });
                        break;
                    }
                case GQL_DATA:
                    {
                        var subscription = _this.subscriptions[op.id];
                        if (subscription && subscription.onData) {
                            var data = null;
                            try {
                                data = JSON.parse(op.payload.data).data;
                            } catch (e) {
                                console.error('GraphQL Subscription Parse Error', e);
                            }
                            var result = {
                                data: data,
                                ok: op.payload.errors === null,
                                errors: op.payload.errors
                            };
                            subscription.onData(result);
                        }
                        break;
                    }
                case GQL_CONNECTION_KEEP_ALIVE:
                    {
                        clearTimeout(_this.keepAliveTimeoutHandler);
                        _this.keepAliveTimeoutHandler = window.setTimeout(function () {
                            _this.socket.refresh();
                        }, 5000);
                        _this.send({
                            type: GQL_CONNECTION_KEEP_ALIVE
                        });
                        break;
                    }
                case GQL_CONNECTION_ERROR:
                    {
                        _this.errorHandler(new ErrorEvent('GQL_CONNECTION_ERROR', {
                            error: new Error('GQL_CONNECTION_ERROR'),
                            message: JSON.stringify(op.payload)
                        }));
                        break;
                    }
                case GQL_COMPLETE:
                    {
                        var subscription = _this.subscriptions[op.id];
                        if (subscription) {
                            if (subscription.onError) {
                                var message = "SubscriptionManager | GQL_COMPLETE received for id " + op.id + " without acknowledged stop request";
                                subscription.onError(new ErrorEvent('GQL_COMPLETE', {
                                    message: message,
                                    error: new Error(message)
                                }));
                            }
                            delete _this.subscriptions[op.id];
                        }
                        break;
                    }
                case GQL_ERROR:
                    {
                        var subscription = _this.subscriptions[op.id];
                        if (subscription && subscription[op.id].onError) {
                            subscription[op.id].onError(new ErrorEvent('GQL_ERROR', {
                                error: new Error(op.payload),
                                message: op.payload
                            }));
                        }
                        break;
                    }
            }
        };
        this.errorHandler = function (e) {
            console.error(e);
        };
        this.send = function (op) {
            if (_this.debug) {
                _this.log("send => op message: " + JSON.stringify(op));
            }
            if (_this.socket.isOpen) {
                _this.socket.send(JSON.stringify(op));
            } else {
                _this.messageQueue.push(JSON.stringify(op));
                if (_this.debug) {
                    _this.log('op message queued due to socket not open');
                }
            }
        };
        this.log = function () {
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i] = arguments[_i];
            }
            console.log.apply(console, ["SubscriptionManager"].concat(data));
        };
        this.debug = options.debug || false;
        if (this.debug) {
            this.log("initiating web socket connection on " + options.url + " with protocols '" + options.protocols + "'");
        }
        var opts = withDefaults_1.withDefaults(options, exports.defaultSubscriptionOpts);
        this.socket = new ReconnectingWebSocket_1.ReconnectingWebSocket(opts);
        this.socket.onopen = this.init;
        this.socket.onmessage = this.messageHandler;
        this.socket.onerror = this.errorHandler;
        this.initPayload = opts.initPayload;
    }
    return SubscriptionManager;
}();
exports.SubscriptionManager = SubscriptionManager;
// GLOBAL SINGLE INSTANCE
var subscriptionManager = null;
function subscribe(subscription, onData, options, onError) {
    if (!window.WebSocket) {
        throw new Error('WebSockets not supported by this browser');
    }
    subscriptionManager = new SubscriptionManager(options);
    return {
        id: subscriptionManager.subscribe(subscription, onData, onError),
        subscriptions: subscriptionManager
    };
}
exports.subscribe = subscribe;