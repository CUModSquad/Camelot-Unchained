/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export interface ControlPoint {
    faction: string;
    id: string;
    size: string;
    x: number;
    y: number;
}
declare class ControlGame {
    arthurianScore: number;
    controlPoints: ControlPoint[];
    gameState: number;
    timeLeft: number;
    tuathaDeDanannScore: number;
    vikingScore: number;
    constructor(controlGame?: ControlGame);
    static create(): ControlGame;
}
export default ControlGame;
