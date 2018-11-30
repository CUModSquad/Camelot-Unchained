import * as React from 'react';
export interface FlatButtonStyle {
    button: React.CSSProperties;
}
export interface FlatButtonProps {
    styles?: Partial<FlatButtonStyle>;
    children?: React.ReactNode;
    [id: string]: any;
}
export declare const FlatButton: (props: FlatButtonProps) => JSX.Element;
export default FlatButton;
