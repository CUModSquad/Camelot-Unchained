/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export interface SlashCommand {
    command: string;
    helpText: string;
}
/**
 * Registers a method to be executed when a slash command is entered in the chat
 * window.
 */
export declare function registerSlashCommand(command: string, helpText: string, callback: (args: string) => void): void;
/**
 * Un registers a slash command.  WARNING: this will register all occurances
 * of this command. If this was registered by multiple modules, ALL other modules
 * listening for this command will stop working.
 */
export declare function unregisterSlashCommand(command: string): void;
/**
 * parseMessageForSlashCommand is meant to be run on every entered line of text
 * entered into the chat window. If the line of text was a registered slash
 * command then an event is fired for that command and the function returns true.
 * If no slash command is found, the function returns false and the chat system
 * should handle it however it would normally.
 */
export declare function parseMessageForSlashCommand(command: string): boolean;
export declare function getSlashCommands(): SlashCommand[];
