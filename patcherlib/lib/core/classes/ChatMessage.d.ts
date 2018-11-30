/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
declare class ChatMessage {
    type: number;
    from: string;
    body: string;
    nick: string;
    iscse: boolean;
    constructor(chatMessage?: ChatMessage);
    static create(): ChatMessage;
}
export default ChatMessage;
