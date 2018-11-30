"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var channelId_1 = require("./constants/channelId");
var defaults = {
    // CSE API - for servers ect
    cseApiUrl: 'http://api.citystateentertainment.com',
    cseApiPort: 8001,
    // GAME API - for server info, this will be merged into the single
    // api source in the future.
    publicApiUrl: 'https://api.camelotunchained.com',
    publicApiPort: 443,
    hatcheryApiUrl: 'https://hatchery.camelotunchained.com',
    hatcheryApiPort: 8000,
    fledglingApiUrl: 'https://fledgling.camelotunchained.com',
    fledglingApiPort: 8000,
    wyrmlingApiUrl: 'https://wyrmling.camelotunchained.com',
    wyrmlingApiPort: 8000,
    // SAMPLE API TOKEN
    // TODO: replace accessToken with API KEY system
    apiToken: '1234567890',
    // Working Channel - defaults to hatchery
    channelId: channelId_1.default.HATCHERY
};
var CoreSettings = /** @class */function () {
    function CoreSettings(channel, token) {
        this.cseApiUrl = defaults.cseApiUrl;
        this.cseApiPort = defaults.cseApiPort;
        this.publicApiUrl = defaults.publicApiUrl;
        this.publicApiPort = defaults.publicApiPort;
        this.hatcheryApiUrl = defaults.hatcheryApiUrl;
        this.hatcheryApiPort = defaults.hatcheryApiPort;
        this.fledglingApiUrl = defaults.fledglingApiUrl;
        this.fledglingApiPort = defaults.fledglingApiPort;
        this.wyrmlingApiUrl = defaults.wyrmlingApiUrl;
        this.wyrmlingApiPort = defaults.wyrmlingApiPort;
        this.apiToken = defaults.apiToken;
        this.channelId = defaults.channelId;
        this.channelId = channel || defaults.channelId;
        this.apiToken = token || defaults.apiToken;
    }
    return CoreSettings;
}();
exports.default = CoreSettings;