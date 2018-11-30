"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// Simple LocalStorage Management
var Store = /** @class */function () {
    function Store(prefix) {
        if (prefix === void 0) {
            prefix = '';
        }
        var _this = this;
        this.setPrefix = function (prefix) {
            _this.prefix = prefix;
        };
        this.set = function (key, value) {
            localStorage.setItem(_this.prefixed(key), JSON.stringify(value));
        };
        this.get = function (key) {
            var data = localStorage.getItem(_this.prefixed(key));
            return data && JSON.parse(data) || undefined;
        };
        this.clear = function () {
            if (_this.prefix) {
                Object.keys(localStorage).filter(function (k) {
                    return k.startsWith(_this.prefix);
                }).forEach(function (k) {
                    return localStorage.removeItem(_this.prefixed(k));
                });
            } else {
                localStorage.clear();
            }
        };
        this.prefixed = function (key) {
            return _this.prefix + key;
        };
        this.prefix = prefix;
    }
    return Store;
}();
exports.Store = Store;
exports.default = Store;