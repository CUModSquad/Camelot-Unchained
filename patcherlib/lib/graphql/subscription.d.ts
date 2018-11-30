import { WebSocketOptions } from '../utils/ReconnectingWebSocket';
export interface Options<DataType> extends WebSocketOptions {
    initPayload: any;
    debug: boolean;
    onDataReceived: (data: DataType) => void;
    onError: (error: Error) => void;
    onClosed: () => void;
}
export declare const defaultSubscriptionOpts: Options<any>;
export interface OperationMessage {
    type: string;
    id?: string;
    payload?: any;
}
export interface SubscriptionResult<T> {
    data: T;
    ok: boolean;
    errors?: Error[];
}
export interface OnData<T> {
    (result: SubscriptionResult<T>): void;
}
export declare type OnError = (e: ErrorEvent) => void;
export interface SubscriptionHandle {
    id: string;
    start: OperationMessage;
    onError: OnError;
    onData: OnData<any>;
}
export interface Subscription {
    query: string;
    variables?: Dictionary<any>;
    operationName?: string;
}
export declare const defaultSubscription: Subscription;
export declare class SubscriptionManager {
    private socket;
    private idCounter;
    private initPayload;
    private subscriptions;
    private keepAliveTimeoutHandler;
    private debug;
    private messageQueue;
    constructor(options: Partial<Options<any>>);
    subscribe: <T>(subscription: Subscription, onData: OnData<T>, onError?: OnError) => string;
    stop: (id: string) => void;
    private init;
    private messageHandler;
    private errorHandler;
    private send;
    private log;
}
export declare function subscribe<DataType>(subscription: Subscription, onData: OnData<DataType>, options?: Partial<Options<DataType>>, onError?: OnError): {
    id: string;
    subscriptions: SubscriptionManager;
};
