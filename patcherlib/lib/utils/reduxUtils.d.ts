import { Dictionary } from './objectUtils';
export interface AsyncAction<T> {
    (dispatch: (action: T | AsyncAction<T>) => any, getState?: () => any): void;
}
export interface BaseAction {
    type: string;
    when: Date;
    error?: string;
}
export declare const defaultAction: any;
export interface FetchStatus {
    isFetching: boolean;
    lastFetchStart: Date;
    lastFetchSuccess: Date;
    lastFetchFailed: Date;
    lastError: string;
}
export declare const defaultFetchStatus: FetchStatus;
export declare function loggingMiddleware(store: any): (next: any) => (action: any) => any;
export declare function crashReporterMiddleware(store: any): (next: (action: BaseAction) => BaseAction) => (action: BaseAction) => BaseAction;
export declare function thunkMiddleware(store: any): (next: any) => (action: any) => any;
export interface Action<STATETYPE> {
    (state: STATETYPE, action: any): STATETYPE;
}
export declare function createReducer<STATETYPE>(defaultState: STATETYPE, actions: Dictionary<Action<STATETYPE>>): (state: STATETYPE, action: BaseAction) => STATETYPE;
export declare type ActionDefinitions<STATETYPE> = Dictionary<Action<STATETYPE>>;
