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
var __1 = require("../");
var SVGSprite_1 = require("./SVGSprite");
var Icon = react_emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: white;\n  height: 100%;\n  width: 100%;\n"], ["\n  fill: white;\n  height: 100%;\n  width: 100%;\n"])));
exports.ClassIcon = function (props) {
    switch (props.playerClass) {
        case __1.Archetype.Blackguard:
            return React.createElement(SVGSprite_1.default, { sprite: 'images/class-icons.svg#archer-class-icon', svgClass: Icon });
        case __1.Archetype.BlackKnight:
            return React.createElement(SVGSprite_1.default, { sprite: 'images/class-icons.svg#heavy-class-icon', svgClass: Icon });
        case __1.Archetype.Empath:
            return React.createElement(SVGSprite_1.default, { sprite: 'images/class-icons.svg#heal-class-icon', svgClass: Icon });
        default:
            return React.createElement("h1", null, "Invalid Class");
    }
};
exports.default = exports.ClassIcon;
var templateObject_1;