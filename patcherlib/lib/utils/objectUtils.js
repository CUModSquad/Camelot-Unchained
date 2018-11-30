"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
function clone(obj) {
    return Object.assign({}, obj);
}
exports.clone = clone;
function merge(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return Object.assign.apply(Object, [{}, obj].concat(args));
}
exports.merge = merge;
function tryParseJSON(json, logError) {
    if (logError === void 0) {
        logError = false;
    }
    try {
        return JSON.parse(json);
    } catch (e) {
        if (logError) console.error("Failed to parse json. | " + json);
        return null;
    }
}
exports.tryParseJSON = tryParseJSON;
window.clone = function (source) {
    if (Array.isArray(source)) {
        return source.slice();
    }
    if (source !== null && (typeof source === "undefined" ? "undefined" : _typeof(source)) === 'object') {
        return Object.assign({}, source);
    }
    return source;
};
window.cloneDeep = function (source) {
    if (source == null || (typeof source === "undefined" ? "undefined" : _typeof(source)) !== 'object') {
        return source; // Not a reference
    }
    // extra length and slice check for coherent arrays which return false for
    // instanceof Array
    if (source instanceof Array || 'length' in source && 'slice' in source) {
        return source.slice().map(function (e) {
            return cloneDeep(e);
        });
    }
    if (source instanceof Date) {
        var date = new Date();
        date.setTime(source.getTime());
        return date;
    }
    if (source instanceof Function) {
        var fn = function fn() {
            return source.apply(this, arguments);
        };
        return fn;
    }
    if (source instanceof Object) {
        var copy_1 = {};
        var keys = Object.keys(source);
        keys.forEach(function (key) {
            copy_1[key] = cloneDeep(source[key]);
        });
        return copy_1;
    }
    throw new Error("Unable to clone source. Unsupported type " + source);
};
window.merge = function (source) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return Object.assign.apply(Object, [{}, source].concat(args));
};
window.tryParseJSON = function (json, logError) {
    if (logError === void 0) {
        logError = false;
    }
    try {
        return JSON.parse(json);
    } catch (e) {
        if (logError) console.error("Failed to parse json. | " + json);
        return null;
    }
};