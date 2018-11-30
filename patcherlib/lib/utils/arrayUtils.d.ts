export declare function cloneArray<T>(array: T[]): T[];
export declare function defaultCompare<T>(a: T, b: T): boolean;
export declare function findIndexWhere<T>(arr: T[], predicate: (a: T) => boolean): number;
export declare function findIndex<T>(arr: T[], obj: T, equals?: (a: T, b: T) => boolean): number;
export declare function addOrUpdate<T>(arr: T[], obj: T, equals?: (a: T, b: T) => boolean): T[];
export declare function remove<T>(arr: T[], obj: T, equals?: (a: T, b: T) => boolean): T[];
export declare function removeWhere<T>(arr: T[], predicate: (o: T) => boolean): {
    result: T[];
    removed: T[];
};
