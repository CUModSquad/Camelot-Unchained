"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var RestClient = require("./../RestClient");
// Faction Names
function getFactionNames() {
    return RestClient.getJSON('/gamedata/factionnames');
}
exports.getFactionNames = getFactionNames;
// Archetypes
function getArchetypes() {
    return RestClient.getJSON('/gamedata/archetypes');
}
exports.getArchetypes = getArchetypes;
// Attributes
function getAttributes() {
    return RestClient.getJSON('/gamedata/attributes');
}
exports.getAttributes = getAttributes;