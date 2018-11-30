"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var keyboardModifier_1 = require("./keyboardModifier");
var dxKeyCodes_1 = require("./dxKeyCodes");
var KeyBind = /** @class */function () {
    function KeyBind() {
        var _this = this;
        this.primaryToString = function () {
            var s = '';
            if (_this.primaryModifiers & keyboardModifier_1.default.CTRL) s += 'CTRL + ';
            if (_this.primaryModifiers & keyboardModifier_1.default.ALT) s += 'ALT + ';
            if (_this.primaryModifiers & keyboardModifier_1.default.SHIFT) s += 'SHIFT + ';
            return s + dxKeyCodes_1.default[_this.primaryKeyCode];
        };
        this.secondaryToString = function () {
            var s = '';
            if (_this.secondaryModifiers & keyboardModifier_1.default.CTRL) s += 'CTRL + ';
            if (_this.secondaryModifiers & keyboardModifier_1.default.ALT) s += 'ALT + ';
            if (_this.secondaryModifiers & keyboardModifier_1.default.SHIFT) s += 'SHIFT + ';
            return s + dxKeyCodes_1.default[_this.secondaryKeyCode];
        };
    }
    return KeyBind;
}();
exports.default = KeyBind;