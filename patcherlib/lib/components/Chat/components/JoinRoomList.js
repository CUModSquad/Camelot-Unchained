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
var JoinRoomListItem_1 = require("./JoinRoomListItem");
var JoinRoomList = /** @class */function (_super) {
    __extends(JoinRoomList, _super);
    function JoinRoomList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onmousedown = function (e) {
            var el = e.target;
            if (el.className !== 'room-name') {
                // clicked outside dropdown list, hide it
                // until the filter text changes
                _this.hidden = _this.props.filter;
                _this.forceUpdate();
            }
        };
        return _this;
    }
    JoinRoomList.prototype.render = function () {
        var _this = this;
        var rooms = this.props.rooms;
        var filter = this.props.filter.toLowerCase();
        var names = [];
        if (this.hidden !== filter) {
            this.hidden = undefined; // filter changed, cancel hidden
            if (rooms.length && filter.length) {
                rooms.forEach(function (room, index) {
                    var name = room.jid.split('@')[0];
                    if (filter.length === 0 || name.toLowerCase().indexOf(filter) !== -1) {
                        names.push(React.createElement(JoinRoomListItem_1.default, { room: room, key: index, selectRoom: _this.props.selectRoom }));
                    }
                });
            }
        }
        return React.createElement("div", { className: 'room-list-anchor', ref: 'anchor', style: { display: names.length ? 'block' : 'none' } }, React.createElement("div", { className: 'room-list' }, names));
    };
    JoinRoomList.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.onmousedown, true);
    };
    JoinRoomList.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.onmousedown, true);
    };
    return JoinRoomList;
}(React.Component);
exports.default = JoinRoomList;