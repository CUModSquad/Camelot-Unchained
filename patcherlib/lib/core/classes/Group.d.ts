/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Player from './Player';
import Character from './Character';
declare class Group {
    self: Character;
    members: Player[];
    constructor(group?: Group);
    static create(): Group;
}
export default Group;
