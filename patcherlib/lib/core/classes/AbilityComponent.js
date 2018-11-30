"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentBranch = /** @class */function () {
    function ComponentBranch() {}
    return ComponentBranch;
}();
exports.ComponentBranch = ComponentBranch;
var AbilityComponent = /** @class */function () {
    function AbilityComponent(abilityComponent) {
        if (abilityComponent === void 0) {
            abilityComponent = {};
        }
        this.id = abilityComponent.id || '';
        this.icon = abilityComponent.icon || '';
        this.cooldown = abilityComponent.cooldown || 0;
        this.duration = abilityComponent.duration || 0;
        this.name = abilityComponent.name || '';
        this.tooltip = abilityComponent.tooltip || '';
        this.abilityTags = abilityComponent.abilityTags || [];
        // ....
    }
    AbilityComponent.create = function () {
        var a = new AbilityComponent();
        return a;
    };
    return AbilityComponent;
}();
exports.AbilityComponent = AbilityComponent;
exports.default = AbilityComponent;