"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var Raven = require("raven-js");
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    var error = new Error(response.statusText);
    error.response = response;
    Raven.captureException(error);
    throw error;
}
exports.checkStatus = checkStatus;
function parseJSON(response) {
    return response.json();
}
exports.parseJSON = parseJSON;
function makeQueryString(url, params) {
    if (params === void 0) {
        params = {};
    }
    if (!params) return url;
    // tslint:disable-next-line
    var key;
    var qs = [];
    for (key in params) {
        if (params.hasOwnProperty(key)) {
            qs.push(key + '=' + encodeURIComponent(params[key]));
        }
    }
    var modifiedUrl = url;
    if (qs.length) {
        modifiedUrl += '?' + qs.join('&');
    }
    return modifiedUrl;
}
exports.makeQueryString = makeQueryString;