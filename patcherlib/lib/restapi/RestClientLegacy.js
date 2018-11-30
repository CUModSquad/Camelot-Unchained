"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-fetch");
var CoreSettings_1 = require("../core/CoreSettings");
var client_1 = require("../core/client");
var EventEmitter_1 = require("../events/EventEmitter");
var RestUtil = require("./RestUtil");
// TODO remove this when the API's are updated
// TODO: I wanted this to extend CoreSettings but CoreSettings
// won't allow super to access its members, or pass anything
// but a default CoreSettings object to its constructor, so
// you can't customize the settings at all (e.g. like define
// the api key or current channel)
var Settings = /** @class */function () {
    function Settings(channel) {
        this.core = new CoreSettings_1.default(); // TODO: This class is a bit weird
        this.channelId = channel;
        this.timeout = 2000; // default timeout
        var host = client_1.default.webAPIHost;
        var isLocalhost = host === 'localhost';
        var protocol = isLocalhost ? 'http' : 'https';
        this.port = protocol === 'https' ? 4443 : 8000;
        this.url = host;
    }
    Settings.prototype.getApiKey = function () {
        if (!this.apiKey) {
            this.apiKey = client_1.default.ACCESS_TOKEN_PREFIX + " " + client_1.default.accessToken; // in fake API will prompt for token
        }
        return this.apiKey;
    };
    return Settings;
}();
// default to Hatchery
var settings = new Settings(4);
if (client_1.hasClientAPI()) {
    EventEmitter_1.emitter.on('init', function () {
        settings = new Settings(client_1.default.patchResourceChannel);
    });
}
function makeAPIUrl(endpoint, useHttps) {
    if (endpoint.indexOf('://') !== -1) return endpoint; // we already have a fully formed url, skip
    var protocol = settings.url === 'localhost' ? 'http' : 'https';
    var port = settings.url === 'localhost' ? '8000' : '4443';
    return protocol + '://' + settings.url + ':' + port + '/api/' + endpoint.replace(/^\//, '');
}
function getJSON(endpoint, useHttps, query) {
    if (useHttps === void 0) {
        useHttps = false;
    }
    if (query === void 0) {
        query = {};
    }
    return fetch(RestUtil.makeQueryString(makeAPIUrl(endpoint, useHttps), query)).then(RestUtil.checkStatus).then(RestUtil.parseJSON);
}
exports.getJSON = getJSON;
// old API requires accessToken to be in the data object
function postJSON(endpoint, useHttps, requireAuth, data, version) {
    if (useHttps === void 0) {
        useHttps = false;
    }
    if (requireAuth === void 0) {
        requireAuth = false;
    }
    if (data === void 0) {
        data = {};
    }
    if (version === void 0) {
        version = 1;
    }
    return fetch(makeAPIUrl(endpoint, useHttps), {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-version': "" + version,
            Authorization: client_1.default.ACCESS_TOKEN_PREFIX + " " + client_1.default.accessToken
        },
        body: JSON.stringify(data)
    }).then(RestUtil.checkStatus).then(RestUtil.parseJSON);
}
exports.postJSON = postJSON;