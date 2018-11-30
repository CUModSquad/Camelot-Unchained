"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var React = require("react");
var ChatConfig_1 = require("./ChatConfig");
function fromText(text, keygen, match, parser) {
    var textColor1 = match[1];
    var textColor2 = match[2];
    var bgColor1 = match[3];
    var bgColor2 = match[4];
    var matchText = match[5];
    var id = makeid();
    if (ChatConfig_1.chatConfig.SHOW_COLORS) {
        return [React.createElement("span", { key: keygen(), dangerouslySetInnerHTML: { __html: animationStyle(textColor1, textColor2, bgColor1, bgColor2, id) } }), React.createElement("span", { key: keygen(), className: "blink-" + id }, parser.parse(matchText))];
    }
    return [React.createElement("span", { key: keygen() }, this.parse(matchText))];
}
var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function makeid() {
    var text = '';
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }return text;
}
function animationStyle(textColor1, textColor2, bgColor1, bgColor2, id) {
    return "<style type='text/css' scoped>\n    @keyframes blink-" + id + " {\n      from { color: " + textColor1 + "; background-color: " + bgColor1 + "; }\n      to { color: " + textColor2 + "; background-color: " + bgColor2 + "; }\n    }\n    @-webkit-keyframes blink-" + id + " {\n      from { color: " + textColor1 + "; background-color: " + bgColor1 + "; }\n      to { color: " + textColor2 + "; background-color: " + bgColor2 + "; }\n    }\n    .blink-" + id + " {\n      -webkit-animation: blink-" + id + " 1s linear infinite;\n      -moz-animation: blink-" + id + " 1s linear infinite;\n      animation: blink-" + id + " 1s linear infinite;\n    }\n  </style>";
}
// ^:textcolor-fadetocolor:bgcolor-fadetocolor:^ text and stuff
// tslint:disable
function createRegExp() {
    return (/(?=\^::?#?[A-Za-z0-9]+-)\^:(?:([A-Za-z]+|#[A-Fa-f0-9]{3}|#[A-Fa-f0-9]{6})-([A-Za-z]+|#[A-Fa-f0-9]{3}|#[A-Fa-f0-9]{6}))?:?(?:([A-Za-z]+|#[A-Fa-f0-9]{3}|#[A-Fa-f0-9]{6})-([A-Za-z]+|#[A-Fa-f0-9]{3}|#[A-Fa-f0-9]{6}))?:\^([\S\s]+)$/g
    );
}
exports.default = {
    fromText: fromText,
    createRegExp: createRegExp
};