"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var URLWhitelist_1 = require("./URLWhitelist");
var URLRegExp_1 = require("./URLRegExp");
var ChatConfig_1 = require("./ChatConfig");
function fixupLink(url) {
    var newUrl = url;
    if (url.indexOf('www.') === 0) {
        newUrl = 'http://' + url;
    }
    return newUrl;
}
function triggerAutoScroll() {
    var event = new Event('auto-scroll');
    window.dispatchEvent(event);
}
// tslint:disable
function fromText(text, keygen) {
    var videoMatch = ChatConfig_1.chatConfig.EMBED_VIDEOS ? URLWhitelist_1.default.isVideo(text) : null;
    var vineMatch = ChatConfig_1.chatConfig.EMBED_VIDEOS ? URLWhitelist_1.default.isVine(text) : null;
    var href = fixupLink(text);
    // Video link (youtube)
    if (videoMatch) {
        return [React.createElement("a", { key: keygen(), className: 'chat-line-message', target: '_blank', href: href }, React.createElement("iframe", { className: 'chat-line-video', src: videoMatch, allowFullScreen: true }))];
    } else if (vineMatch) {
        // Vine link (vine)
        return [React.createElement("a", { key: keygen(), className: 'chat-line-message', target: '_blank', href: href }, React.createElement("iframe", { className: 'chat-line-vine', src: vineMatch }), React.createElement("script", { src: 'https://platform.vine.co/static/scripts/embed.js' }))];
    } else if (ChatConfig_1.chatConfig.EMBED_IMAGES && URLWhitelist_1.default.isImage(text) && URLWhitelist_1.default.ok(text)) {
        // Image link (whitelisted)
        return [React.createElement("a", { key: keygen(), className: 'chat-line-message', target: '_blank', href: href }, React.createElement("img", { className: 'chat-line-image', onLoad: triggerAutoScroll, src: text, title: text }))];
    }
    // all other links
    return [React.createElement("a", { key: keygen(), className: 'chat-line-message', target: '_blank', href: href }, text)];
}
function createRegExp() {
    return URLRegExp_1.default.create();
}
exports.default = {
    fromText: fromText,
    createRegExp: createRegExp
};