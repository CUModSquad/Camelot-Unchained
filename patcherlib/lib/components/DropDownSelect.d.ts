import * as React from 'react';
export interface DropDownSelectStyle {
    container: React.CSSProperties;
    list: React.CSSProperties;
    listMinimized: React.CSSProperties;
    listItem: React.CSSProperties;
    selectedItem: React.CSSProperties;
    highlightItem: React.CSSProperties;
    selected: React.CSSProperties;
    caret: React.CSSProperties;
    listWrapper: React.CSSProperties;
}
export interface DropDownSelectProps<ItemType, DataType extends {}> {
    items: ItemType[];
    selectedItem?: ItemType;
    renderListItem: (item: ItemType, renderType: DataType) => JSX.Element;
    renderSelectedItem: (item: ItemType, renderData: DataType) => JSX.Element;
    renderData?: DataType;
    styles?: Partial<DropDownSelectStyle>;
    onSelectedItemChaned?: (item: ItemType) => void;
}
export interface DropDownSelectState<ItemType> {
    items: ItemType[];
    selectedItem: ItemType;
    keyboardIndex: number;
    dropDownOpen: boolean;
}
export declare class DropDownSelect<ItemType, DataType extends {} = {}> extends React.Component<DropDownSelectProps<ItemType, DataType>, DropDownSelectState<ItemType>> {
    constructor(props: DropDownSelectProps<ItemType, DataType>);
    render(): JSX.Element;
    selectedItem: () => ItemType;
    private onKeyDown;
    private selectItem;
}
export default DropDownSelect;
