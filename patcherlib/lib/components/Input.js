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
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_emotion_1 = require("react-emotion");
var client_1 = require("../core/client");
var InputWrapper = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var InputView = react_emotion_1.default('input')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  padding: 5px 15px;\n  background-color: transparent;\n  background: rgba(0, 0, 0, 0.1);\n  border: solid 1px rgba(255, 255, 255, 0.2);\n  color: #8F8F8F;\n  font-size: 1em;\n  line-height: 1em;\n  box-shadow: inset 0px 0px 2px 0px rgba(200, 200, 200, 0.1);\n  &::-webkit-input-placeholder {\n    font-size: 1em;\n    line-height: 1em;\n  }\n  &::placeholder {\n    font-size: 1em;\n    line-height: 1em;\n  }\n"], ["\n  flex: 1;\n  padding: 5px 15px;\n  background-color: transparent;\n  background: rgba(0, 0, 0, 0.1);\n  border: solid 1px rgba(255, 255, 255, 0.2);\n  color: #8F8F8F;\n  font-size: 1em;\n  line-height: 1em;\n  box-shadow: inset 0px 0px 2px 0px rgba(200, 200, 200, 0.1);\n  &::-webkit-input-placeholder {\n    font-size: 1em;\n    line-height: 1em;\n  }\n  &::placeholder {\n    font-size: 1em;\n    line-height: 1em;\n  }\n"])));
var Label = react_emotion_1.default('label')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
exports.Input = function (props) {
    var styles = props.styles,
        inputProps = __rest(props, ["styles"]);
    var customStyles = props.styles || {};
    return React.createElement(InputWrapper, { style: customStyles.inputWrapper }, props.label ? React.createElement(Label, { style: customStyles.label }, props.label) : null, React.createElement(InputView, __assign({ innerRef: function innerRef(r) {
            return props.inputRef ? props.inputRef(r) : null;
        }, onClick: function onClick() {
            return client_1.default.RequestInputOwnership();
        }, onBlur: function onBlur() {
            return client_1.default.ReleaseInputOwnership();
        }, style: styles.input }, inputProps)));
};
exports.default = exports.Input;
var templateObject_1, templateObject_2, templateObject_3;