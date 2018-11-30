/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Item from './Item';
/**
 * EquippedGear
 */
declare class EquippedGear {
    /**
     * The items currently in the equippedgear
     * @type {Item[]}
     */
    items: Item[];
    constructor(equippedgear?: EquippedGear);
    /**
     * Get the item in specific gear slot
     * @param  {gearSlot} slot - the gear slot to get item for
     * @return {Item} the item in gear slot, or null if there is no item equipped
     */
    getItemInGearSlot(slot: string): Item;
    /**
     * Check if the equippedgear contains an item
     * @param  {string} id - the id of item to look for
     * @return {boolean} returns true if the item existing in the equippedgear
     */
    hasItem(id: string): boolean;
    /**
     * Removes an item from given gear slot
     * @param {gearSlot} slot the gear slot to remove item from
     */
    removeItemInGearSlot(slot: string): void;
    /**
     * Adds an item to the equippedgear
     * @param {Item} item - the item to add to equippedgear
     */
    addItem(item: Item): void;
    /**
     * Removes an item from the equippedgear with the given item id
     * @param {string} id - the item id to remove
     */
    removeItem(id: string): void;
    /**
     * Get a list of all item ID's currently in the equippedgear
     * @return {string[]} an array of item ID's
     */
    getItemIDs(): string[];
    static create(): EquippedGear;
}
export default EquippedGear;
