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
 * <ConfirmDialog onConfirm={() => Do something }
 *   onCancel={() => Do something}
 *   content={(props: any) => <div>Are you sure?</div>}
 *   cancelOnClickOutside={true} >
 *   <button>Click Me!</button>
 * </ConfirmDialog>
 *
 */
var React = require("react");
var react_emotion_1 = require("react-emotion");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.4);\n"], ["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.4);\n"])));
var Dialog = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: #444;\n  min-width: 250px;\n  min-height: 100px;\n  display: flex;\n  flex-direction: column;\n"], ["\n  background-color: #444;\n  min-width: 250px;\n  min-height: 100px;\n  display: flex;\n  flex-direction: column;\n"])));
var Content = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 10px;\n  flex: 1;\n"], ["\n  padding: 10px;\n  flex: 1;\n"])));
var Buttons = react_emotion_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex: 0;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  padding: 10px 20px;\n"], ["\n  display: flex;\n  flex: 0;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  padding: 10px 20px;\n"])));
var ConfirmButton = react_emotion_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 5px 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  padding: 5px 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"])));
var CancelButton = react_emotion_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  padding: 5px 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  padding: 5px 10px;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"])));
var ConfirmDialog = /** @class */function (_super) {
    __extends(ConfirmDialog, _super);
    function ConfirmDialog(props) {
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
        _this.confirm = function () {
            _this.hide();
            _this.props.onConfirm();
        };
        _this.cancel = function () {
            _this.hide();
            _this.props.onCancel();
        };
        _this.onMouseEnter = function () {
            _this.mouseOver = true;
        };
        _this.onMouseleave = function () {
            _this.mouseOver = false;
        };
        _this.windowMouseDown = function () {
            if (_this.state.cancelOnClickOutside && !_this.state.hidden && !_this.mouseOver) {
                _this.cancel();
            }
        };
        _this.clicked = function () {
            if (!_this.state.hidden) return;
            _this.show();
            window.addEventListener('mousedown', _this.windowMouseDown);
        };
        _this.state = {
            hidden: true,
            cancelOnClickOutside: _this.props.cancelOnClickOutside || false
        };
        return _this;
    }
    ConfirmDialog.prototype.render = function () {
        var customStyles = this.props.styles || {};
        return React.createElement("div", { onClick: this.clicked, style: { display: 'inline-block' } }, this.props.children, this.state.hidden ? null : React.createElement(Container, { style: customStyles.container }, React.createElement(Dialog, { style: customStyles.dialog, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseleave }, React.createElement(Content, { style: customStyles.content }, React.createElement(this.props.content, __assign({}, this.props.contentProps))), React.createElement(Buttons, { style: customStyles.buttons }, React.createElement(ConfirmButton, { style: customStyles.confirmButton, onClick: this.confirm }, this.props.confirmButtonContent || 'Confirm'), React.createElement(CancelButton, { style: customStyles.cancelButton, onClick: this.cancel }, this.props.cancelButtonContent || 'Cancel')))));
    };
    ConfirmDialog.prototype.componentWillUnmount = function () {
        window.removeEventListener('mousedown', this.windowMouseDown);
    };
    return ConfirmDialog;
}(React.Component);
exports.ConfirmDialog = ConfirmDialog;
exports.default = ConfirmDialog;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;