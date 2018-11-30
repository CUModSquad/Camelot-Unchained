import * as React from 'react';
export interface StepInfo {
    element: string;
    tooltipText?: string;
}
export interface StepsProps {
    enabled?: boolean;
    initialStep: number;
    steps: StepInfo[];
    onExitClick: () => void;
}
export interface HelpInfoProps extends StepsProps {
}
export interface HelpInfoState {
    hints: any[];
}
export declare class HelpInfo extends React.Component<HelpInfoProps, HelpInfoState> {
    private prevElementStyle;
    constructor(props: HelpInfoProps);
    render(): JSX.Element;
    componentWillReceiveProps(nextProps: HelpInfoProps): void;
    private onToggleHints;
    private addHints;
    private removeHints;
}
export default HelpInfo;
