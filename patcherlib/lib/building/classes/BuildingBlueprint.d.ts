/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
declare class BuildingBlueprint {
    name: string;
    icon: string;
    index: number;
    constructor(block?: BuildingBlueprint);
    static create(): BuildingBlueprint;
}
export default BuildingBlueprint;
