/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference types="react" />
declare function fromText(text: string, keygen: () => number, match: RegExpExecArray, parser: any): JSX.Element[];
declare function createRegExp(): RegExp;
declare const _default: {
    fromText: typeof fromText;
    createRegExp: typeof createRegExp;
};
export default _default;
