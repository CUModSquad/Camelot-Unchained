"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Injury = /** @class */function () {
    function Injury(injury) {
        if (injury === void 0) {
            injury = {};
        }
        this.refresh(injury);
    }
    Injury.prototype.refresh = function (injury) {
        if (injury === void 0) {
            injury = {};
        }
        this.part = injury.part || 0;
        this.health = injury.health || 0;
        this.maxHealth = injury.maxHealth || 0;
        this.wounds = injury.wounds || 0;
        this.empty = this.maxHealth === 0;
    };
    Injury.create = function () {
        var a = new Injury();
        return a;
    };
    return Injury;
}();
exports.default = Injury;