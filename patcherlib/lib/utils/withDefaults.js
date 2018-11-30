"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
function withDefaults(a, defaults, createNew) {
    if (createNew === void 0) {
        createNew = true;
    }
    if (!a) return defaults;
    var result = createNew || a === null || typeof a === 'undefined' ? {} : a;
    if (createNew) {
        for (var key in a) {
            result[key] = a[key];
        }
    }
    for (var key in defaults) {
        if (typeof result[key] === 'undefined') {
            result[key] = defaults[key];
        }
    }
    return result;
}
exports.withDefaults = withDefaults;
function toDefault(original, defaults) {
    for (var key in defaults) {
        original[key] = defaults[key];
    }
    return original;
}
exports.toDefault = toDefault;