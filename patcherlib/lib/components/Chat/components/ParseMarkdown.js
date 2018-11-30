"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function fromText(text, keygen, match, parser) {
    if (match && (match[2] || match[4])) {
        var matchBeginChar = match[1] ? match[1] : '';
        var matchEndChar = match[6] ? match[6] : '';
        var matchCount = match[2] ? match[2].length : match[4].length;
        var matchText = match[2] ? matchBeginChar + match[3] + matchEndChar : matchBeginChar + match[5] + matchEndChar;
        if (matchCount === 1) {
            return [React.createElement("i", { key: keygen() }, parser.parse(matchText))];
        }
        return [React.createElement("b", { key: keygen() }, parser.parse(matchText))];
    }
}
function createRegExp() {
    return (/(^|\s)(?:(\*\*|\*)([^\*]+)\2)|(?:(__|_)([^_]+)\4)($|\s)/g
    );
}
exports.default = {
    fromText: fromText,
    createRegExp: createRegExp
};