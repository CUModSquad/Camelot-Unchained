import * as React from 'react';
export interface DialogStyle {
    container: React.CSSProperties;
    dialog: React.CSSProperties;
    contentWrapper: React.CSSProperties;
}
export interface DialogProps<ContentProps> {
    content: (props: ContentProps) => JSX.Element;
    closeOnClickOutside?: boolean;
    contentProps?: ContentProps;
    styles?: Partial<DialogStyle>;
}
export interface DialogState {
    hidden: boolean;
    closeOnClickOutside: boolean;
}
export declare class Dialog<ContentProps> extends React.Component<DialogProps<ContentProps>, DialogState> {
    private mouseOver;
    constructor(props: DialogProps<ContentProps>);
    render(): JSX.Element;
    show: () => void;
    hide: () => void;
    componentWillUnmount(): void;
    private onMouseEnter;
    private onMouseleave;
    private windowMouseDown;
    private clicked;
}
export default Dialog;
