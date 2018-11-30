"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var internalId = 0;
function createListener(topic, once, callback) {
    return {
        topic: topic,
        once: once,
        callback: callback,
        id: ++internalId,
        fired: 0,
        last: 0
    };
}
function addListener(em, topic, once, callback) {
    if (once === void 0) {
        once = false;
    }
    var listeners = em._events[topic] = em._events[topic] || [];
    var listener = createListener(topic, once, callback);
    var i = listeners.indexOf(null);
    if (i === -1) {
        em._listenersById[listener.id] = listener;
        listeners.push(listener);
    } else {
        em._listenersById[listener.id] = listener;
        listeners[i] = listener;
    }
    return listener.id;
}
function listenOnce(em, topic, callback) {
    return addListener(em, topic, true, callback);
}
function removeListener(em, handle) {
    var listener = em._listenersById[handle];
    if (!listener) return;
    var listeners = em._events[listener.topic];
    if (listeners && listeners.length) {
        for (var i = 0; i < listeners.length; i++) {
            var _listener = listeners[i];
            if (_listener && _listener.id === listener.id) {
                listeners[i] = null;
                break;
            }
        }
        em._events[listener.topic] = listeners;
    }
}
function emit(em, topic) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    var listeners = em._events[topic];
    if (listeners && listeners.length) {
        for (var i = 0; i < listeners.length; i++) {
            if (listeners[i]) {
                var listener = listeners[i];
                if (listener.once) {
                    listeners[i] = null;
                }
                listener.last = Date.now();
                listener.fired++;
                listener.callback.apply(listener, params);
            }
        }
    }
}
function diagnostics(em) {
    for (var key in em._events) {
        if (em._events.hasOwnProperty(key)) {
            var listeners = em._events[key];
            listeners.forEach(function (listener, index) {
                if (listener) {
                    console.log('Event:' + ' topic ' + listener.topic + ' index ' + index + ' ID ' + listener.id + ' once ' + listener.once + ' callback ' + _typeof(listener.callback) + ' fired ' + listener.fired + ' last ' + new Date(listener.last).toISOString());
                } else {
                    console.log('Event: Index ' + index + ' is free (null)');
                }
            });
        }
    }
}
function createEventEmitter() {
    var emitter = {
        _events: {},
        _listenersById: {}
    };
    emitter.addListener = function (topic, once, callback) {
        return addListener(emitter, topic, once, callback);
    }, emitter.on = function (topic, callback) {
        return addListener(emitter, topic, false, callback);
    }, emitter.listenOnce = function (topic, callback) {
        return listenOnce(emitter, topic, callback);
    };
    emitter.removeListener = function (handle) {
        return removeListener(emitter, handle);
    };
    emitter.emit = function (topic) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return emit.apply(void 0, [emitter, topic].concat(params));
    };
    emitter.diagnostics = function () {
        return diagnostics(emitter);
    };
    return emitter;
}
exports.createEventEmitter = createEventEmitter;
// Ensure there is only 1 default emitter no matter how this file is included
var w = window;
if (!w.cse_defaultEventEmitter) {
    window.cse_defaultEventEmitter = createEventEmitter();
}
exports.emitter = window.cse_defaultEventEmitter;