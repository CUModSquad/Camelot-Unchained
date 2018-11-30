"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var RestClientLegacy = require("./../RestClientLegacy");
var RestClient = require("./../RestClient");
var client_1 = require("../../core/client");
function getBlueprintIcon(id) {
    return RestClient.getJSON('cuapi://buildingicons/blueprint/' + id);
}
exports.getBlueprintIcon = getBlueprintIcon;
function getBlueprints(charId) {
    return RestClientLegacy.getJSON('blueprint', true, {
        characterID: charId,
        Authorization: client_1.default.ACCESS_TOKEN_PREFIX + " " + client_1.default.accessToken
    });
}
exports.getBlueprints = getBlueprints;
function addBlueprint(charId, name, data) {
    return RestClientLegacy.getJSON('blueprint/add', true, {
        characterID: charId,
        Authorization: client_1.default.ACCESS_TOKEN_PREFIX + " " + client_1.default.accessToken,
        newBlueprintName: name,
        newBlueprintData: data
    });
}
exports.addBlueprint = addBlueprint;