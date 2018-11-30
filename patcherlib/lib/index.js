"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
// core
var CoreSettings_1 = require("./core/CoreSettings");
exports.CoreSettings = CoreSettings_1.default;
var client_1 = require("./core/client");
exports.client = client_1.default;
// constants
var abilityTags_1 = require("./core/constants/abilityConstants/abilityTags");
exports.abilityTags = abilityTags_1.default;
var buildUIMode_1 = require("./core/constants/buildUIMode");
exports.buildUIMode = buildUIMode_1.default;
var channelId_1 = require("./core/constants/channelId");
exports.channelId = channelId_1.default;
var emotes_1 = require("./core/constants/emotes");
exports.emotes = emotes_1.default;
var soundEvents_1 = require("./core/constants/soundEvents");
exports.soundEvents = soundEvents_1.default;
var tagConstraintType_1 = require("./core/constants/tagConstraintType");
exports.tagConstraintType = tagConstraintType_1.default;
var gearSlot_1 = require("./core/constants/gearSlot");
exports.gearSlot = gearSlot_1.default;
var plotPermissions_1 = require("./core/constants/plotPermissions");
exports.plotPermissions = plotPermissions_1.default;
var attributeType_1 = require("./core/constants/attributeType");
exports.attributeType = attributeType_1.default;
var warbandRoles_1 = require("./core/constants/warbandRoles");
exports.warbandRoles = warbandRoles_1.default;
var warbandRanks_1 = require("./core/constants/warbandRanks");
exports.warbandRanks = warbandRanks_1.default;
var warbandPermissions_1 = require("./core/constants/warbandPermissions");
exports.warbandPermissions = warbandPermissions_1.default;
// libraries
var core = require("./core/core");
exports.core = core;
__export(require("./core/core"));
var webAPI = require("./webAPI");
exports.webAPI = webAPI;
var restAPI = require("./restapi");
exports.restAPI = restAPI;
__export(require("./webAPI/definitions"));
__export(require("./groups"));
__export(require("./building"));
var events = require("./events");
exports.events = events;
var signalr = require("./signalR");
exports.signalr = signalr;
__export(require("./slashCommands"));
var slashCommandsExports = require("./slashCommands");
// utils
var utils = require("./utils");
exports.utils = utils;
// graphql
var ql = require("./graphql");
exports.ql = ql;
// components
var components = require("./components");
__export(require("./components"));
exports.default = __assign({
    // core
    CoreSettings: CoreSettings_1.default,
    client: client_1.default,
    // core constants - #TODO: remove these (shouldn't be using them)
    abilityTags: abilityTags_1.default,
    buildUIMode: buildUIMode_1.default,
    channelId: channelId_1.default,
    emotes: emotes_1.default,
    soundEvents: soundEvents_1.default,
    tagConstraintType: tagConstraintType_1.default,
    gearSlot: gearSlot_1.default,
    plotPermissions: plotPermissions_1.default,
    attributeType: attributeType_1.default,
    warbandRoles: warbandRoles_1.default,
    warbandRanks: warbandRanks_1.default,
    warbandPermissions: warbandPermissions_1.default,
    components: components }, slashCommandsExports);