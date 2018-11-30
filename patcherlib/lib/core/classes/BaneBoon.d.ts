/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import channelId from '../constants/channelId';
import baneBoonCategory from '../constants/baneBoonCategory';
declare class BaneBoon {
    id: string;
    channelId: channelId;
    name: string;
    description: string;
    category: baneBoonCategory;
    categoryId: number;
    icon: string;
    costPerRank: number;
    maxRanks: number;
    prerequisite: string;
    x: number;
    y: number;
    constructor(boonbane?: BaneBoon);
    static create(): BaneBoon;
}
export default BaneBoon;
