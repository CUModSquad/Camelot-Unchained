"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var tagContstraintType;
(function (tagContstraintType) {
  tagContstraintType[tagContstraintType["ALLOF"] = 0] = "ALLOF";
  tagContstraintType[tagContstraintType["ANYOF"] = 1] = "ANYOF";
  tagContstraintType[tagContstraintType["NONEOF"] = 2] = "NONEOF";
})(tagContstraintType || (tagContstraintType = {}));
exports.default = tagContstraintType;