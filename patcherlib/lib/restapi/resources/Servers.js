"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var RestClient = require("./../RestClient");
// All Servers
function getServers() {
    return RestClient.getJSON('/servers');
}
exports.getServers = getServers;
// Servers By Channel
function getServersByChannel(channelId) {
    return RestClient.getJSON("/servers/" + channelId);
}
exports.getServersByChannel = getServersByChannel;