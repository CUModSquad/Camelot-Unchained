"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
var RestClientLegacy = require("./RestClientLegacy");
var RestClient = require("./RestClient");
function getMessageOfTheDay() {
    return RestClient.getJSON('messageoftheday');
}
exports.getMessageOfTheDay = getMessageOfTheDay;
// TODO update this to use new Rest Client
function getCraftedAbilities(accessToken, characterID) {
    return RestClientLegacy.getJSON('craftedabilities', true, {
        Authorization: accessToken,
        characterID: characterID
    });
}
exports.getCraftedAbilities = getCraftedAbilities;
// TODO update this to use new Rest Client
function getControlGame(includeControlPoints) {
    if (includeControlPoints === void 0) {
        includeControlPoints = false;
    }
    return RestClientLegacy.getJSON('game/controlgame', false, { includeControlPoints: includeControlPoints });
}
exports.getControlGame = getControlGame;
// TODO update this to use new Rest Client
function getAllPlayers() {
    return RestClientLegacy.getJSON('game/players');
}
exports.getAllPlayers = getAllPlayers;
// TODO update this to use new Rest Client
function postPlotPermissions(query) {
    return RestClientLegacy.postJSON('plot/modifypermissions', true, false, query);
}
exports.postPlotPermissions = postPlotPermissions;
// Control Game
__export(require("./resources/ControlGame"));
// TODO update this to use new Rest Client
function postReleasePlot(query) {
    return RestClientLegacy.postJSON('plot/releaseplot', true, false, query);
}
exports.postReleasePlot = postReleasePlot;
function postRemoveQueuedBlueprint(query) {
    return RestClientLegacy.postJSON('plot/removequeuedblueprint', true, false, query);
}
exports.postRemoveQueuedBlueprint = postRemoveQueuedBlueprint;
function postReorderBuildQueue(query) {
    return RestClientLegacy.postJSON('plot/reorderqueue', true, false, query);
}
exports.postReorderBuildQueue = postReorderBuildQueue;
function postGetQueueStatus(query) {
    return RestClientLegacy.postJSON('plot/getqueuestatus', true, false, query);
}
exports.postGetQueueStatus = postGetQueueStatus;
// Blueprints
__export(require("./resources/Blueprints"));
// Game Data
__export(require("./resources/GameData"));
// Servers
__export(require("./resources/Servers"));
// Characters
__export(require("./resources/Characters"));