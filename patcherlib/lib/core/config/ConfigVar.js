"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigVar = /** @class */function () {
    function ConfigVar(config) {
        if (config === void 0) {
            config = {};
        }
        this.id = config.id || -1;
        this.category = config.category || 0;
        this.description = config.description || 'empty';
        this.value = config.value || null;
    }
    ConfigVar.prototype.create = function () {
        var c = new ConfigVar();
        return c;
    };
    return ConfigVar;
}();
exports.default = ConfigVar;