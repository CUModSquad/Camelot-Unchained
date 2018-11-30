"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var events = require("../events");
var client_1 = require("../core/client");
var eventMapper_1 = require("../utils/eventMapper");
var Raven = require("raven-js");
function signalRToEvents(receive, send, hub, hubName, debug) {
    if (!hub) return;
    hub.on(receive, function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        events.fire.apply(events, [send].concat(params));
    });
}
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["Connecting"] = 0] = "Connecting";
    ConnectionState[ConnectionState["Connected"] = 1] = "Connected";
    ConnectionState[ConnectionState["Reconnecting"] = 2] = "Reconnecting";
    ConnectionState[ConnectionState["Disconnected"] = 4] = "Disconnected";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var SignalRHub = /** @class */function () {
    function SignalRHub(hubName, eventMaps, options, signalRHost) {
        if (signalRHost === void 0) {
            signalRHost = client_1.default.signalRHost;
        }
        var _this = this;
        this.conn = null;
        this.wantStop = false;
        this.tryingToReconnect = false;
        this.eventHandlers = {};
        this.handlerIDMap = {};
        this.handlerIdGen = 0;
        this.connectionState = ConnectionState.Disconnected;
        this.removeEventHandler = function (id) {
            var event = _this.handlerIDMap[id];
            if (_this.debug) console.log("SignalRHub [" + _this.hubName + "] | removeEventHandler(id: '" + id + "') [" + event + "]");
            if (!event) return;
            var handlers = _this.eventHandlers[event];
            _this.eventHandlers[event] = handlers.filter(function (h) {
                return h.id !== id;
            });
            delete _this.handlerIDMap[id];
        };
        this.start = function (shouldReconnect, options) {
            if (shouldReconnect === void 0) {
                shouldReconnect = true;
            }
            return new Promise(function (resolve) {
                if (_this.conn !== null) {
                    resolve(_this);
                    return;
                }
                if (options) {
                    if (options.host) {
                        _this.signalRHost = options.host;
                    }
                }
                _this.conn = $.hubConnection();
                _this.conn.url = _this.signalRHost;
                _this.hub = _this.conn.createHubProxy(_this.hubName);
                // hook up lifetime events
                _this.conn.starting(_this.internalOnStarting);
                _this.conn.received(_this.internalOnReceived);
                _this.conn.connectionSlow(_this.internalOnConnectionSlow);
                _this.conn.reconnecting(_this.internalOnReconnecting);
                _this.conn.reconnected(_this.internalOnReconnected);
                _this.conn.stateChanged(_this.internalOnStateChanged);
                _this.conn.disconnected(function () {
                    return _this.internalOnDisconnected(resolve, shouldReconnect);
                });
                // hoook up error handler
                _this.conn.error(_this.internalOnError);
                if (client_1.default.debug) {
                    _this.conn.logging = true;
                }
                _this.registerEvents();
                _this.conn.start().done(function () {
                    resolve(_this);
                });
            });
        };
        this.stop = function () {
            _this.conn.stop();
        };
        this.invoke = function (method) {
            var _a;
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return (_a = _this.hub).invoke.apply(_a, [method].concat(params));
        };
        ////////////////////////////////////
        // lifetime events
        ////////////////////////////////////
        this.fireEvent = function (event) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            if (_this.debug) console.log("SignalRHub [" + _this.hubName + "] | fireEvent(event: '" + event + "')");
            var handlers = _this.eventHandlers[event];
            if (handlers) {
                handlers.forEach(function (h) {
                    return h.callback.apply(h, [_this].concat(params));
                });
            }
        };
        // Raised before any data is sent over the connection
        this.internalOnStarting = function () {
            _this.fireEvent('starting');
        };
        // Raised when any data is received on the connection. Provides the received data
        this.internalOnReceived = function (data) {
            _this.fireEvent('received', data);
        };
        // Raised when the client detecs a slow or frequently dropping connection
        this.internalOnConnectionSlow = function () {
            _this.fireEvent('connectionslow');
        };
        // Raised when the underlying transport begins reconnecting
        this.internalOnReconnecting = function () {
            _this.fireEvent('reconnecting');
        };
        // Raised when the underlying transport has reconnected
        this.internalOnReconnected = function () {
            _this.fireEvent('reconnected');
        };
        // Raised when the connection state changes. Provides the old state and the new state
        // (Connecting, Connected, Reconnecting, or Disconnect)
        this.internalOnStateChanged = function (state) {
            _this.connectionState = state.newState;
            if (state.newState === ConnectionState.Connected) {
                _this.fireEvent('connected');
            }
            _this.fireEvent('statechanged', state);
        };
        // Raised when the connection has disconnected
        this.internalOnDisconnected = function (resolve, shouldReconnect) {
            _this.conn = null;
            resolve(null);
            // try to reconnect again in 15 seconds.
            if (shouldReconnect) {
                setTimeout(function () {
                    _this.start();
                }, 15000);
            }
            _this.fireEvent('disconnected');
        };
        ////////////////////////////////////
        // error handling
        ////////////////////////////////////
        this.internalOnError = function (error) {
            Raven.captureMessage("Signalr Error: " + error);
            _this.fireEvent('error', error);
        };
        ////////////////////////////////////
        // map to event emitters
        ////////////////////////////////////
        this.registerEvents = function () {
            eventMapper_1.eventMapper(_this.eventMaps, signalRToEvents, _this.hub, _this.hubName, _this.debug);
        };
        this.unregisterEvents = function () {
            if (_this.hub) {
                _this.eventMaps.map(function (evt) {
                    _this.hub.off(evt.receive);
                });
            }
        };
        this.hubName = hubName;
        this.eventMaps = eventMaps;
        this.signalRHost = signalRHost;
        if (options) {
            this.debug = options.debug || false;
        }
        this.addEventHandler = this.addEventHandler.bind(this);
    }
    Object.defineProperty(SignalRHub.prototype, "onStateChanged", {
        ////////////////////////////////////
        // lifetime events
        ////////////////////////////////////
        set: function set(callback) {
            this.addEventHandler('statechanged', callback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRHub.prototype, "onReceived", {
        set: function set(callback) {
            this.addEventHandler('received', callback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRHub.prototype, "onError", {
        set: function set(callback) {
            this.addEventHandler('error', callback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRHub.prototype, "onConnected", {
        set: function set(callback) {
            this.addEventHandler('connected', callback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRHub.prototype, "onStarting", {
        set: function set(callback) {
            this.addEventHandler('starting', callback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRHub.prototype, "onConnectionSlow", {
        set: function set(callback) {
            this.addEventHandler('connectionslow', callback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRHub.prototype, "onReconnecting", {
        set: function set(callback) {
            this.addEventHandler('reconnecting', callback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRHub.prototype, "onReconnected", {
        set: function set(callback) {
            this.addEventHandler('reconnected', callback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignalRHub.prototype, "onDisconnected", {
        set: function set(callback) {
            this.addEventHandler('disconnected', callback);
        },
        enumerable: true,
        configurable: true
    });
    SignalRHub.prototype.addEventHandler = function (event, callback) {
        if (this.debug) console.log("SignalRHub [" + this.hubName + "] | addEventHandler(event: '" + event + "')");
        var handler = {
            callback: callback,
            id: ++this.handlerIdGen
        };
        if (this.eventHandlers[event]) {
            this.eventHandlers[event].push(handler);
        } else {
            this.eventHandlers[event] = [handler];
        }
        this.handlerIDMap[handler.id] = event;
        // handle event registration after an event has occurred, ie: registering for connected when we're already connected
        // in this case, we register, but also fire off the event now.
        if (event === 'connected' && this.connectionState === ConnectionState.Connected) {
            callback(this);
        }
        return handler.id;
    };
    return SignalRHub;
}();
exports.SignalRHub = SignalRHub;