"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var env_1 = require("./env");
var Raven = require("raven-js");
var withDefaults_1 = require("./withDefaults");
exports.defaultWebSocketOptions = {
    url: '/ws',
    protocols: '',
    reconnectInterval: 5000,
    connectTimeout: 2000,
    debug: env_1.getBooleanEnv('CUUI_LIB_DEBUG_WEB_SOCKET', false)
};
var ReconnectingWebSocket = /** @class */function () {
    function ReconnectingWebSocket(options) {
        var _this = this;
        this.onopen = function (event) {};
        this.onclose = function (event) {};
        this.onmessage = function (event) {};
        this.onerror = function (event) {};
        this.send = function (data) {
            if (_this.debug) {
                _this.log("send => " + JSON.stringify(data));
            }
            try {
                _this.socket.send(data);
            } catch (err) {
                _this.error(err);
            }
        };
        this.close = function () {
            if (_this.debug) {
                _this.log('close');
            }
            _this.socket.close();
        };
        this.refresh = function () {
            if (_this.debug) {
                _this.log('refresh');
            }
            _this.socket.close();
            _this.connect();
        };
        this.connect = function () {
            _this.reconnecting = false;
            if (_this.debug) {
                _this.log("connect => url: '" + _this.url + "', protocols: '" + _this.protocols + "'");
            }
            _this.socket = new WebSocket(_this.url, _this.protocols);
            _this.socket.onerror = _this.error;
            _this.socket.onmessage = _this.message;
            _this.socket.onclose = _this.closed;
            _this.socket.onopen = _this.open;
            _this.connectTimeoutHandle = window.setTimeout(function () {
                if (!_this.isOpen) {
                    _this.socket.close();
                    _this.reconnect();
                    _this.error(new Error('Connection Timeout'));
                }
            }, _this.connectTimeoutInterval);
        };
        this.reconnect = function () {
            if (_this.reconnecting) return;
            _this.reconnecting = true;
            if (_this.debug) {
                _this.log('reconnecting');
            }
            _this.socket.close();
            if (_this.reconnectInterval < 0) return;
            setTimeout(function () {
                _this.connect();
            }, _this.reconnectInterval);
        };
        this.message = function (e) {
            if (_this.debug) {
                _this.log("message => " + JSON.stringify(e));
            }
            if (e.data) {
                ++_this.messageCount;
                _this.onmessage(e);
            }
            return false;
        };
        this.error = function (e) {
            Raven.captureException(e);
            if (_this.debug) {
                _this.log("error => " + JSON.stringify(e));
            }
            if (!e) return;
            switch (e.code) {
                case 'ECONNREFUSED':
                    _this.reconnect();
                    break;
                default:
                    _this.onerror(e);
                    break;
            }
        };
        this.open = function (e) {
            if (_this.debug) {
                _this.log('connection open');
            }
            clearTimeout(_this.connectTimeoutHandle);
            _this.onopen(e);
        };
        this.closed = function (e) {
            if (_this.debug) {
                _this.log('connection closed');
            }
            _this.reconnect();
            _this.onclose(e);
        };
        this.log = function (message) {
            console.log("ReconnectingWebSocket | " + message);
        };
        if (options && options.debug) {
            this.log("constructor => " + (options && JSON.stringify(options)));
        }
        var opts = withDefaults_1.withDefaults(options, exports.defaultWebSocketOptions);
        this.url = opts.url;
        this.protocols = opts.protocols;
        this.connectTimeoutInterval = opts.connectTimeout;
        this.reconnectInterval = opts.reconnectInterval;
        this.debug = opts.debug;
        this.connect();
    }
    Object.defineProperty(ReconnectingWebSocket.prototype, "isOpen", {
        get: function get() {
            return this.socket && this.socket.readyState === WebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        get: function get() {
            return this.socket ? this.socket.readyState : WebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    return ReconnectingWebSocket;
}();
exports.ReconnectingWebSocket = ReconnectingWebSocket;