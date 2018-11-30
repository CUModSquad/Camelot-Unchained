"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var attributeType;
(function (attributeType) {
  attributeType[attributeType["PRIMARY"] = 1] = "PRIMARY";
  attributeType[attributeType["SECONDARY"] = 2] = "SECONDARY";
  attributeType[attributeType["DERIVED"] = 3] = "DERIVED";
})(attributeType || (attributeType = {}));
exports.default = attributeType;