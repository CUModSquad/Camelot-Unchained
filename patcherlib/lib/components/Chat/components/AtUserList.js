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
var AtUserListItem_1 = require("./AtUserListItem");
var AtUserList = /** @class */function (_super) {
    __extends(AtUserList, _super);
    function AtUserList(props) {
        return _super.call(this, props) || this;
    }
    AtUserList.prototype.render = function () {
        var _this = this;
        var nameList = [];
        if (this.props.users.length > 0) {
            this.props.users.forEach(function (user, index) {
                var selected = _this.props.selectedIndex === index ? true : false;
                nameList.push(React.createElement(AtUserListItem_1.default, { user: user, key: index, selected: selected, selectUser: _this.props.selectUser }));
            });
        }
        return React.createElement("div", { className: 'atuser-list-anchor', ref: 'anchor', style: { display: nameList.length ? 'block' : 'none' } }, React.createElement("div", { className: 'atuser-list' }, nameList));
    };
    return AtUserList;
}(React.Component);
exports.default = AtUserList;