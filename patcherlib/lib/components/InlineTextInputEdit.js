"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var InlineInputEdit_1 = require("./InlineInputEdit");
exports.InlineTextInputEdit = function (props) {
  return React.createElement(InlineInputEdit_1.default, { type: 'text', value: props.value, onSave: props.onSave, styles: props.styles });
};