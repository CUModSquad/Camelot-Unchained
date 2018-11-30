/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http//mozilla.org/MPL/2.0/.
 */
declare class Stats {
    strength: number;
    agility: number;
    endurance: number;
    will: number;
    resonance: number;
    dexterity: number;
    vitality: number;
    attunement: number;
    faith: number;
    eyesight: number;
    hearing: number;
    clarity: number;
    mass: number;
    presence: number;
    affinity: number;
    maxMoveSpeed: number;
    vision: number;
    detection: number;
    carryCapacity: number;
    maxPanic: number;
    panicDelay: number;
    healthRegeneration: number;
    staminaRegeneration: number;
    constructor(stats?: Stats);
    static create(): Stats;
}
export default Stats;
