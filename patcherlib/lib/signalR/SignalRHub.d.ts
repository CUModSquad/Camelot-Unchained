import { EventMap } from '../utils/eventMapper';
export interface SignalRHubOptions {
    debug?: boolean;
}
export declare enum ConnectionState {
    Connecting = 0,
    Connected = 1,
    Reconnecting = 2,
    Disconnected = 4
}
export declare type SignalRHubEvents = 'connected' | 'starting';
export interface DeferredObjectInfo {
    done: (...params: any[]) => DeferredObjectInfo;
    fail: (...params: any[]) => DeferredObjectInfo;
    isRejected: (...params: any[]) => DeferredObjectInfo;
    isResolved: (...params: any[]) => DeferredObjectInfo;
    reject: (...params: any[]) => DeferredObjectInfo;
    rejectWith: (...params: any[]) => DeferredObjectInfo;
    resolve: (...params: any[]) => DeferredObjectInfo;
    resolveWith: (...params: any[]) => DeferredObjectInfo;
    then: (...params: any[]) => DeferredObjectInfo;
}
export declare class SignalRHub {
    private hubName;
    private eventMaps;
    private hub;
    private signalRHost;
    private debug;
    private conn;
    private wantStop;
    private tryingToReconnect;
    private eventHandlers;
    private handlerIDMap;
    private handlerIdGen;
    connectionState: ConnectionState;
    onStateChanged: (hub: SignalRHub, state: {
        oldState: ConnectionState;
        newState: ConnectionState;
    }) => void;
    onReceived: (hub: SignalRHub, data: any) => void;
    onError: (hub: SignalRHub, error: string) => void;
    onConnected: (hub: SignalRHub) => void;
    onStarting: (hub: SignalRHub) => void;
    onConnectionSlow: (hub: SignalRHub) => void;
    onReconnecting: (hub: SignalRHub) => void;
    onReconnected: (hub: SignalRHub) => void;
    onDisconnected: (hub: SignalRHub) => void;
    constructor(hubName: string, eventMaps: EventMap[], options?: SignalRHubOptions, signalRHost?: string);
    addEventHandler(event: 'statechanged', callback: (hub: SignalRHub, state: {
        oldState: ConnectionState;
        newState: ConnectionState;
    }) => void): any;
    addEventHandler(event: 'received', callback: (hub: SignalRHub, data: any) => void): any;
    addEventHandler(event: 'error', callback: (hub: SignalRHub, error: string) => void): any;
    addEventHandler(event: 'connected' | 'starting' | 'connectionslow' | 'reconnecting' | 'reconnected' | 'disconnected', callback: (hub: SignalRHub) => void): any;
    removeEventHandler: (id: number) => void;
    start: (shouldReconnect?: boolean, options?: {
        host: string;
    }) => Promise<{}>;
    stop: () => void;
    invoke: (method: string, ...params: any[]) => DeferredObjectInfo;
    private fireEvent;
    private internalOnStarting;
    private internalOnReceived;
    private internalOnConnectionSlow;
    private internalOnReconnecting;
    private internalOnReconnected;
    private internalOnStateChanged;
    private internalOnDisconnected;
    private internalOnError;
    private registerEvents;
    private unregisterEvents;
}
