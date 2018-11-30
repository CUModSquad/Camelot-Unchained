"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Prefixer = /** @class */function () {
    function Prefixer(pfx) {
        var _this = this;
        this.pfx = pfx;
        this.prefix = function (s) {
            return "" + _this.pfx + s;
        };
    }
    return Prefixer;
}();
exports.default = Prefixer;