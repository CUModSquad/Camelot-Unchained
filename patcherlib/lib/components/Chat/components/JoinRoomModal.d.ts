/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
import { Room } from '../lib/CSEChat';
export interface JoinRoomModalProps {
    closeModal: () => void;
    joinRoom: (roomName: string) => void;
    getRooms: () => void;
}
export interface JoinRoomModalState {
    rooms: Room[];
    filter: string;
}
declare class JoinRoomModal extends React.Component<JoinRoomModalProps, JoinRoomModalState> {
    constructor(props: JoinRoomModalProps);
    initialState(): JoinRoomModalState;
    render(): JSX.Element;
    componentDidMount(): void;
    private getRooms;
    private gotRooms;
    private joinRoom;
    private selectRoom;
}
export default JoinRoomModal;
