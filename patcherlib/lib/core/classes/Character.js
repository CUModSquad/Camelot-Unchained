"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var Player_1 = require("./Player");
var Inventory_1 = require("./Inventory");
var EquippedGear_1 = require("./EquippedGear");
var SpellBook_1 = require("./SpellBook");
var Stats_1 = require("./Stats");
var Character = /** @class */function (_super) {
    __extends(Character, _super);
    function Character(character) {
        if (character === void 0) {
            character = {};
        }
        var _this = _super.call(this, character) || this;
        _this.inventory = character.inventory || new Inventory_1.default();
        _this.equippedGear = character.equippedGear || new EquippedGear_1.default();
        _this.spellBook = character.spellBook || new SpellBook_1.default();
        _this.banes = character.banes || [];
        _this.banes = character.boons || [];
        _this.group = character.group || null;
        _this.stats = character.stats || new Stats_1.default();
        return _this;
    }
    Character.create = function () {
        var a = new Character();
        return a;
    };
    return Character;
}(Player_1.default);
exports.default = Character;