"use strict";
/**
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
var __1 = require("../");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  pointer-events: all;\n  user-select: none;\n  -webkit-user-select: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 800px;\n  height: 450px;\n  background-color: rgba(0, 0, 0, 0.8);\n  border: 1px solid ", ";\n  position: relative;\n"], ["\n  pointer-events: all;\n  user-select: none;\n  -webkit-user-select: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 800px;\n  height: 450px;\n  background-color: rgba(0, 0, 0, 0.8);\n  border: 1px solid ", ";\n  position: relative;\n"])), __1.utils.lightenColor('#202020', 30));
var Header = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  padding: 5px 0;\n  text-align: center;\n  color: white;\n  background-color: #202020;\n  border-bottom: 1px solid ", ";\n"], ["\n  width: 100%;\n  padding: 5px 0;\n  text-align: center;\n  color: white;\n  background-color: #202020;\n  border-bottom: 1px solid ", ";\n"])), __1.utils.lightenColor('#202020', 30));
var Content = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  color: white;\n  padding: 5px;\n  overflow: auto;\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n  &::-webkit-scrollbar {\n    width: 5px;\n    background-color: #111;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #666;\n    border-radius: 5px;\n  }\n"], ["\n  flex: 1;\n  color: white;\n  padding: 5px;\n  overflow: auto;\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n  &::-webkit-scrollbar {\n    width: 5px;\n    background-color: #111;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: #666;\n    border-radius: 5px;\n  }\n"])));
var Footer = react_emotion_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 5px 0;\n  background-color: #202020;\n  text-align: center;\n  border-top: 1px solid ", ";\n"], ["\n  padding: 5px 0;\n  background-color: #202020;\n  text-align: center;\n  border-top: 1px solid ", ";\n"])), __1.utils.lightenColor('#202020', 30));
var Dismiss = react_emotion_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var Close = react_emotion_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  top: 2;\n  right: 5;\n  color: #CDCDCD;\n  font-size: 20px;\n  margin-right: 5px;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    color: #BBB;\n  }\n"], ["\n  position: absolute;\n  top: 2;\n  right: 5;\n  color: #CDCDCD;\n  font-size: 20px;\n  margin-right: 5px;\n  cursor: pointer;\n  user-select: none;\n  &:hover {\n    color: #BBB;\n  }\n"])));
exports.MOTD = function (props) {
    var customStyles = props.styles || {};
    return React.createElement(Container, { style: customStyles.MOTD }, React.createElement(Header, { style: customStyles.header }, React.createElement("div", { className: '' }, "Welcome to Camelot Unchained"), React.createElement(Close, { style: customStyles.close, onClick: props.onClose }, React.createElement("i", { className: 'fa fa-times click-effect' }))), React.createElement(Content, { style: customStyles.content }, props.children), React.createElement(Footer, { style: customStyles.footer }, React.createElement(Dismiss, { style: customStyles.dismiss, onClick: props.onDismiss24 }, "Dismiss For 24h")));
};
exports.default = exports.MOTD;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;