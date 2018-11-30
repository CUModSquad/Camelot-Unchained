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
var ChatMessage_1 = require("./ChatMessage");
var Room = /** @class */function (_super) {
    __extends(Room, _super);
    function Room() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.select = function (e) {
            e.stopPropagation();
            if (!_this.props.selected) {
                _this.props.select(_this.props.roomId);
            }
        };
        _this.leave = function (e) {
            e.stopPropagation();
            _this.props.leave(_this.props.roomId);
        };
        return _this;
    }
    Room.prototype.render = function () {
        var players = undefined;
        var classes = ['chat-room'];
        if (this.props.selected) classes.push('chat-room-selected');
        if (this.props.roomId.type === ChatMessage_1.chatType.GROUP) {
            players = React.createElement("li", { className: 'chat-room-players' }, this.props.players, " players");
        } else {
            players = React.createElement("li", { className: 'chat-room-players' }, "(private)");
        }
        return React.createElement("div", { className: classes.join(' '), onClick: this.select }, React.createElement("div", { className: 'chat-room-close', onClick: this.leave }), React.createElement("ul", null, React.createElement("li", { className: 'chat-room-name' }, this.props.roomId.displayName || this.props.roomId.name), players), React.createElement("div", { className: this.props.unread ? 'chat-unread' : 'chat-hidden' }, this.props.unread));
    };
    return Room;
}(React.Component);
exports.default = Room;