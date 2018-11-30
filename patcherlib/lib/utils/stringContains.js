"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var cache = lodash_1.memoize(function (s) {
    return new RegExp('^' + s.replace(/./g, function (x) {
        return (/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/.test(x) ? '\\' + x + '?' : x + '?'
        );
    }) + '$', 'i');
});
exports.default = function (s, pattern) {
    return cache(s).test(pattern);
};