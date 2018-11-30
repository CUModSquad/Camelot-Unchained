"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var client_1 = require("../client");
var debug;
if (client_1.default) {
    debug = client_1.default.debug;
} else if (window.patcherAPI) {
    debug = window.patcherAPI.debug;
} else {
    debug = true;
}
// tslint:disable-next-line
function DEBUG_ASSERT(test, reason) {
    if (!test && debug) {
        throw new Error('DEBUG_ASSERT: ' + reason);
    }
}
exports.DEBUG_ASSERT = DEBUG_ASSERT;
// tslint:disable-next-line
function RUNTIME_ASSERT(test, reason) {
    if (!test) {
        throw new Error('RUNTIME_ASSERT: ' + reason);
    }
}
exports.RUNTIME_ASSERT = RUNTIME_ASSERT;