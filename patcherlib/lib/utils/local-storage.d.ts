export declare class Store {
    private prefix;
    constructor(prefix?: string);
    setPrefix: (prefix: string) => void;
    set: (key: string, value: any) => void;
    get: <T>(key: string) => T;
    clear: () => void;
    private prefixed;
}
export default Store;
