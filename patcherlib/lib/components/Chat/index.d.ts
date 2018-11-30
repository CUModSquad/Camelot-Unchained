/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
import ChatSession from './components/ChatSession';
import { ChatConfig } from './components/ChatConfig';
export interface ChatState {
    chat: ChatSession;
    now: number;
    config: ChatConfig;
}
export interface ChatProps {
    accessToken: string;
    hideChat?: () => void;
}
export declare class Chat extends React.Component<ChatProps, ChatState> {
    private _eventHandlers;
    constructor(props: ChatProps);
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private initialState;
    private send;
    private update;
    private optionsUpdated;
    private selectRoom;
    private leaveRoom;
    private joinRoom;
    private slashCommand;
    private close;
    private disconnect;
    private getRooms;
}
