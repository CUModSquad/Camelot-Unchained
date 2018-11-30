"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var channelId_1 = require("../constants/channelId");
var baneBoonCategory_1 = require("../constants/baneBoonCategory");
var BaneBoon = /** @class */function () {
    function BaneBoon(boonbane) {
        if (boonbane === void 0) {
            boonbane = {};
        }
        this.id = boonbane.id || '';
        this.channelId = boonbane.channelId || channelId_1.default.NONE;
        this.name = boonbane.name || '';
        this.description = boonbane.description || '';
        this.category = boonbane.category || baneBoonCategory_1.default.NONE;
        this.categoryId = boonbane.categoryId || 0;
        this.icon = boonbane.icon || '';
        this.costPerRank = boonbane.costPerRank || 0;
        this.maxRanks = boonbane.maxRanks || 0;
        this.prerequisite = boonbane.prerequisite || '';
        this.x = boonbane.x || 0;
        this.y = boonbane.y || 0;
    }
    BaneBoon.create = function () {
        var a = new BaneBoon();
        return a;
    };
    return BaneBoon;
}();
exports.default = BaneBoon;