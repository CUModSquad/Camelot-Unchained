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
var Tabs_1 = require("./Tabs");
var Rooms_1 = require("./Rooms");
var JoinRoomButton_1 = require("./JoinRoomButton");
var Users_1 = require("./Users");
var Settings_1 = require("./settings/Settings");
exports.defaultInfoState = {
    currentTab: 'rooms'
};
var Info = /** @class */function (_super) {
    __extends(Info, _super);
    function Info(props) {
        var _this = _super.call(this, props) || this;
        _this.getRooms = function () {
            _this.props.chat.getRooms(); // handle callback
        };
        _this.select = function (tab) {
            if (_this.state.currentTab !== tab) {
                _this.setState({ currentTab: tab });
            }
        };
        _this.state = exports.defaultInfoState;
        return _this;
    }
    Info.prototype.render = function () {
        var content = [];
        switch (this.state.currentTab) {
            case 'settings':
                content.push(React.createElement(Settings_1.default, { key: 'setings' }));
                break;
            case 'users':
                content.push(React.createElement(Users_1.default, { key: 'users', room: this.props.chat.getRoom(this.props.currentRoom) }));
                break;
            case 'rooms':
            default:
                content.push(React.createElement(Rooms_1.default, { key: 'rooms', rooms: this.props.chat.rooms, current: this.props.currentRoom, select: this.props.selectRoom, leave: this.props.leaveRoom }));
                content.push(React.createElement(JoinRoomButton_1.default, { key: 'join-button', join: this.props.selectRoom, getRooms: this.getRooms }));
                break;
        }
        return React.createElement("div", { className: 'chat-info' }, React.createElement(Tabs_1.default, { current: this.state.currentTab, select: this.select }), content);
    };
    return Info;
}(React.Component);
exports.default = Info;