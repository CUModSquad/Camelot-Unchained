"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Room_1 = require("./Room");
var Rooms = /** @class */function (_super) {
    __extends(Rooms, _super);
    function Rooms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rooms.prototype.render = function () {
        var unreadTotal = 0;
        var content = [];
        var rooms = this.props.rooms;
        if (!rooms) return null;
        for (var i = 0; i < rooms.length; i++) {
            unreadTotal += rooms[i].unread;
            content.push(React.createElement(Room_1.default, { key: i, roomId: rooms[i].roomId, players: rooms[i].players, unread: rooms[i].unread, selected: rooms[i].roomId.same(this.props.current), select: this.props.select, leave: this.props.leave }));
        }
        // update title to display unread
        document.title = unreadTotal > 0 ? "(" + unreadTotal + ") Camelot Unchained" : 'Camelot Unchained';
        return React.createElement("div", { className: 'chat-tab-content chat-rooms' }, content);
    };
    return Rooms;
}(React.Component);
exports.default = Rooms;