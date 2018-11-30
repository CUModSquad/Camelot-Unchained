/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import channelId from './constants/channelId';
declare class CoreSettings {
    cseApiUrl: string;
    cseApiPort: number;
    publicApiUrl: string;
    publicApiPort: number;
    hatcheryApiUrl: string;
    hatcheryApiPort: number;
    fledglingApiUrl: string;
    fledglingApiPort: number;
    wyrmlingApiUrl: string;
    wyrmlingApiPort: number;
    apiToken: string;
    channelId: channelId;
    constructor(channel?: channelId, token?: string);
}
export default CoreSettings;
