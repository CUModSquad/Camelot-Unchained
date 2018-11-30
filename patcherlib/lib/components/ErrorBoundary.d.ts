/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface ErrorBoundaryProps {
    renderError?: (error: Error, info: {
        componentStack: string;
    }) => (JSX.Element | React.ReactNode);
    reloadUIOnError?: boolean;
    onError?: (error: Error, info: {
        componentStack: string;
    }) => void;
    outputErrorToConsole?: boolean;
}
export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error;
    info: {
        componentStack: string;
    };
}
export declare class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    componentDidCatch(error: Error, info: {
        componentStack: string;
    }): void;
    render(): any;
    private onReloadUI;
}
