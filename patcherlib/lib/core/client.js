"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var devClientInterface_1 = require("./devClientInterface");
var lodash_1 = require("lodash");
var client = window.cuAPI;
/**
 * Check if we have the client API object, this will be true when running within the CU game client, false otherwise.
 */
function hasClientAPI() {
    return window.opener && window.opener.cuAPI || window.cuAPI;
}
exports.hasClientAPI = hasClientAPI;
if (window.opener && window.opener.cuAPI) {
    // bind the alias to parent (as this instance will only have basic cuAPI functions)
    client = window.opener.cuAPI;
} else if (window.cuAPI) {
    Object.keys(devClientInterface_1.default).forEach(function (key) {
        if (window.cuAPI[key]) return;
        window.cuAPI[key] = devClientInterface_1.default[key];
        return;
    });
    client = window.cuAPI;
    // not a popout, so use existing cuAPI
} else {
    // create a mock cuAPI to return
    client = devClientInterface_1.default;
}
if (!client.apiVersion) client.apiVersion = 1;
if (!client.shardID) client.shardID = 1;
if (!client.characterID) client.characterID = 'Q3jItAvTU93AzbMFcCL200';
client.signalRHost = client.apiHost + "/signalr";
client.ACCESS_TOKEN_PREFIX = 'Bearer';
if (window.patcherAPI) {
    client = lodash_1.merge(client, window.patcherAPI);
}
if (window.cuOverrides) {
    client = lodash_1.merge(client, window.cuOverrides);
}
exports.default = client;