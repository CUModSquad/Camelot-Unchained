"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var BuildingBlueprint = /** @class */function () {
    function BuildingBlueprint(block) {
        if (block === void 0) {
            block = {};
        }
        this.name = block.name;
        this.icon = block.icon;
        this.index = block.index;
    }
    BuildingBlueprint.create = function () {
        var a = new BuildingBlueprint();
        return a;
    };
    return BuildingBlueprint;
}();
exports.default = BuildingBlueprint;