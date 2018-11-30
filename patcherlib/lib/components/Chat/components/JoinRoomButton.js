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
var RoomId_1 = require("./RoomId");
var ChatMessage_1 = require("./ChatMessage");
var JoinRoomModal_1 = require("./JoinRoomModal");
var JoinRoomButton = /** @class */function (_super) {
    __extends(JoinRoomButton, _super);
    function JoinRoomButton(props) {
        var _this = _super.call(this, props) || this;
        _this.showModal = function () {
            _this.setState({ showJoinRoomModal: true });
        };
        _this.closeModal = function () {
            _this.setState({ showJoinRoomModal: false });
        };
        _this.joinRoom = function (room) {
            _this.props.join(new RoomId_1.default(room, ChatMessage_1.chatType.GROUP));
            _this.setState({ showJoinRoomModal: false });
        };
        _this.generateJoinRoomModal = function () {
            return React.createElement("div", { className: 'fullscreen-blackout', key: 'join-room' }, React.createElement(JoinRoomModal_1.default, { closeModal: _this.closeModal, joinRoom: _this.joinRoom, getRooms: _this.props.getRooms }));
        };
        _this.promptRoom = _this.promptRoom.bind(_this);
        _this.state = { showJoinRoomModal: false };
        return _this;
    }
    JoinRoomButton.prototype.render = function () {
        var modal = this.state.showJoinRoomModal ? this.generateJoinRoomModal() : null;
        return React.createElement("div", null, React.createElement("div", { className: 'chat-room-join-button', onClick: this.showModal }, "+ Join Room"), modal);
    };
    JoinRoomButton.prototype.promptRoom = function () {
        var room = window.prompt('Room?');
        this.props.join(new RoomId_1.default(room, ChatMessage_1.chatType.GROUP));
    };
    return JoinRoomButton;
}(React.Component);
exports.default = JoinRoomButton;