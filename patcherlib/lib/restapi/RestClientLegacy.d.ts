/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import 'isomorphic-fetch';
import { Promise } from 'es6-promise';
export declare function getJSON(endpoint: string, useHttps?: boolean, query?: any): Promise<any>;
export declare function postJSON(endpoint: string, useHttps?: boolean, requireAuth?: boolean, data?: any, version?: number): Promise<any>;
