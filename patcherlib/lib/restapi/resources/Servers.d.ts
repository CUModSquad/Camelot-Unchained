/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Promise } from 'es6-promise';
import channelId from '../../core/constants/channelId';
export declare function getServers(): Promise<any>;
export declare function getServersByChannel(channelId: channelId): Promise<any>;
