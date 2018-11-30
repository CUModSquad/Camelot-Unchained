/// <reference types="react" />
declare function fromText(text: string, keygen: () => number): JSX.Element[];
declare function createRegExp(): RegExp;
declare const _default: {
    fromText: typeof fromText;
    createRegExp: typeof createRegExp;
};
export default _default;
