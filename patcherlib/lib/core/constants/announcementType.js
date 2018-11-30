"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var announcementType;
(function (announcementType) {
  announcementType[announcementType["TEXT"] = 1] = "TEXT";
  announcementType[announcementType["POPUP"] = 2] = "POPUP";
  announcementType[announcementType["ALL"] = 3] = "ALL";
})(announcementType || (announcementType = {}));
exports.default = announcementType;