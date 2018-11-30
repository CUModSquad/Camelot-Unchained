import * as React from 'react';
import { Quadrant } from '../utils';
export interface ContextMenuContentProps {
    close: () => void;
}
export interface ContextMenuProps {
    content: (props: ContextMenuContentProps) => any;
    onContextMenuContentShow?: () => void;
    onContextMenuContentHide?: () => void;
    contentProps?: any;
    offsetLeft?: number;
    offsetRight?: number;
    offsetTop?: number;
    offsetBottom?: number;
    style?: React.CSSProperties;
}
export interface ContextMenuState {
    x: number;
    y: number;
    wndRegion: Quadrant;
    hidden: boolean;
    offsetLeft: number;
    offsetRight: number;
    offsetTop: number;
    offsetBottom: number;
}
export declare class ContextMenu extends React.Component<ContextMenuProps, ContextMenuState> {
    private mouseOverElement;
    constructor(props: ContextMenuProps);
    render(): JSX.Element;
    shouldComponentUpdate(nextProps: ContextMenuProps, nextState: ContextMenuState): boolean;
    hide: () => void;
    show: (clientX: number, clientY: number) => void;
    componentWillUnmount(): void;
    private onKeyDown;
    private onMouseDown;
    private onMouseEnter;
    private onMouseLeave;
    private onContextMenu;
    private computeStyle;
}
export default ContextMenu;
