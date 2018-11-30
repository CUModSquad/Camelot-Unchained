/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Item from './Item';
/**
 * Inventory
 */
declare class Inventory {
    /**
     * The items currently in the inventory
     * @type {Item[]}
     */
    items: Item[];
    /**
     * Inventory Constructor
     * @param  {Inventory = <Inventory>{}} inventory - provide an existing inventory to copy all items into new inventory
     */
    constructor(inventory?: Inventory);
    /**
     * Check if the inventory contains an item
     * @param  {string} id - the id of item to look for
     * @return {boolean} returns true if the item existing in the inventory
     */
    hasItem(id: string): boolean;
    /**
     * Adds an item to the inventory
     * @param {Item} item - the item to add to inventory
     */
    addItem(item: Item): void;
    /**
     * Removes an item from the inventory with the given item id
     * @param {string} id - the item id to remove
     */
    removeItem(id: string): void;
    /**
     * Get a list of all item ID's currently in the inventory
     * @return {string[]} an array of item ID's
     */
    getItemIDs(): string[];
    static create(): Inventory;
}
export default Inventory;
