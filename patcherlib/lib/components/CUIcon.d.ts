import * as React from 'react';
export interface CUIconProps<T> {
    iconContainer?: React.CSSProperties;
    className?: string;
    icon: string;
    iconStyle: React.CSSProperties;
    props?: T;
}
export declare function renderCUIcon<T>(props: CUIconProps<T>): JSX.Element;
export declare const CUIcon: typeof renderCUIcon;
export default CUIcon;
