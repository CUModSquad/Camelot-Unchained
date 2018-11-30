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
var __1 = require("../../../");
var React = require("react");
var JoinRoomList_1 = require("./JoinRoomList");
var JoinRoomModal = /** @class */function (_super) {
    __extends(JoinRoomModal, _super);
    function JoinRoomModal(props) {
        var _this = _super.call(this, props) || this;
        _this.getRooms = function () {
            __1.events.once('chat-room-list', _this.gotRooms);
            _this.props.getRooms();
        };
        _this.gotRooms = function (rooms) {
            _this.setState({ rooms: rooms });
        };
        _this.joinRoom = function () {
            var input = _this.refs['roomInput'];
            _this.props.joinRoom(input.value);
        };
        _this.selectRoom = function (room) {
            _this.props.joinRoom(room.jid.split('@')[0]);
        };
        _this.state = _this.initialState();
        return _this;
    }
    JoinRoomModal.prototype.initialState = function () {
        return {
            rooms: [],
            filter: ''
        };
    };
    JoinRoomModal.prototype.render = function () {
        return React.createElement("div", { className: 'modal-dialog join-room-modal' }, React.createElement("div", { className: 'input-field' }, React.createElement("input", { id: 'room', type: 'text', ref: 'roomInput', placeholder: 'Room Name' }), React.createElement(JoinRoomList_1.default, { rooms: this.state.rooms, filter: this.state.filter, selectRoom: this.selectRoom })), React.createElement("button", { className: 'wave-effects btn-flat', onClick: this.joinRoom, ref: 'join' }, "JOIN ROOM"), React.createElement("button", { className: 'wave-effects btn-flat', onClick: this.props.closeModal }, "CANCEL"));
    };
    JoinRoomModal.prototype.componentDidMount = function () {
        var _this = this;
        var input = this.refs['roomInput'];
        var join = this.refs['join'];
        // without this timeout, the label doesn't animate up above the input box
        setTimeout(function () {
            input.focus();
        }, 500);
        join.disabled = true;
        input.addEventListener('keyup', function (ev) {
            join.disabled = input.value.length === 0;
            if (input.value.length > 0 && ev.keyCode === 13) {
                _this.props.joinRoom(input.value);
            } else {
                _this.setState({ filter: input.value });
            }
        });
        this.getRooms();
    };
    return JoinRoomModal;
}(React.Component);
exports.default = JoinRoomModal;