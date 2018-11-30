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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_emotion_1 = require("react-emotion");
var spin = react_emotion_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from: {\n    transform: rotate(0deg);\n  }\n  to: {\n    transform: rotate(360deg)\n  }\n"], ["\n  from: {\n    transform: rotate(0deg);\n  }\n  to: {\n    transform: rotate(360deg)\n  }\n"])));
var SpinnerView = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 50%;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  border: 0.25rem solid rgba(255, 255, 255, 0.2);\n  border-top-color: #ECECEC;\n  transition: all 0.3s;\n  animation-name: ", ";\n  -webkkit-animation-name: ", ";\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-backface-visibility: hidden;\n  &:hover {\n    border-top-color: #3FD0B0;\n  }\n"], ["\n  border-radius: 50%;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  border: 0.25rem solid rgba(255, 255, 255, 0.2);\n  border-top-color: #ECECEC;\n  transition: all 0.3s;\n  animation-name: ", ";\n  -webkkit-animation-name: ", ";\n  animation-duration: 1s;\n  -webkit-animation-duration: 1s;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-backface-visibility: hidden;\n  &:hover {\n    border-top-color: #3FD0B0;\n  }\n"])), spin, spin);
exports.Spinner = function (props) {
    var customStyles = props.styles || {};
    return React.createElement(SpinnerView, { style: customStyles.spinner });
};
exports.default = exports.Spinner;
var templateObject_1, templateObject_2;