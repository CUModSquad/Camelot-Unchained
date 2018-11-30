/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Promise } from 'es6-promise';
export declare function getBlueprintIcon(id: number): Promise<string>;
export declare function getBlueprints(charId: string): Promise<any>;
export declare function addBlueprint(charId: string, name: string, data: any): Promise<any>;
