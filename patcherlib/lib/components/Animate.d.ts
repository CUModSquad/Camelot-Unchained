import * as React from 'react';
export interface AnimateProps {
    animationEnter: string;
    animationLeave: string;
    durationEnter: number;
    durationLeave: number;
    className?: string;
    key?: number | string;
    component?: string;
}
declare class Animate extends React.Component<AnimateProps, {}> {
    render(): JSX.Element;
    private renderStyle;
}
export default Animate;
