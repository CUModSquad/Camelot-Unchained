"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
function getEnv(key, defaultValue) {
    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && _typeof(process.env) === 'object' && _typeof(process.env[key]) !== undefined) {
        return process.env[key];
    }
    return defaultValue;
}
exports.getEnv = getEnv;
function getBooleanEnv(key, defaultValue) {
    var env = getEnv(key, defaultValue);
    if (typeof env === 'string') {
        var lowercaseEnv = env.toLowerCase();
        if (lowercaseEnv === '1' || lowercaseEnv === 'true' || lowercaseEnv === 'yes' || lowercaseEnv === 'y') {
            env = true;
        } else {
            env = false;
        }
    } else if (typeof env === 'number') {
        if (env === 1) {
            env = true;
        } else {
            env = false;
        }
    } else if (typeof env !== 'boolean') {
        env = defaultValue;
    }
    return env;
}
exports.getBooleanEnv = getBooleanEnv;