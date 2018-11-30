/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface ChatDisplayProps {
}
export interface ChatDisplayState {
    embedImages: boolean;
    showColors: boolean;
    showEmoticons: boolean;
    showMarkdown: boolean;
    timestamps: boolean;
}
declare class ChatDisplay extends React.Component<ChatDisplayProps, ChatDisplayState> {
    constructor(props: ChatDisplayProps);
    render(): JSX.Element;
    private initializeState;
    private updateItem;
    private generateBooleanOption;
}
export default ChatDisplay;
