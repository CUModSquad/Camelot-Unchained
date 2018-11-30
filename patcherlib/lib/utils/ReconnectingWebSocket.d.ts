export interface WebSocketOptions {
    url: string;
    protocols: string | string[];
    reconnectInterval: number;
    connectTimeout: number;
    debug: boolean;
}
export declare const defaultWebSocketOptions: WebSocketOptions;
export declare class ReconnectingWebSocket {
    private messageCount;
    private reconnectInterval;
    private connectTimeoutInterval;
    private url;
    private protocols;
    private socket;
    private state;
    private connectTimeoutHandle;
    private debug;
    private reconnecting;
    readonly isOpen: boolean;
    readonly readyState: number;
    constructor(options?: Partial<WebSocketOptions>);
    onopen: (event: Event) => void;
    onclose: (event: CloseEvent) => void;
    onmessage: (event: MessageEvent) => void;
    onerror: (event: ErrorEvent) => void;
    send: (data: any) => void;
    close: () => void;
    refresh: () => void;
    private connect;
    private reconnect;
    private message;
    private error;
    private open;
    private closed;
    private log;
}
