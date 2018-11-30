import * as React from 'react';
import { Quadrant } from '../utils';
export interface ToolTipStyle {
    Tooltip: React.CSSProperties;
    tooltip: React.CSSProperties;
    tooltipFixed: React.CSSProperties;
}
export interface TooltipProps {
    content: string | ((props?: any) => JSX.Element);
    contentProps?: any;
    tooltipClassName?: string;
    offsetLeft?: number;
    offsetRight?: number;
    offsetTop?: number;
    offsetBottom?: number;
    styles?: Partial<ToolTipStyle>;
    show?: boolean;
    onTooltipShow?: () => void;
    onTooltipHide?: () => void;
    fixedMode?: boolean;
    wndRegion?: Quadrant;
}
export interface TooltipState {
    wndRegion: Quadrant;
    show: boolean;
    ttClassName: string;
    offsetLeft: number;
    offsetRight: number;
    offsetTop: number;
    offsetBottom: number;
}
export declare class Tooltip extends React.Component<TooltipProps, TooltipState> {
    private childRef;
    private tooltipRef;
    private windowDimensions;
    private tooltipDimensions;
    constructor(props: TooltipProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private initWindowDimensions;
    private onMouseMove;
    private onMouseEnter;
    private onMouseleave;
    private computeStyle;
}
export default Tooltip;
