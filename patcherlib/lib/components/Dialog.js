"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
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
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Usage:
 *
 * Wrap any element with this component and you'll get a confirmation
 * dialog popup when the element inside is clicked.
 *
 * <Dialog content={(props: any) => <div>Are you sure?</div>}
 *   cancelOnClickOutside={true} >
 *   <button>Click Me!</button>
 * </Dialog>
 *
 */
var React = require("react");
var react_emotion_1 = require("react-emotion");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 99999;\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 99999;\n"])));
var DialogContainer = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #444;\n  min-width: 250px;\n  min-height: 100px;\n  display: flex;\n  flex-direction: column;\n"], ["\n  background-color: #444;\n  min-width: 250px;\n  min-height: 100px;\n  display: flex;\n  flex-direction: column;\n"])));
var ContentWrapper = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var Dialog = /** @class */function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        _this.mouseOver = false;
        _this.show = function () {
            _this.setState({
                hidden: false
            });
            _this.mouseOver = false;
        };
        _this.hide = function () {
            _this.setState({
                hidden: true
            });
            window.removeEventListener('mousedown', _this.windowMouseDown);
            _this.mouseOver = false;
        };
        _this.onMouseEnter = function () {
            _this.mouseOver = true;
        };
        _this.onMouseleave = function () {
            _this.mouseOver = false;
        };
        _this.windowMouseDown = function () {
            if (_this.state.closeOnClickOutside && !_this.state.hidden && !_this.mouseOver) {
                _this.hide();
            }
        };
        _this.clicked = function () {
            if (!_this.state.hidden) return;
            _this.show();
            window.addEventListener('mousedown', _this.windowMouseDown);
        };
        _this.state = {
            hidden: true,
            closeOnClickOutside: _this.props.closeOnClickOutside || false
        };
        return _this;
    }
    Dialog.prototype.render = function () {
        var customStyle = this.props.styles || {};
        return React.createElement("div", { onClick: this.clicked, style: { display: 'inline-block' } }, this.props.children, this.state.hidden ? null : React.createElement(Container, { style: customStyle.container }, React.createElement(DialogContainer, { style: customStyle.dialog, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseleave }, React.createElement(ContentWrapper, { style: customStyle.contentWrapper }, React.createElement(this.props.content, __assign({}, this.props.contentProps))))));
    };
    Dialog.prototype.componentWillUnmount = function () {
        window.removeEventListener('mousedown', this.windowMouseDown);
    };
    return Dialog;
}(React.Component);
exports.Dialog = Dialog;
exports.default = Dialog;
var templateObject_1, templateObject_2, templateObject_3;