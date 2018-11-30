/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as React from 'react';
export interface SettingsProps {
    key: string;
}
export interface SettingsState {
    section: any;
    sectionName: string;
    checked: boolean;
}
declare class Settings extends React.Component<SettingsProps, SettingsState> {
    constructor(props: SettingsProps);
    render(): JSX.Element;
    private generateSection;
    private navigate;
}
export default Settings;
