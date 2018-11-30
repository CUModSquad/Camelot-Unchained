import * as React from 'react';
import { MultiSelectStyle } from './MultiSelect';
export interface InlineMultiSelectEditStyle {
    defaultView: React.CSSProperties;
    editModeContainer: React.CSSProperties;
    editModeButtons: React.CSSProperties;
    editButton: React.CSSProperties;
    saveButton: React.CSSProperties;
    error: React.CSSProperties;
}
export interface comparisonFunction<T> {
    (a: T, b: T): boolean;
}
export interface InlineMultiSelectEditProps {
    items: any[];
    value: any[];
    filter: (text: string, item: any) => boolean;
    renderListItem: (item: any, renderData: any) => JSX.Element;
    renderSelectedItem: (item: any, renderData: any) => JSX.Element;
    itemComparison: comparisonFunction<any>;
    renderData?: any;
    onSave: (prev: any, selected: any) => Promise<{
        ok: boolean;
        error?: string;
    }>;
    styles?: Partial<InlineMultiSelectEditStyle>;
    selectStyles?: Partial<MultiSelectStyle>;
}
export interface InlineMultiSelectEditState {
    editMode: boolean;
    showEditButton: boolean;
    saving: boolean;
    errors: string;
}
export declare class InlineMultiSelectEdit extends React.Component<InlineMultiSelectEditProps, InlineMultiSelectEditState> {
    private static editModeActiveEvent;
    private editModeListenerID;
    private id;
    private selectRef;
    constructor(props: InlineMultiSelectEditProps);
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
export default InlineMultiSelectEdit;
