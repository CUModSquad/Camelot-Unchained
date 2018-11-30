"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var RestClientLegacy = require("./../RestClientLegacy");
// Control Game
function getControlGame(includeControlPoints) {
    if (includeControlPoints === void 0) {
        includeControlPoints = false;
    }
    return RestClientLegacy.getJSON('game/controlgame', false, { includeControlPoints: includeControlPoints });
}
exports.getControlGame = getControlGame;
// Spawn Points
function getSpawnPoints() {
    return RestClientLegacy.getJSON('game/spawnpoints');
}
exports.getSpawnPoints = getSpawnPoints;