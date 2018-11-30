"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var defaultTopics_1 = require("../defaultTopics");
var client_1 = require("../../core/client");
var Inventory_1 = require("../../core/classes/Inventory");
function run(emitter, topic) {
    var inventory = new Inventory_1.default();
    client_1.default.OnInventoryAdded(function (item) {
        inventory.addItem(item);
        emitter.emit(topic, inventory);
    });
    client_1.default.OnInventoryRemoved(function (itemID) {
        inventory.removeItem(itemID);
        emitter.emit(topic, inventory);
    });
}
var InventoryListener = /** @class */function () {
    function InventoryListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesInventory;
    }
    InventoryListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return InventoryListener;
}();
exports.default = InventoryListener;