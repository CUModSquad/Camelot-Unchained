/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import ConfigVar from './ConfigVar';
import KeyBind from './KeyBind';
declare class KeyBindConfigVar extends ConfigVar {
    _value: KeyBind;
    value: KeyBind;
    constructor(config?: KeyBindConfigVar);
    create(): KeyBindConfigVar;
}
export default KeyBindConfigVar;
