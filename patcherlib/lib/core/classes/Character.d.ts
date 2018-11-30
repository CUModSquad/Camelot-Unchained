/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Player from './Player';
import Inventory from './Inventory';
import EquippedGear from './EquippedGear';
import BaneBoon from './BaneBoon';
import SpellBook from './SpellBook';
import Group from './Group';
import Stats from './Stats';
declare class Character extends Player {
    inventory: Inventory;
    banes: BaneBoon[];
    boons: BaneBoon[];
    equippedGear: EquippedGear;
    spellBook: SpellBook;
    group: Group;
    stats: Stats;
    constructor(character?: Character);
    static create(): Character;
}
export default Character;
