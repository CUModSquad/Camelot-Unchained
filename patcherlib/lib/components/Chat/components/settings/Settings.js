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
var Animate_1 = require("../../lib/Animate");
var ChatDisplay_1 = require("./ChatDisplay");
var Settings = /** @class */function (_super) {
    __extends(Settings, _super);
    function Settings(props) {
        var _this = _super.call(this, props) || this;
        _this.generateSection = function (sectionName) {
            if (sectionName === '') return null;
            return React.createElement("div", { key: sectionName, className: 'fly-out' }, React.createElement(ChatDisplay_1.default, null));
        };
        _this.navigate = function (sectionName) {
            var name = _this.state.sectionName === sectionName ? '' : sectionName;
            _this.setState({
                section: _this.generateSection(name),
                sectionName: name,
                checked: _this.state.checked
            });
        };
        _this.state = {
            section: null,
            sectionName: '',
            checked: true
        };
        return _this;
    }
    Settings.prototype.render = function () {
        var flyout = this.state.section;
        return React.createElement("div", { className: 'chat-settings-menu' }, React.createElement("ul", { className: 'chat-settings-list' }, React.createElement("li", { onClick: this.navigate.bind(this, 'chat-display'), key: 1 }, "Chat Display", React.createElement("br", null), React.createElement("i", null, "Change what you see in the chatbox.")), React.createElement("li", { onClick: this.navigate.bind(this, ''), key: 2 }, "Rooms", React.createElement("br", null), React.createElement("i", null, "Available rooms & autojoin settings."))), React.createElement(Animate_1.default, { animationEnter: 'slideInLeft', animationLeave: 'slideOutLeft', durationEnter: 300, durationLeave: 300 }, flyout));
    };
    return Settings;
}(React.Component);
exports.default = Settings;