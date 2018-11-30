/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
declare class Injury {
    part: number;
    health: number;
    maxHealth: number;
    wounds: number;
    empty: boolean;
    constructor(injury?: Injury);
    refresh(injury?: Injury): void;
    static create(): Injury;
}
export default Injury;
