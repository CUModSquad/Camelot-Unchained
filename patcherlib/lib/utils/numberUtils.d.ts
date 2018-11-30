export {};
declare global {
    interface Number {
        floatEquals(n: number, epsilon?: number): boolean;
    }
}
