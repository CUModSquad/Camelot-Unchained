"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../core/client");
exports.defaultConfig = function () {
    return {
        url: client_1.default.apiHost + '/',
        headers: {
            Authorization: client_1.default.ACCESS_TOKEN_PREFIX + " " + client_1.default.accessToken
        }
    };
};