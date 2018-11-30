/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference types="react" />
interface ChatTextParserToken {
    expr: RegExp;
    token: number;
}
declare class ChatTextParser {
    static TEXT: number;
    tokens: ChatTextParserToken[];
    constructor(tokens: ChatTextParserToken[]);
    parse(text: string, callback: (token: number, text: string, match: RegExpExecArray) => JSX.Element[], index?: number): JSX.Element[];
}
export { ChatTextParserToken, ChatTextParser, };
export default ChatTextParser;
