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
var AtUserListItem = /** @class */function (_super) {
    __extends(AtUserListItem, _super);
    function AtUserListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.selectUser = function () {
            _this.props.selectUser(_this.props.user);
        };
        return _this;
    }
    AtUserListItem.prototype.render = function () {
        var classes = ['atuser-name'];
        if (this.props.selected) classes.push('atuser-name-selected');
        return React.createElement("div", { className: classes.join(' '), ref: this.props.selected ? function (div) {
                if (div) div.scrollIntoView();
            } : undefined, onClick: this.selectUser }, this.props.user);
    };
    return AtUserListItem;
}(React.Component);
exports.default = AtUserListItem;