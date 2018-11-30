/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface Style {
    MOTD: React.CSSProperties;
    header: React.CSSProperties;
    content: React.CSSProperties;
    footer: React.CSSProperties;
    dismiss: React.CSSProperties;
    close: React.CSSProperties;
}
export interface Props {
    styles?: Partial<Style>;
    onClose?: () => void;
    onDismiss24?: () => void;
    children?: React.ReactNode;
}
export declare const MOTD: (props: Props) => JSX.Element;
export default MOTD;
