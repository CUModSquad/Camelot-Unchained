"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var defaultTopics_1 = require("../defaultTopics");
var client_1 = require("../../core/client");
var EquippedGear_1 = require("../../core/classes/EquippedGear");
function run(emitter, topic) {
    var equippedgear = new EquippedGear_1.default();
    client_1.default.OnGearAdded(function (item) {
        equippedgear.addItem(item);
        emitter.emit(topic, equippedgear);
    });
    client_1.default.OnGearRemoved(function (itemID) {
        equippedgear.removeItem(itemID);
        emitter.emit(topic, equippedgear);
    });
}
var EquippedGearListener = /** @class */function () {
    function EquippedGearListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesEquippedGear;
    }
    EquippedGearListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return EquippedGearListener;
}();
exports.default = EquippedGearListener;