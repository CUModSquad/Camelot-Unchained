import * as React from 'react';
export interface TabPanelStyle {
    tabPanel: string;
    tabs: string;
    tab: string;
    activeTab: string;
    contentContainer: string;
    content: string;
    contentHidden: string;
}
export interface TabItem<T> {
    name?: string;
    rendersContent: string;
    tab: T;
}
export interface ContentItem {
    name?: string;
    content: RenderItem<Partial<{
        active: boolean;
    }>>;
}
export interface RenderItem<T> {
    render: (props: T) => JSX.Element;
    props?: any;
}
export interface TabPanelProps<T> {
    styles?: Partial<TabPanelStyle>;
    tabs: TabItem<T>[];
    renderTab: (tab: T, active?: boolean) => JSX.Element;
    content: ContentItem[];
    defaultTabIndex?: number;
    onActiveTabChanged?: (tabIndex: number, name: string) => void;
    alwaysRenderContent?: boolean;
    renderTabDivider?: () => JSX.Element;
    renderExtraTabItems?: () => JSX.Element;
}
export interface TabPanelState {
    activeIndex: number;
}
export declare class TabPanel<TabData> extends React.Component<TabPanelProps<TabData>, TabPanelState> {
    private didMount;
    activeTabIndex: number;
    constructor(props: TabPanelProps<any>);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private renderTabs;
    private renderAllContent;
    private renderActiveContent;
    private selectIndex;
}
export default TabPanel;
