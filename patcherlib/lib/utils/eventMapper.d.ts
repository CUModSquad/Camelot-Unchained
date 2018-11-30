export interface EventMap {
    receive: string;
    send: string;
}
export declare function eventToEvent(receive: string, send: string): void;
export declare function eventMapper(evtMap: EventMap[], fn: (...params: any[]) => void, ...params: any[]): void;
