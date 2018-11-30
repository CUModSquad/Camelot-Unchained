export declare function clone<T>(obj: T): T;
export declare function merge<T>(obj: T, ...args: any[]): T;
export interface Dictionary<T> {
    [id: string]: T;
}
export declare function tryParseJSON<T>(json: string, logError?: boolean): T;
export {};
declare global {
    interface Dictionary<T> {
        [id: string]: T;
    }
    function clone<T>(source: T): T;
    function cloneDeep<T>(source: T): T;
    function merge<T>(source: T, ...args: any[]): T;
    function tryParseJSON<T>(json: string, logError: boolean): T;
    interface Window {
        clone<T>(source: T): T;
        cloneDeep<T>(source: T): T;
        merge<T>(source: T, ...args: any[]): T;
        tryParseJSON<T>(json: string, logError: boolean): T;
    }
}
