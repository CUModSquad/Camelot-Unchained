import * as React from 'react';
import { DropDownSelectStyle } from './DropDownSelect';
export interface InlineDropDownSelectEditStyle {
    defaultView: React.CSSProperties;
    editModeContainer: React.CSSProperties;
    editModeButtons: React.CSSProperties;
    editButton: React.CSSProperties;
    saveButton: React.CSSProperties;
    error: React.CSSProperties;
}
export interface InlineDropDownSelectEditProps<ItemType, DataType extends {}> {
    items: ItemType[];
    value: ItemType;
    renderListItem: (item: ItemType, renderData: DataType) => JSX.Element;
    renderSelectedItem: (item: ItemType, renderData: DataType) => JSX.Element;
    renderData?: DataType;
    onSave: (prev: ItemType, selected: ItemType) => Promise<{
        ok: boolean;
        error?: string;
    }>;
    styles?: Partial<InlineDropDownSelectEditStyle>;
    dropDownStyles?: Partial<DropDownSelectStyle>;
}
export interface InlineDropDownSelectEditState {
    editMode: boolean;
    showEditButton: boolean;
    saving: boolean;
    errors: string;
}
export declare class InlineDropDownSelectEdit<ItemType, DataType extends {}> extends React.Component<InlineDropDownSelectEditProps<ItemType, DataType>, InlineDropDownSelectEditState> {
    private static editModeActiveEvent;
    private editModeListenerID;
    private id;
    private dropDownRef;
    constructor(props: InlineDropDownSelectEditProps<ItemType, DataType>);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onEditModeActiveEvent;
    private onMouseleave;
    private onKeyDown;
    private showEditButton;
    private doSave;
    private activateEditMode;
    private deactivateEditMode;
}
export default InlineDropDownSelectEdit;
