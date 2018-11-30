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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_emotion_1 = require("react-emotion");
var Button = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 5px 15px;\n  background-color: #666;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    background-color: #777;\n  }\n  &:active {\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    background-color: #AAA;\n  }\n"], ["\n  padding: 5px 15px;\n  background-color: #666;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    background-color: #777;\n  }\n  &:active {\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    background-color: #AAA;\n  }\n"])));
var ButtonDisabled = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 5px 15px;\n  background-color: #555;\n  color: #777;\n  cursor: default;\n  user-select: none;\n  -webkit-user-select: none;\n"], ["\n  padding: 5px 15px;\n  background-color: #555;\n  color: #777;\n  cursor: default;\n  user-select: none;\n  -webkit-user-select: none;\n"])));
exports.RaisedButton = function (props) {
    var customStyles = props.styles;
    if (props.disabled) {
        return React.createElement(ButtonDisabled, null, props.children);
    }
    return React.createElement(Button, __assign({}, props), props.children);
};
exports.default = exports.RaisedButton;
var templateObject_1, templateObject_2;