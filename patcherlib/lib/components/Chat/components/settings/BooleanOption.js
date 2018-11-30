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
var BooleanOption = /** @class */function (_super) {
    __extends(BooleanOption, _super);
    function BooleanOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clicked = function () {
            _this.props.onChecked(_this.props.optionKey, !_this.props.isChecked);
        };
        return _this;
    }
    BooleanOption.prototype.render = function () {
        return React.createElement("div", { className: 'row' }, React.createElement("div", { className: 'col s6' }, this.props.title), React.createElement("div", { className: 'col s6' }, React.createElement("div", { className: 'switch' }, React.createElement("label", null, "No", React.createElement("input", { type: 'checkbox', defaultChecked: this.props.isChecked, onClick: this.clicked }), React.createElement("span", { className: 'lever' }), "Yes"))), React.createElement("div", { className: 'col s12' }, React.createElement("i", null, this.props.description)));
    };
    return BooleanOption;
}(React.Component);
exports.default = BooleanOption;