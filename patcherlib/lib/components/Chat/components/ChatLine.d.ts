/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
import { ChatMessage } from './ChatMessage';
export interface ChatLineState {
}
export interface ChatLineProps {
    message: ChatMessage;
    key: number;
}
declare class ChatLine extends React.Component<ChatLineProps, ChatLineState> {
    constructor(props: ChatLineProps);
    render(): JSX.Element;
    private timestamp;
    private buildMessage;
    private PM;
}
export default ChatLine;
