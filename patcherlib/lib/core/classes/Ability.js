"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// import * as Rest from '../util/RestAPI';
var RestAPI_1 = require("../../restapi/RestAPI");
var Ability = /** @class */function () {
    function Ability(ability) {
        if (ability === void 0) {
            ability = {};
        }
        this.cooldowns = [];
        this.buttons = [];
        this.awaitingUpdate = null;
        this.id = ability.id || '';
        this.icon = ability.icon || '';
        this.cooldowns = ability.cooldowns || [];
        this.duration = ability.duration || 0;
        this.triggerTimeOffset = ability.triggerTimeOffset || 0;
        this.name = ability.name || '';
        this.tooltip = ability.tooltip || '';
        this.buttons = ability.buttons || [];
        this.awaitingUpdate = ability.awaitingUpdate || null;
        this.abilityComponents = ability.abilityComponents || [];
    }
    Ability.getAllAbilities = function (accessToken, characterID, callback) {
        RestAPI_1.getCraftedAbilities(accessToken, characterID).then(function (data) {
            if (callback) {
                callback(data.map(function (o) {
                    return new Ability(o);
                }));
            }
        }).catch(function (error) {
            console.log("error: " + error.message + " | response: " + error.response);
        });
    };
    return Ability;
}();
exports.default = Ability;