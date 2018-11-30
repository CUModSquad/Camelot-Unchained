"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ControlGame = /** @class */function () {
    function ControlGame(controlGame) {
        if (controlGame === void 0) {
            controlGame = {};
        }
        // Game State
        this.gameState = controlGame.gameState || 0;
        // Game Score
        this.arthurianScore = controlGame.arthurianScore || 0;
        this.tuathaDeDanannScore = controlGame.tuathaDeDanannScore || 0;
        this.vikingScore = controlGame.vikingScore || 0;
        // Time remaining
        this.timeLeft = controlGame.timeLeft || 0;
        // Control Points (if included)
        this.controlPoints = controlGame.controlPoints || [];
    }
    ControlGame.create = function () {
        var a = new ControlGame();
        return a;
    };
    return ControlGame;
}();
exports.default = ControlGame;