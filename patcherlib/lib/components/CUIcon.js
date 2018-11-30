"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var defaultStyle = {
    position: 'absolute',
    height: '100%'
};
function renderCUIcon(props) {
    var internalProps = props.props || {};
    return React.createElement("span", { style: __assign({ position: 'relative' }, props.iconContainer), className: props.className }, React.createElement("span", { className: props.icon, style: __assign({}, defaultStyle, props.iconStyle) }), React.createElement("div", __assign({ style: props.iconContainer }, internalProps)));
}
exports.renderCUIcon = renderCUIcon;
exports.CUIcon = renderCUIcon;
exports.default = exports.CUIcon;