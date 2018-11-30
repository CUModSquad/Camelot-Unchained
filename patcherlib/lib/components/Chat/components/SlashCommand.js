"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var RoomId_1 = require("./RoomId");
var ChatMessage_1 = require("./ChatMessage");
var SlashCommand = /** @class */function () {
    function SlashCommand(command) {
        this.name = command.split(' ')[0];
        this.args = command.substr(this.name.length + 1);
        this.argv = this.args.length ? this.args.split(' ') : [];
    }
    SlashCommand.prototype.exec = function (session) {
        switch (this.name) {
            case 'w':
            case 't':
            case 'tell':
            case 'pm':
            case 'msg':
                // which?
                if (this.argv.length > 1) {
                    var user = this.argv[0];
                    var message = this.args.substr(user.length + 1).trim();
                    session.sendMessage(message, user);
                }
                return true;
            case 'join':
                if (this.argv.length === 1) {
                    session.joinRoom(new RoomId_1.default(this.argv[0], ChatMessage_1.chatType.GROUP));
                }
                return true;
            case 'leave':
                if (this.argv.length === 1) {
                    session.leaveRoom(new RoomId_1.default(this.argv[0], ChatMessage_1.chatType.GROUP));
                    session.leaveRoom(new RoomId_1.default(this.argv[0], ChatMessage_1.chatType.PRIVATE));
                } else {
                    session.leaveRoom(session.currentRoom);
                }
                return true;
        }
        return false; // command was not recognised
    };
    return SlashCommand;
}();
exports.default = SlashCommand;