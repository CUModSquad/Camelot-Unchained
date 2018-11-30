import * as React from 'react';
export interface InlineInputEditStyle {
    defaultView: React.CSSProperties;
    editModeInputContainer: React.CSSProperties;
    editModeButtons: React.CSSProperties;
    editButton: React.CSSProperties;
    saveButton: React.CSSProperties;
    error: React.CSSProperties;
}
export interface InlineInputEditProps {
    value: any;
    type: string;
    inputProps?: any;
    onSave: (prev: any, entered: string) => Promise<{
        ok: boolean;
        error?: string;
    }>;
    styles?: Partial<InlineInputEditStyle>;
}
export interface InlineInputEditState {
    editMode: boolean;
    showEditButton: boolean;
    saving: boolean;
    errors: string;
}
export declare class InlineInputEdit extends React.Component<InlineInputEditProps, InlineInputEditState> {
    private static editModeActiveEvent;
    private editModeListenerID;
    private id;
    private inputRef;
    constructor(props: InlineInputEditProps);
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
export default InlineInputEdit;
