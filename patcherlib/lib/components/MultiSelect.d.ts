import * as React from 'react';
import { InputProps } from '..';
export interface MultiSelectStyle {
    container: React.CSSProperties;
    input: React.CSSProperties;
    list: React.CSSProperties;
    listItem: React.CSSProperties;
    selectedItem: React.CSSProperties;
    selected: React.CSSProperties;
    removeSelected: React.CSSProperties;
    highlightItem: React.CSSProperties;
    selectedItemList: React.CSSProperties;
}
export interface MultiSelectProps {
    items: any[];
    selectedItems: any[];
    filter: (text: string, item: any) => boolean;
    renderListItem: (item: any, renderData: any) => JSX.Element;
    renderSelectedItem: (item: any, renderData: any) => JSX.Element;
    itemComparison: <T>(a: T, b: T) => boolean;
    renderData?: any;
    styles?: Partial<MultiSelectStyle>;
    inputProps?: Partial<InputProps>;
}
export interface MultiSelectState {
    items: any[];
    filteredItems: any[];
    selectedItems: any[];
    filterText: string;
    keyboardIndex: number;
}
export declare class MultiSelect extends React.Component<MultiSelectProps, MultiSelectState> {
    private inputRef;
    constructor(props: MultiSelectProps);
    selectedItems: () => any[];
    render(): JSX.Element;
    private onInputChanged;
    private onKeyDown;
    private applyFilter;
    private selectItem;
    private unselectItem;
}
export default MultiSelect;
