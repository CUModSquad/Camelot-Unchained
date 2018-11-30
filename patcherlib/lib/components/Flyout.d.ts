import * as React from 'react';
import { Quadrant } from '../utils';
export interface FlyoutContentProps {
    close: () => void;
}
export interface FlyoutProps {
    content: (props: FlyoutContentProps) => any;
    contentProps?: any;
    offsetLeft?: number;
    offsetRight?: number;
    offsetTop?: number;
    offsetBottom?: number;
    style?: React.CSSProperties;
}
export interface FlyoutState {
    x: number;
    y: number;
    wndRegion: Quadrant;
    hidden: boolean;
    offsetLeft: number;
    offsetRight: number;
    offsetTop: number;
    offsetBottom: number;
}
export declare class Flyout extends React.Component<FlyoutProps, FlyoutState> {
    private mouseOverElement;
    constructor(props: FlyoutProps);
    render(): JSX.Element;
    hide: () => void;
    show: (clientX: number, clientY: number) => void;
    componentWillUnmount(): void;
    private onKeyDown;
    private onMouseDown;
    private onMouseEnter;
    private onMouseLeave;
    private onClick;
    private computeStyle;
}
export default Flyout;
