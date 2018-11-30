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
var Settings = /** @class */function () {
    function Settings(channel) {
        var _this = this;
        this.core = new CoreSettings_1.default();
        this.timeout = 2000;
        if (client_1.hasClientAPI()) {
            EventEmitter_1.emitter.on('init', function () {
                _this.apiToken = client_1.default.ACCESS_TOKEN_PREFIX + " " + client_1.default.accessToken;
                _this.channelId = client_1.default.patchResourceChannel;
                _this.determineApiDetails();
            });
        } else if ('patcherAPI' in window) {
            // running under the patcher, accessToken is not yet available, so
            // define apiToken as a getter and fetch accessToken when we actually
            // need it.
            var patcherAPI_1 = window.patcherAPI;
            this.url = 'https://api.camelotunchained.com';
            this.port = 443;
            Object.defineProperty(this, 'apiToken', {
                get: function get() {
                    return client_1.default.ACCESS_TOKEN_PREFIX + " " + patcherAPI_1.accessToken;
                }
            });
        }
    }
    Settings.prototype.determineApiDetails = function () {
        // TODO remove this when there are channel based API's
        this.url = this.core.publicApiUrl;
        this.port = this.core.publicApiPort;
        // TODO enable below when there are channel based API's
        // switch (this.channelId) {
        //   case channelId.HATCHERY:
        //     this.url = this.core.hatcheryApiUrl;
        //     this.port = this.core.hatcheryApiPort;
        //     break;
        //   case channelId.WYRMLING:
        //     this.url = this.core.wyrmlingApiUrl;
        //     this.port = this.core.wyrmlingApiPort;
        //     break;
        // }
    };
    return Settings;
}();
// default to Hatchery
var settings = new Settings(4);
function makeAPIUrl(endpoint) {
    if (endpoint.indexOf('://') !== -1) return endpoint; // we already have a fully formed url, skip
    var url = settings.url || 'http://hatchery.camelotunchained.com';
    // only add port if it is required
    if (url.indexOf('https://') === 0 && settings.port !== 443 || url.indexOf('http://') === 0 && settings.port !== 80) {
        url = url + ':' + settings.port;
    }
    return url + '/' + endpoint.replace(/^\//, '');
}
function addDefaultHeaders(headers, requireAuth, version) {
    if (version === void 0) {
        version = 1;
    }
    if (headers.hasOwnProperty('Accept') === false) {
        headers['accept'] = "application/json;version=" + version;
    }
}
function addDefaultQueryParameters(query, requireAuth) {
    if (requireAuth && query.hasOwnProperty('accessToken') === false) {
        query.accessToken = settings.apiToken;
    }
}
function getJSON(endpoint, requireAuth, query, version) {
    if (requireAuth === void 0) {
        requireAuth = false;
    }
    if (query === void 0) {
        query = {};
    }
    if (version === void 0) {
        version = 1;
    }
    var headers = {};
    addDefaultHeaders(headers, requireAuth, version);
    addDefaultQueryParameters(query, requireAuth);
    return fetch(RestUtil.makeQueryString(makeAPIUrl(endpoint), query), {
        headers: headers,
        method: 'get'
    }).then(RestUtil.checkStatus).then(RestUtil.parseJSON);
}
exports.getJSON = getJSON;
function deleteJSON(endpoint, requireAuth, query, version) {
    if (requireAuth === void 0) {
        requireAuth = false;
    }
    if (query === void 0) {
        query = {};
    }
    if (version === void 0) {
        version = 1;
    }
    var headers = {};
    addDefaultHeaders(headers, requireAuth, version);
    addDefaultQueryParameters(query, requireAuth);
    return fetch(RestUtil.makeQueryString(makeAPIUrl(endpoint), query), {
        headers: headers,
        method: 'delete'
    }).then(RestUtil.checkStatus); // no response body for a DELETE
}
exports.deleteJSON = deleteJSON;
function postJSON(endpoint, requireAuth, data, query, version) {
    if (requireAuth === void 0) {
        requireAuth = false;
    }
    if (data === void 0) {
        data = {};
    }
    if (query === void 0) {
        query = {};
    }
    if (version === void 0) {
        version = 1;
    }
    var headers = {
        'Content-Type': 'application/json'
    };
    addDefaultHeaders(headers, requireAuth, version);
    addDefaultQueryParameters(query, requireAuth);
    return fetch(RestUtil.makeQueryString(makeAPIUrl(endpoint), query), {
        headers: headers,
        method: 'post',
        body: JSON.stringify(data)
    }).then(RestUtil.checkStatus).then(RestUtil.parseJSON);
}
exports.postJSON = postJSON;