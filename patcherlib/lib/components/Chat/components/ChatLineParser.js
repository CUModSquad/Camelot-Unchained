"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ChatTextParser_1 = require("./ChatTextParser");
var ChatConfig_1 = require("./ChatConfig");
var ParseColors_1 = require("./ParseColors");
var ParseBlink_1 = require("./ParseBlink");
var ParseMarkdown_1 = require("./ParseMarkdown");
var ParseLinks_1 = require("./ParseLinks");
var ParseRooms_1 = require("./ParseRooms");
var ParseEmoji_1 = require("./ParseEmoji");
var ParseHighlight_1 = require("./ParseHighlight");
var ParseNicks_1 = require("./ParseNicks");
var ChatLineParser = /** @class */function () {
    function ChatLineParser() {
        this._key = 1;
    }
    ChatLineParser.prototype.parseText = function (text) {
        return [React.createElement("span", { key: this._key++ }, text)];
    };
    ChatLineParser.prototype.parseAction = function (text) {
        var html = [];
        var content = this.parse(text.substr(4).trim());
        html.push(React.createElement("span", { key: this._key++, className: 'chat-line-action' }, "<", content, ">"));
        return html;
    };
    ChatLineParser.prototype.isAction = function (text) {
        return text.toLowerCase().substr(0, 4) === '/me ';
    };
    ChatLineParser.prototype.parse = function (text) {
        var _this = this;
        if (!text) {
            return null;
        }
        var keygen = function keygen() {
            return _this._key++;
        };
        var tokens = [];
        // Parsers which need recursion should be first
        tokens.push({ token: ChatLineParser.COLOR, expr: ParseColors_1.default.createRegExp() });
        tokens.push({ token: ChatLineParser.BLINK, expr: ParseBlink_1.default.createRegExp() });
        if (ChatConfig_1.chatConfig.SHOW_MARKDOWN) {
            tokens.push({ token: ChatLineParser.MARKDOWN, expr: ParseMarkdown_1.default.createRegExp() });
        }
        // Parsers with simple search/replace should be last
        tokens.push({ token: ChatLineParser.LINK, expr: ParseLinks_1.default.createRegExp() });
        tokens.push({ token: ChatLineParser.ROOM, expr: ParseRooms_1.default.createRegExp() });
        if (ChatConfig_1.chatConfig.SHOW_EMOTICONS) {
            tokens.push({ token: ChatLineParser.EMOJI, expr: ParseEmoji_1.default.createRegExp() });
        }
        var highlights = ChatConfig_1.chatConfig.getHighlights();
        if (highlights.length) {
            tokens.push({ token: ChatLineParser.HIGHLIGHT, expr: ParseHighlight_1.default.createRegExp(highlights) });
        }
        var nicks = ParseNicks_1.default.createRegExp();
        if (nicks) {
            tokens.push({ token: ChatLineParser.NICK, expr: nicks });
        }
        // Run through each parser
        var parser = new ChatTextParser_1.ChatTextParser(tokens);
        return parser.parse(text, function (token, text, match) {
            switch (token) {
                case ChatLineParser.COLOR:
                    return ParseColors_1.default.fromText(text, keygen, match, _this);
                case ChatLineParser.BLINK:
                    return ParseBlink_1.default.fromText(text, keygen, match, _this);
                case ChatLineParser.MARKDOWN:
                    return ParseMarkdown_1.default.fromText(text, keygen, match, _this);
                case ChatLineParser.LINK:
                    return ParseLinks_1.default.fromText(text, keygen);
                case ChatLineParser.ROOM:
                    return ParseRooms_1.default.fromText(text, keygen);
                case ChatLineParser.EMOJI:
                    return ParseEmoji_1.default.fromText(text, keygen);
                case ChatLineParser.HIGHLIGHT:
                    return ParseHighlight_1.default.fromText(text, keygen);
                case ChatLineParser.NICK:
                    return ParseNicks_1.default.fromText(text, keygen);
            }
            // treat everything else as just text
            return _this.parseText(text);
        });
    };
    ChatLineParser.LINK = ChatTextParser_1.ChatTextParser.TEXT + 1;
    ChatLineParser.EMOJI = ChatTextParser_1.ChatTextParser.TEXT + 2;
    ChatLineParser.MARKDOWN = ChatTextParser_1.ChatTextParser.TEXT + 3;
    ChatLineParser.COLOR = ChatTextParser_1.ChatTextParser.TEXT + 4;
    ChatLineParser.BLINK = ChatTextParser_1.ChatTextParser.TEXT + 5;
    ChatLineParser.ROOM = ChatTextParser_1.ChatTextParser.TEXT + 6;
    ChatLineParser.HIGHLIGHT = ChatTextParser_1.ChatTextParser.TEXT + 7;
    ChatLineParser.NICK = ChatTextParser_1.ChatTextParser.TEXT + 8;
    return ChatLineParser;
}();
exports.default = ChatLineParser;