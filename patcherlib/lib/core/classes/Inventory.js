"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inventory
 */
var Inventory = /** @class */function () {
    /**
     * Inventory Constructor
     * @param  {Inventory = <Inventory>{}} inventory - provide an existing inventory to copy all items into new inventory
     */
    function Inventory(inventory) {
        if (inventory === void 0) {
            inventory = {};
        }
        this.items = inventory.items || [];
    }
    /**
     * Check if the inventory contains an item
     * @param  {string} id - the id of item to look for
     * @return {boolean} returns true if the item existing in the inventory
     */
    Inventory.prototype.hasItem = function (id) {
        return this.items.filter(function (item) {
            return item.id === id;
        }).length > 0;
    };
    /**
     * Adds an item to the inventory
     * @param {Item} item - the item to add to inventory
     */
    Inventory.prototype.addItem = function (item) {
        if (this.hasItem(item.id) === false) {
            this.items.push(item);
        }
    };
    /**
     * Removes an item from the inventory with the given item id
     * @param {string} id - the item id to remove
     */
    Inventory.prototype.removeItem = function (id) {
        if (this.hasItem(id)) {
            var itemIndex_1 = null;
            this.items.forEach(function (item, index) {
                if (item.id === id) {
                    itemIndex_1 = index;
                }
            });
            if (itemIndex_1 != null) {
                this.items.splice(itemIndex_1, 1);
            }
        }
    };
    /**
     * Get a list of all item ID's currently in the inventory
     * @return {string[]} an array of item ID's
     */
    Inventory.prototype.getItemIDs = function () {
        var itemIDs = [];
        this.items.forEach(function (item) {
            itemIDs.push(item.id);
        });
        return itemIDs;
    };
    Inventory.create = function () {
        var a = new Inventory();
        return a;
    };
    return Inventory;
}();
exports.default = Inventory;