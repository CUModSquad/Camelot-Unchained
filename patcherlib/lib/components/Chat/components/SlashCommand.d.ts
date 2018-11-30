/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import ChatSession from './ChatSession';
declare class SlashCommand {
    private name;
    private args;
    private argv;
    constructor(command: string);
    exec(session: ChatSession): boolean;
}
export default SlashCommand;
