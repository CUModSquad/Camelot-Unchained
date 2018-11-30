import * as React from 'react';
export interface LoadingContainerProps {
    wait?: number;
    loading: boolean;
}
export interface LoadingContainerState {
    hidden: boolean;
}
export declare class LoadingContainer extends React.Component<LoadingContainerProps, LoadingContainerState> {
    constructor(props: LoadingContainerProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: LoadingContainerProps): void;
    private handleLoadingState;
}
