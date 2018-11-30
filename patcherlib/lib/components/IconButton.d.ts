import * as React from 'react';
export interface IconButtonStyle {
    IconButton: React.CSSProperties;
    buttonIcon: React.CSSProperties;
    disabled: React.CSSProperties;
}
export interface IconButtonProps {
    styles?: Partial<IconButtonStyle>;
    tooltipContent?: string;
    disabled?: boolean;
    active?: boolean;
    color?: string;
    disabledColor?: string;
    activeColor?: string;
    iconClass: string;
    onClick: (e: any) => void;
}
export declare const IconButton: (props: IconButtonProps) => JSX.Element;
export default IconButton;
