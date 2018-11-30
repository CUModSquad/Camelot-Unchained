"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ChatConfig_1 = require("./ChatConfig");
function fromText(text, keygen, match, parser) {
    var textColor = match[1];
    var bgColor = match[2];
    var matchText = match[3];
    if (ChatConfig_1.chatConfig.SHOW_COLORS) {
        return [React.createElement("span", { key: keygen(), style: { color: textColor, backgroundColor: bgColor } }, parser.parse(matchText))];
    }
    return [React.createElement("span", { key: keygen() }, parser.parse(matchText))];
}
// tslint:disable
function createRegExp() {
    //return /::([A-Za-z]+|#[A-Fa-f0-9]{3,6})::([\S\s]+)$/g;
    return (/(?=:::?#?[A-Za-z0-9]+)::([A-Za-z]+|#[A-Fa-f0-9]{3}|#[A-Fa-f0-9]{6})?:?([A-Za-z]+|#[A-Fa-f0-9]{3}|#[A-Fa-f0-9]{6})?::([\S\s]+)$/g
    );
}
exports.default = {
    fromText: fromText,
    createRegExp: createRegExp
};