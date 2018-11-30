import * as React from 'react';
export interface FilterSelectStyle {
    container: React.CSSProperties;
    list: React.CSSProperties;
    listItem: React.CSSProperties;
    selectedItem: React.CSSProperties;
    highlightItem: React.CSSProperties;
}
export interface FilterSelectProps {
    items: any[];
    filter: (text: string, item: any) => boolean;
    renderItem: (item: any, renderData: any) => JSX.Element;
    renderData?: any;
    styles?: Partial<FilterSelectStyle>;
}
export interface FilterSelectState {
    items: any[];
    filteredItems: any[];
    selectedItem: any;
    filterText: string;
    keyboardIndex: number;
}
export declare class FilterSelect extends React.Component<FilterSelectProps, FilterSelectState> {
    private inputRef;
    constructor(props: FilterSelectProps);
    render(): JSX.Element;
    private onInputChanged;
    private onKeyDown;
    private applyFilter;
    private selectItem;
}
export default FilterSelect;
