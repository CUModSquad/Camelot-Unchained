"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigVar_1 = require("./ConfigVar");
var AudioConfigVar = /** @class */function (_super) {
    __extends(AudioConfigVar, _super);
    function AudioConfigVar(config) {
        if (config === void 0) {
            config = {};
        }
        return _super.call(this, config) || this;
    }
    Object.defineProperty(AudioConfigVar.prototype, "value", {
        get: function get() {
            return this._value;
        },
        set: function set(v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    AudioConfigVar.prototype.create = function () {
        var c = new AudioConfigVar();
        return c;
    };
    return AudioConfigVar;
}(ConfigVar_1.default);
exports.default = AudioConfigVar;