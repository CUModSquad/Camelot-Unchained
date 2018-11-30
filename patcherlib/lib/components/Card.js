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
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #3C3C3C;\n  color: #ECECEC;\n  padding: 10px;\n  margin: 1em;\n  border-radius: 2px;\n"], ["\n  background-color: #3C3C3C;\n  color: #ECECEC;\n  padding: 10px;\n  margin: 1em;\n  border-radius: 2px;\n"])));
var LevelOne = react_emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n"], ["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n"])));
var LevelTwo = react_emotion_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n"], ["\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n"])));
var LevelThree = react_emotion_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n"], ["\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n"])));
var LevelFour = react_emotion_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n"], ["\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n"])));
var LevelFive = react_emotion_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n"], ["\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n"])));
var CardLevel;
(function (CardLevel) {
    CardLevel[CardLevel["One"] = 0] = "One";
    CardLevel[CardLevel["Two"] = 1] = "Two";
    CardLevel[CardLevel["Three"] = 2] = "Three";
    CardLevel[CardLevel["Four"] = 3] = "Four";
    CardLevel[CardLevel["Five"] = 4] = "Five";
})(CardLevel = exports.CardLevel || (exports.CardLevel = {}));
exports.Card = function (props) {
    var level = props.level || CardLevel.One;
    var levelCSS = LevelOne;
    switch (level) {
        case CardLevel.Two:
            levelCSS = LevelTwo;
            break;
        case CardLevel.Three:
            levelCSS = LevelThree;
            break;
        case CardLevel.Four:
            levelCSS = LevelFour;
            break;
        case CardLevel.Five:
            levelCSS = LevelFive;
            break;
    }
    return React.createElement(exports.Card, { className: levelCSS }, props.children);
};
exports.default = exports.Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;