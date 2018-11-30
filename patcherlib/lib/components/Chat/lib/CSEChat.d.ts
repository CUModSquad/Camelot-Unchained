import { Client } from 'node-xmpp-client';
import Config from './Config';
import EventEmitter from './EventEmitter';
interface Room {
    name: string;
    jid: string;
}
declare class CSEChat {
    client: Client;
    config: Config;
    eventEmitter: EventEmitter;
    private _reconnect;
    private _idCounter;
    private _iqc;
    private _msgs;
    private _inFlight;
    private _pings;
    private _pingsInFlight;
    private _pinger;
    private _recvQueue;
    private messageHandlerTimeout;
    constructor(config?: Config);
    connect(): any;
    disconnect(): void;
    sendMessageToRoom(message: string, roomName: string): void;
    sendMessageToUser(message: string, userName: string): void;
    joinRoom(roomName: string): void;
    leaveRoom(roomName: string): void;
    getRooms(): void;
    on(event: string, callback: (data: any) => void): any;
    once(event: string, callback: (data: any) => void): any;
    removeListener(event: any): void;
    private nextId;
    private initializeEvents;
    private recvStanza;
    private messageHandler;
    private keepalive;
    private ping;
    private pong;
    private processStanza;
    private gotRooms;
    private parseMessageGroup;
    private parseMessageChat;
    private parsePresence;
}
export { Config, CSEChat, Room, };
export default CSEChat;
