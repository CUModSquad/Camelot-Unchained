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
var ParseHighlight_1 = require("./ParseHighlight");
var CombatLogParser = /** @class */function () {
    function CombatLogParser() {
        this._key = 1;
    }
    CombatLogParser.prototype.parseText = function (text) {
        return [React.createElement("span", { key: this._key++ }, text)];
    };
    CombatLogParser.prototype.parseAction = function (text) {
        if (!text) {
            return null;
        }
        var html = [];
        var content = this.parse(text.substr(4).trim());
        html.push(React.createElement("span", { key: this._key++, className: 'chat-line-action' }, "<", content, ">"));
        return html;
    };
    CombatLogParser.prototype.isAction = function (text) {
        if (!text) {
            return false;
        }
        return text.toLowerCase().substr(0, 4) === '/me ';
    };
    CombatLogParser.prototype.parse = function (text) {
        var _this = this;
        if (text === null) return null;
        var keygen = function keygen() {
            return _this._key++;
        };
        var tokens = [];
        // Parsers which need recursion should be first
        tokens.push({ token: CombatLogParser.COLOR, expr: ParseColors_1.default.createRegExp() });
        tokens.push({ token: CombatLogParser.BLINK, expr: ParseBlink_1.default.createRegExp() });
        if (ChatConfig_1.chatConfig.SHOW_MARKDOWN) {
            tokens.push({ token: CombatLogParser.MARKDOWN, expr: ParseMarkdown_1.default.createRegExp() });
        }
        // Parsers with simple search/replace should be last
        tokens.push({ token: CombatLogParser.LINK, expr: ParseLinks_1.default.createRegExp() });
        var highlights = ChatConfig_1.chatConfig.getHighlights();
        if (highlights.length) {
            tokens.push({ token: CombatLogParser.HIGHLIGHT, expr: ParseHighlight_1.default.createRegExp(highlights) });
        }
        // Run through each parser
        var parser = new ChatTextParser_1.ChatTextParser(tokens);
        return parser.parse(text, function (token, text, match) {
            switch (token) {
                case CombatLogParser.COLOR:
                    return ParseColors_1.default.fromText(text, keygen, match, _this);
                case CombatLogParser.BLINK:
                    return ParseBlink_1.default.fromText(text, keygen, match, _this);
                case CombatLogParser.MARKDOWN:
                    return ParseMarkdown_1.default.fromText(text, keygen, match, _this);
                case CombatLogParser.LINK:
                    return ParseLinks_1.default.fromText(text, keygen);
                case CombatLogParser.HIGHLIGHT:
                    return ParseHighlight_1.default.fromText(text, keygen);
            }
            // treat everything else as just text
            return _this.parseText(text);
        });
    };
    CombatLogParser.LINK = ChatTextParser_1.ChatTextParser.TEXT + 1;
    CombatLogParser.MARKDOWN = ChatTextParser_1.ChatTextParser.TEXT + 3;
    CombatLogParser.COLOR = ChatTextParser_1.ChatTextParser.TEXT + 4;
    CombatLogParser.BLINK = ChatTextParser_1.ChatTextParser.TEXT + 5;
    CombatLogParser.HIGHLIGHT = ChatTextParser_1.ChatTextParser.TEXT + 7;
    return CombatLogParser;
}();
exports.default = CombatLogParser;