import * as React from 'react';
export interface ConfirmDialogStyle {
    container: React.CSSProperties;
    dialog: React.CSSProperties;
    content: React.CSSProperties;
    buttons: React.CSSProperties;
    confirmButton: React.CSSProperties;
    cancelButton: React.CSSProperties;
}
export interface ConfirmDialogProps<ContentProps> {
    onConfirm: () => void;
    onCancel: () => void;
    content: (props: ContentProps) => JSX.Element;
    cancelOnClickOutside?: boolean;
    contentProps?: ContentProps;
    styles?: Partial<ConfirmDialogStyle>;
    confirmButtonContent?: JSX.Element | string;
    cancelButtonContent?: JSX.Element | string;
}
export interface ConfirmDialogState {
    hidden: boolean;
    cancelOnClickOutside: boolean;
}
export declare class ConfirmDialog<ContentProps> extends React.Component<ConfirmDialogProps<ContentProps>, ConfirmDialogState> {
    private mouseOver;
    constructor(props: ConfirmDialogProps<ContentProps>);
    render(): JSX.Element;
    show: () => void;
    hide: () => void;
    componentWillUnmount(): void;
    private confirm;
    private cancel;
    private onMouseEnter;
    private onMouseleave;
    private windowMouseDown;
    private clicked;
}
export default ConfirmDialog;
