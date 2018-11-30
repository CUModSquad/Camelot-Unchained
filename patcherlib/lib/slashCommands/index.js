"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var events = require("../events");
if (!window['cu']) window['cu'] = {};
window['cu'].slashCommandRegistry = [];
function prefix(command) {
    return "slash_" + command;
}
/**
 * Registers a method to be executed when a slash command is entered in the chat
 * window.
 */
function registerSlashCommand(command, helpText, callback) {
    var cmd = command.toLowerCase();
    var found = false;
    for (var i = 0; i < window['cu'].slashCommandRegistry.length; ++i) {
        if (window['cu'].slashCommandRegistry[i].command === cmd) {
            found = true;
            break;
        }
    }
    if (!found) window['cu'].slashCommandRegistry.push({ helpText: helpText, command: cmd });
    events.on(prefix(cmd), callback);
}
exports.registerSlashCommand = registerSlashCommand;
/**
 * Un registers a slash command.  WARNING: this will register all occurances
 * of this command. If this was registered by multiple modules, ALL other modules
 * listening for this command will stop working.
 */
function unregisterSlashCommand(command) {
    var cmd = command.toLowerCase();
    var index = -1;
    for (var i = 0; i < window['cu'].slashCommandRegistry.length; ++i) {
        if (window['cu'].slashCommandRegistry[i].command === cmd) {
            index = i;
            break;
        }
    }
    if (index >= 0) window['cu'].slashCommandRegistry.slice(index, 1);
}
exports.unregisterSlashCommand = unregisterSlashCommand;
/**
 * parseMessageForSlashCommand is meant to be run on every entered line of text
 * entered into the chat window. If the line of text was a registered slash
 * command then an event is fired for that command and the function returns true.
 * If no slash command is found, the function returns false and the chat system
 * should handle it however it would normally.
 */
function parseMessageForSlashCommand(command) {
    var split = command.split(/ (.+)/);
    var cmd = split[0].toLowerCase();
    var found = false;
    for (var i = 0; i < window['cu'].slashCommandRegistry.length; ++i) {
        if (window['cu'].slashCommandRegistry[i].command === cmd.toLowerCase()) {
            events.fire(prefix(cmd), split[1]);
            found = true;
            break;
        }
    }
    return found;
}
exports.parseMessageForSlashCommand = parseMessageForSlashCommand;
function getSlashCommands() {
    return window['cu'].slashCommandRegistry.slice(0);
}
exports.getSlashCommands = getSlashCommands;