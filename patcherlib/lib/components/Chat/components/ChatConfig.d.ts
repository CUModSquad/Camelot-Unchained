/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export declare class ChatConfig {
    SCROLLBACK_BUFFER_SIZE: number;
    SHOW_COLORS: boolean;
    SHOW_EMOTICONS: boolean;
    SHOW_MARKDOWN: boolean;
    EMBED_IMAGES: boolean;
    EMBED_VIDEOS: boolean;
    JOIN_PARTS: boolean;
    TIMESTAMPS: boolean;
    NICK: string;
    HIGHLIGHTS: string[];
    constructor();
    setNick: (nick: string) => void;
    getHighlights: () => string[];
    refresh: () => void;
}
export declare const chatConfig: ChatConfig;
