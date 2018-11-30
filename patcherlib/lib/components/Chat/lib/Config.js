"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */function () {
    function Config(username, password, nick, address, port, endpoint, resource, service) {
        if (nick === void 0) {
            nick = '';
        }
        if (address === void 0) {
            address = 'chat.camelotunchained.com';
        }
        if (port === void 0) {
            port = 8222;
        }
        if (endpoint === void 0) {
            endpoint = '/api/chat';
        }
        if (resource === void 0) {
            resource = undefined;
        }
        if (service === void 0) {
            service = 'conference';
        }
        this.address = address;
        this.username = username;
        this.password = password;
        this.resource = resource;
        this.service = service;
        this.nick = nick;
        this.port = port;
        this.endpoint = endpoint;
        this.resource = resource;
        this.service = service;
    }
    Config.prototype.init = function () {
        if (!this.serviceAddress) {
            this.serviceAddress = '@' + this.service + '.' + this.address;
            this.websocketUrl = 'ws://' + this.address + ':' + this.port + this.endpoint;
        }
    };
    Config.prototype.getPassword = function () {
        if (typeof this.password === 'function') {
            this.password = this.password();
        }
        return this.password;
    };
    return Config;
}();
exports.default = Config;