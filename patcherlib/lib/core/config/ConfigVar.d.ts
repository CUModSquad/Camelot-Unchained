/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import configCategory from './configCategory';
declare class ConfigVar {
    id: number;
    category: configCategory;
    description: string;
    value: any;
    constructor(config?: ConfigVar);
    create(): ConfigVar;
}
export default ConfigVar;
