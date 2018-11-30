"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function fromText(text, keygen) {
    // events.fire('chat-play-sound-highlight');
    return [React.createElement("span", { key: keygen(), className: 'chat-room-highlight' }, text)];
}
function createRegExp(highlight) {
    var regex;
    highlight.forEach(function (h) {
        if (!regex) {
            regex = '(?:^|\\s)@?' + h + ':?(?:$|\\s)';
        } else {
            regex += '|(?:^|\\s)@?' + h + ':?(?:$|\\s)';
        }
    });
    return new RegExp(regex, 'g');
}
exports.default = {
    fromText: fromText,
    createRegExp: createRegExp
};