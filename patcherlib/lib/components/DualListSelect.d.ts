import * as React from 'react';
export interface DualListSelectStyle {
    container: React.CSSProperties;
    listSection: React.CSSProperties;
    listBox: React.CSSProperties;
    listItem: React.CSSProperties;
    selectedListItem: React.CSSProperties;
    buttons: React.CSSProperties;
    button: React.CSSProperties;
    filter: React.CSSProperties;
}
export interface DualListSelectItems {
    [id: string]: JSX.Element;
}
export interface DualListSelectProps {
    items: DualListSelectItems;
    labelLeft?: string;
    labelRight?: string;
    styles?: Partial<DualListSelectStyle>;
}
export interface DualListSelectState {
    leftItems: DualListSelectItems;
    rightItems: DualListSelectItems;
    leftFilter: string;
    rightFilter: string;
    filteredLeftItems: DualListSelectItems;
    filteredRightItems: DualListSelectItems;
    leftSelectedItemKey: string;
    rightSelectedItemKey: string;
}
export declare class DualListSelect extends React.Component<DualListSelectProps, DualListSelectState> {
    private leftInputRef;
    private rightInputRef;
    constructor(props: DualListSelectProps);
    render(): JSX.Element;
    getRightItems: () => DualListSelectItems;
    getLeftItems: () => DualListSelectItems;
    getRightKeys: () => string[];
    getLeftKeys: () => string[];
    private onLeftFilterTextChanged;
    private onRightFilterTextChanged;
    private selectItem;
    private removeItem;
    private selectAll;
    private removeAll;
    private filterRightItems;
    private filterLeftItems;
    private renderLeftItems;
    private renderRightItems;
}
export default DualListSelect;
