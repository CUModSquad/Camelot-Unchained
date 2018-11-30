"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var Population = /** @class */function () {
    function Population(population) {
        if (population === void 0) {
            population = {};
        }
        // Population limit
        this.max = population.max || 0;
        // Current Population by realm
        this.arthurians = population.arthurians || 0;
        this.tuathaDeDanann = population.tuathaDeDanann || 0;
        this.vikings = population.vikings || 0;
    }
    Population.create = function () {
        var a = new Population();
        return a;
    };
    return Population;
}();
exports.default = Population;