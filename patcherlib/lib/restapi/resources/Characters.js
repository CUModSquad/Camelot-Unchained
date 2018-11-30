"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var RestClient = require("./../RestClient");
// Get Characters
function getCharacters() {
    return RestClient.getJSON('/characters', true);
}
exports.getCharacters = getCharacters;
// Get Characters On Shard
function getCharactersOnShard(shardID) {
    if (shardID === void 0) {
        shardID = 1;
    }
    return RestClient.getJSON("/characters/" + shardID, true);
}
exports.getCharactersOnShard = getCharactersOnShard;
// Get Character On Shard
function getCharacterOnShard(shardID, characterID) {
    return RestClient.getJSON("/characters/" + shardID + "/" + characterID, true);
}
exports.getCharacterOnShard = getCharacterOnShard;
// Delete Character On Shard
function deleteCharacterOnShard(shardID, characterID) {
    return RestClient.deleteJSON("/characters/" + shardID + "/" + characterID, true);
}
exports.deleteCharacterOnShard = deleteCharacterOnShard;
// Create a Character
function createCharacter(shardID, channelId, data) {
    return RestClient.postJSON("/characters/" + shardID + "/" + channelId, true, data)
    // API is returing the full URL get getCharacterOnShard with the ID, we will strip out the ID and return it
    .then(function (path) {
        return path.split('/').pop();
    });
}
exports.createCharacter = createCharacter;