"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
function stricmp(a, b) {
    var normalizedA = a.toLowerCase();
    var normalizedB = b.toLowerCase();
    return normalizedA < normalizedB ? -1 : normalizedB > normalizedA ? 1 : 0;
}
exports.stricmp = stricmp;
function datecmp(a, b) {
    var da = new Date(a);
    var db = new Date(b);
    return da < db ? -1 : da > db ? 1 : 0;
}
exports.datecmp = datecmp;