"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ChatTextParser = /** @class */function () {
    function ChatTextParser(tokens) {
        this.tokens = tokens;
    }
    ChatTextParser.prototype.parse = function (text, callback, index) {
        if (index === void 0) {
            index = 0;
        }
        if (!text) {
            return null;
        }
        var html = [];
        var insert;
        var section;
        var re;
        var match;
        var next;
        if (this.tokens.length > index) {
            re = this.tokens[index].expr;
            next = 0;
            // find all matches for this token
            for (match = re.exec(text); match; match = re.exec(text)) {
                // parse text before match
                if (match.index > next) {
                    section = text.substr(next, match.index - next);
                    insert = this.parse(section, callback, index + 1);
                    html = html.concat(insert);
                }
                // parse the match *only* if its not empty
                if (match[0]) {
                    insert = callback(this.tokens[index].token, match[0], match);
                    if (!insert) {
                        // text didn't match after all, parse again
                        insert = this.parse(match[0], callback, index + 1);
                    }
                    html = html.concat(insert);
                } else {
                    console.warn('bailing, regular expression returning empty match, brain fried, core dumped!');
                    break;
                }
                // track where we are up to
                next = match.index + match[0].length;
            }
            // parse trailing text
            if (next < text.length) {
                section = text.substr(next);
                insert = this.parse(section, callback, index + 1);
                html = html.concat(insert);
            }
            return html;
        }
        // no more tokens, just treat as text
        return callback(ChatTextParser.TEXT, text, null);
    };
    ChatTextParser.TEXT = 0;
    return ChatTextParser;
}();
exports.ChatTextParser = ChatTextParser;
exports.default = ChatTextParser;