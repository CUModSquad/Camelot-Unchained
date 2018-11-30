import * as React from 'react';
export interface RaisedButtonStyle {
    button: React.CSSProperties;
    buttonDisabled: React.CSSProperties;
}
export interface RaisedButtonProps {
    styles?: Partial<RaisedButtonStyle>;
    children?: React.ReactNode;
    disabled?: boolean;
    [id: string]: any;
}
export declare const RaisedButton: (props: RaisedButtonProps) => JSX.Element;
export default RaisedButton;
