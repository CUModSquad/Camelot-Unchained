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
var JoinRoomListItem = /** @class */function (_super) {
    __extends(JoinRoomListItem, _super);
    function JoinRoomListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectRoom = function () {
            _this.props.selectRoom(_this.props.room);
        };
        return _this;
    }
    JoinRoomListItem.prototype.render = function () {
        var name = this.props.room.jid.split('@')[0];
        return React.createElement("div", { className: 'room-name', onClick: this.selectRoom }, name);
    };
    return JoinRoomListItem;
}(React.Component);
exports.default = JoinRoomListItem;