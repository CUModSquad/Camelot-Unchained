import { ObjectMap } from './ObjectMap';
export declare function withDefaults<T extends ObjectMap<any>>(a: Partial<T> | null | undefined, defaults: T, createNew?: boolean): T;
export declare function toDefault<T extends ObjectMap<any>>(original: Partial<T>, defaults: T): T;
