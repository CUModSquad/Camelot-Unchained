/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import AbilityComponent from './AbilityComponent';
declare class Ability {
    id: string;
    icon: string;
    cooldowns: any[];
    duration: number;
    triggerTimeOffset: number;
    name: string;
    tooltip: string;
    abilityComponents: AbilityComponent[];
    buttons: any[];
    awaitingUpdate: {
        (a: Ability): any;
    }[];
    constructor(ability?: Ability);
    static getAllAbilities(accessToken: string, characterID: string, callback: (abilities: Ability[]) => void): void;
}
export default Ability;
