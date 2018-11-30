/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface ChatInputState {
    atUsers: string[];
    atUsersIndex: number;
    expanded: boolean;
}
export interface ChatInputProps {
    label: string;
    send: (text: string) => void;
    slashCommand: (command: string) => void;
    scroll: (extra?: number) => void;
}
declare class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
    private _privateMessageHandler;
    private tabUserList;
    private tabUserIndex;
    private sentMessages;
    private sentMessageIndex;
    constructor(props: ChatInputProps);
    initialState(): ChatInputState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private selectAtUser;
    private getInputNode;
    private keyDown;
    private keyUp;
    private parseInput;
    private expand;
    private collapse;
    private send;
    private privateMessage;
}
export default ChatInput;
