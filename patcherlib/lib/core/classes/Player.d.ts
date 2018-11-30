/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Combatant from './Combatant';
import { Race, Archetype } from '../..';
declare class Player extends Combatant {
    race: Race;
    archetype: Archetype;
    constructor(player?: Player);
    setRace(race: Race): void;
    setArchetype(archetype: Archetype): void;
    static create(): Player;
}
export default Player;
