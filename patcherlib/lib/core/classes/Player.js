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
var Combatant_1 = require("./Combatant");
var Player = /** @class */function (_super) {
    __extends(Player, _super);
    function Player(player) {
        if (player === void 0) {
            player = {};
        }
        var _this = _super.call(this, player) || this;
        _this.race = player.race;
        _this.archetype = player.archetype;
        return _this;
    }
    Player.prototype.setRace = function (race) {
        this.race = race;
    };
    Player.prototype.setArchetype = function (archetype) {
        this.archetype = archetype;
    };
    Player.create = function () {
        var a = new Player();
        return a;
    };
    return Player;
}(Combatant_1.default);
exports.default = Player;