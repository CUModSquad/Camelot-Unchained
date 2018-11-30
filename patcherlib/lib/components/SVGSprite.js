"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var _this = undefined;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.SVGSprite = function (props) {
  return React.createElement("svg", { className: _this.props.svgClass || '', dangerouslySetInnerHTML: { __html: "<use xlink:href=" + _this.props.sprite + "></use>" } });
};
exports.default = exports.SVGSprite;