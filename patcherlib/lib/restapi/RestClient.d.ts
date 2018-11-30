/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import 'isomorphic-fetch';
import { Promise } from 'es6-promise';
export declare function getJSON(endpoint: string, requireAuth?: boolean, query?: any, version?: number): Promise<any>;
export declare function deleteJSON(endpoint: string, requireAuth?: boolean, query?: any, version?: number): Promise<any>;
export declare function postJSON(endpoint: string, requireAuth?: boolean, data?: any, query?: any, version?: number): Promise<any>;
