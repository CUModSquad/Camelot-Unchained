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
var Tab_1 = require("./Tab");
var Tabs = /** @class */function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.render = function () {
        var content = [];
        var tabs = ['rooms', 'users', 'settings'];
        for (var i = 0; i < tabs.length; i++) {
            content.push(React.createElement(Tab_1.default, { key: tabs[i], id: tabs[i], select: this.props.select, selected: this.props.current === tabs[i] }));
        }
        return React.createElement("ul", { className: 'chat-tabs' }, content);
    };
    return Tabs;
}(React.Component);
exports.default = Tabs;