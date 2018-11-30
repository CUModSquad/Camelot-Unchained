/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { UserInfo } from './User';
import { ChatMessage, chatType } from './ChatMessage';
import RoomId from './RoomId';
export interface ChatRoomInfoMessage {
    key: number;
    message: ChatMessage;
}
export interface ChatRoomInfoUser {
    key: number;
    info: UserInfo;
}
declare class ChatRoomInfo {
    messages: ChatRoomInfoMessage[];
    users: ChatRoomInfoUser[];
    key: number;
    roomId: RoomId;
    type: chatType;
    players: number;
    unread: number;
    scrollback: number;
    scrollbackPageSize: number;
    scrollbackThreshold: number;
    constructor(roomId: RoomId, scrollbackThreshold?: number, scrollbackPageSize?: number);
    diagnostics: () => void;
    addUser: (user: UserInfo) => void;
    removeUser: (user: UserInfo) => void;
    add: (message: ChatMessage) => void;
    push: (message: ChatMessage) => void;
    seen: () => void;
    countVisibleMessages: () => number;
    startScrollback: () => void;
    cancelScrollback: () => void;
    nextScrollbackPage: () => void;
}
export default ChatRoomInfo;
