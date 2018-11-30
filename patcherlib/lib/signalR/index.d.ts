export * from './SignalRHub';
export * from './hubs/groupsHub';
export * from './hubs/patcherHub';
export interface InitCallback {
    (succeeded: boolean): any;
}
export declare const initializeSignalR: (signalRHost?: string) => void;
export declare const reinitializeSignalR: (signalRHost?: string) => void;
export declare const initializeSignalRHubs: (...hubs: {
    name: string;
    callback: InitCallback;
}[]) => void;
export declare const unregisterSignalRHubs: (...hubNames: string[]) => void;
