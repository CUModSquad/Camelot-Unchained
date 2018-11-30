/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import keyboardModifier from './keyboardModifier';
declare class KeyBind {
    primaryKeyCode: number;
    primaryModifiers: keyboardModifier;
    secondaryKeyCode: number;
    secondaryModifiers: keyboardModifier;
    default: number;
    defaultModifiers: keyboardModifier;
    primaryToString: () => string;
    secondaryToString: () => string;
}
export default KeyBind;
