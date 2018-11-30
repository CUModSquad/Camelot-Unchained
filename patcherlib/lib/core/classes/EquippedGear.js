"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * EquippedGear
 */
var EquippedGear = /** @class */function () {
    function EquippedGear(equippedgear) {
        if (equippedgear === void 0) {
            equippedgear = {};
        }
        this.items = equippedgear.items || [];
    }
    /**
     * Get the item in specific gear slot
     * @param  {gearSlot} slot - the gear slot to get item for
     * @return {Item} the item in gear slot, or null if there is no item equipped
     */
    EquippedGear.prototype.getItemInGearSlot = function (slot) {
        var gearSlotItems = this.items.filter(function (item) {
            return item.gearSlot === slot;
        });
        if (gearSlotItems.length > 0) {
            return gearSlotItems[0];
        }
        return null;
    };
    /**
     * Check if the equippedgear contains an item
     * @param  {string} id - the id of item to look for
     * @return {boolean} returns true if the item existing in the equippedgear
     */
    EquippedGear.prototype.hasItem = function (id) {
        return this.items.filter(function (item) {
            return item.id === id;
        }).length > 0;
    };
    /**
     * Removes an item from given gear slot
     * @param {gearSlot} slot the gear slot to remove item from
     */
    EquippedGear.prototype.removeItemInGearSlot = function (slot) {
        var _this = this;
        var ids = [];
        this.items.forEach(function (item) {
            if (item.gearSlot === slot) {
                ids.push(item.id);
            }
        });
        ids.forEach(function (id) {
            _this.removeItem(id);
        });
    };
    /**
     * Adds an item to the equippedgear
     * @param {Item} item - the item to add to equippedgear
     */
    EquippedGear.prototype.addItem = function (item) {
        this.removeItemInGearSlot(item.gearSlot);
        this.items.push(item);
    };
    /**
     * Removes an item from the equippedgear with the given item id
     * @param {string} id - the item id to remove
     */
    EquippedGear.prototype.removeItem = function (id) {
        var itemIndex = null;
        this.items.forEach(function (item, index) {
            if (item.id === id) {
                itemIndex = index;
            }
        });
        if (itemIndex != null) {
            this.items.splice(itemIndex, 1);
        }
    };
    /**
     * Get a list of all item ID's currently in the equippedgear
     * @return {string[]} an array of item ID's
     */
    EquippedGear.prototype.getItemIDs = function () {
        var itemIDs = [];
        this.items.forEach(function (item) {
            itemIDs.push(item.id);
        });
        return itemIDs;
    };
    EquippedGear.create = function () {
        var a = new EquippedGear();
        return a;
    };
    return EquippedGear;
}();
exports.default = EquippedGear;