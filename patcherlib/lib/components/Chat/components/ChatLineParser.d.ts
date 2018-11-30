/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/// <reference types="react" />
declare class ChatLineParser {
    private static LINK;
    private static EMOJI;
    private static MARKDOWN;
    private static COLOR;
    private static BLINK;
    private static ROOM;
    private static HIGHLIGHT;
    private static NICK;
    private _key;
    parseText(text: string): JSX.Element[];
    parseAction(text: string): JSX.Element[];
    isAction(text: string): boolean;
    parse(text: string): JSX.Element[];
}
export default ChatLineParser;
