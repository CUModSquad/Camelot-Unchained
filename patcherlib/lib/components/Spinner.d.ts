import * as React from 'react';
export interface SpinnerStyle {
    spinner: React.CSSProperties;
}
export interface SpinnerProps {
    styles?: Partial<SpinnerStyle>;
}
export declare const Spinner: (props: SpinnerProps) => JSX.Element;
export default Spinner;
