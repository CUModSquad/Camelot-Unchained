"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Combatant = /** @class */function () {
    function Combatant(combatant) {
        if (combatant === void 0) {
            combatant = {};
        }
        this.name = combatant.name || '';
        this.health = combatant.health || 0;
        this.maxHealth = combatant.maxHealth || 0;
        this.stamina = combatant.stamina || 0;
        this.maxStamina = combatant.maxStamina || 0;
        this.injuries = combatant.injuries || [];
    }
    /**
     *  Reset combatant state to nil [for when not got a target]
     */
    Combatant.prototype.reset = function () {
        this.name = '';
        this.health = 0;
        this.maxHealth = 0;
        this.stamina = 0;
        this.maxStamina = 0;
        this.injuries = [];
    };
    Combatant.prototype.setRace = function (race) {}; // override to support race
    Combatant.prototype.setArchetype = function (archetype) {}; /// override to support archetype
    Combatant.prototype.setName = function (name) {
        this.name = name;
    };
    Combatant.prototype.setHealth = function (health, maxHealth) {
        this.health = health;
        this.maxHealth = maxHealth;
    };
    Combatant.prototype.setStamina = function (stamina, maxStamina) {
        this.stamina = stamina;
        this.maxStamina = maxStamina;
    };
    Combatant.prototype.setInjury = function (part, health, maxHealth, wounds) {
        var injury = this.injuries[part] = this.injuries[part] || {};
        injury.part = part;
        injury.health = health;
        injury.maxHealth = maxHealth;
        injury.wounds = wounds;
    };
    Combatant.create = function () {
        var a = new Combatant();
        return a;
    };
    return Combatant;
}();
exports.default = Combatant;