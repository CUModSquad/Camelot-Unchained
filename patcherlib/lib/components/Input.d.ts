import * as React from 'react';
export interface InputStyle {
    inputWrapper: React.CSSProperties;
    input: React.CSSProperties;
    label: React.CSSProperties;
}
export interface InputProps {
    styles?: Partial<InputStyle>;
    label?: string;
    inputRef?: (r: HTMLInputElement) => void;
    type: string;
    [id: string]: any;
}
export declare const Input: (props: Partial<InputProps>) => JSX.Element;
export default Input;
