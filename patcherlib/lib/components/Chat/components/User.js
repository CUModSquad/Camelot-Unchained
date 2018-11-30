"use strict";

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
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var __1 = require("../../../");
var React = require("react");
var UserInfo = /** @class */function () {
    function UserInfo(roomName, name, isCSE) {
        this.roomName = roomName;
        this.name = name;
        this.isCSE = isCSE;
    }
    return UserInfo;
}();
exports.UserInfo = UserInfo;
var User = /** @class */function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PM = function () {
            __1.events.fire('cse-chat-private-message', _this.props.info.name);
        };
        return _this;
    }
    User.prototype.render = function () {
        var classes = ['chat-info-user'];
        if (this.props.selected) classes.push('chat-info-user-selected');
        if (this.props.info.isCSE) classes.push('chat-info-cseuser');
        return React.createElement("div", { className: classes.join(' '), onClick: this.PM }, this.props.info.name);
    };
    return User;
}(React.Component);
exports.default = User;