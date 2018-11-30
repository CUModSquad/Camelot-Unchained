"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

Object.defineProperty(exports, "__esModule", { value: true });
// This function will capitalize the beginning of each word and put a space between them.
// Ex.) forearmLeft -> Forearm Left
exports.toTitleCase = function (text) {
    if (text) return text.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase();
    });
};
exports.toSentenceCase = function (text) {
    if (text) return text.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, function (str) {
        return str.toUpperCase();
    });
};