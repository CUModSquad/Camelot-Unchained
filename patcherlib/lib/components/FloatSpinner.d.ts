import * as React from 'react';
export interface FloatSpinnerStyle {
    spinner: React.CSSProperties;
}
export declare const defaultFloatSpinnerStyle: FloatSpinnerStyle;
export interface FloatSpinnerProps {
    styles?: Partial<FloatSpinnerStyle>;
}
export declare const FloatSpinner: (props: FloatSpinnerProps) => JSX.Element;
export default FloatSpinner;
