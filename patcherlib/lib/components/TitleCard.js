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
var moment = require("moment");
var react_emotion_1 = require("react-emotion");
var Card_1 = require("./Card");
var Card_2 = require("./Card");
exports.CardLevel = Card_2.CardLevel;
var Title = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 1.2em;\n  color: #AAA;\n  width: 100%;\n"], ["\n  font-size: 1.2em;\n  color: #AAA;\n  width: 100%;\n"])));
var Date = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 0.8em;\n  color: #777;\n  text-align: right;\n"], ["\n  font-size: 0.8em;\n  color: #777;\n  text-align: right;\n"])));
exports.TitleCard = function (props) {
    return React.createElement(Card_1.default, __assign({}, props), React.createElement(Title, null, props.title), props.children, props.date ? React.createElement(Date, null, moment(props.date).fromNow()) : null);
};
exports.default = exports.TitleCard;
var templateObject_1, templateObject_2;