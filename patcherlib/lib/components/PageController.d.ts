import * as React from 'react';
export interface PageControllerStyle {
    PageController: string;
    controllerContainer: string;
    contentContainer: string;
    controllerButton: string;
    disabledControllerButton: string;
    pageNumberText: string;
}
export interface PageInfo<T> {
    render: (props: T) => JSX.Element;
    props?: any;
}
export interface PageControllerProps {
    styles?: Partial<PageControllerStyle>;
    prevButtonText?: string;
    nextButtonText?: string;
    onNextPageClick?: (activeIndex: number) => void;
    onPrevPageClick?: (activeIndex: number) => void;
    pages: PageInfo<Partial<{
        active: boolean;
    }>>[];
    onPageChange?: (page: number) => void;
    renderPageController?: (state: PageControllerState, props: PageControllerProps, onNextPageClick: any, onPrevPageClick: any) => any;
    renderHeaderContainer?: (state: PageControllerState, props: PageControllerProps) => any;
}
export interface PageControllerState {
    activePageIndex: number;
}
export declare class PageController extends React.Component<PageControllerProps, PageControllerState> {
    constructor(props: PageControllerProps);
    render(): JSX.Element;
    componentWillReceiveProps(nextProps: PageControllerProps): void;
    private renderPageController;
    private onNextPage;
    private onPrevPage;
}
export default PageController;
