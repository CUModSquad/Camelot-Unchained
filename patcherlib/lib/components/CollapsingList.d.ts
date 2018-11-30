import * as React from 'react';
export interface CollapsingListStyle {
    container: string;
    title: string;
    collapseButton: string;
    body: string;
    listContainer: string;
    listFooter: string;
    listItem: string;
}
export interface CollapsingListProps {
    styles?: Partial<CollapsingListStyle>;
    defaultCollapsed?: boolean;
    collapsed?: boolean;
    onToggleCollapse?: (collapsed: boolean) => void;
    renderListItem?: (listItem: any, index: number) => JSX.Element;
    renderListFooter?: () => JSX.Element;
    renderListHeader?: () => JSX.Element;
    animationClass?: (collapsed: boolean) => {
        anim: string;
    };
    title: string | ((collapsed: boolean) => JSX.Element);
    items: any[];
}
export interface CollapsingListState {
    collapsed: boolean;
}
export declare class CollapsingList extends React.Component<CollapsingListProps, CollapsingListState> {
    constructor(props: CollapsingListProps);
    render(): JSX.Element;
    private onToggleCollapse;
}
export default CollapsingList;
