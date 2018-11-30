"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleMessage = /** @class */function () {
    function ConsoleMessage(consoleMessage) {
        if (consoleMessage === void 0) {
            consoleMessage = {};
        }
        this.text = consoleMessage.text;
    }
    ConsoleMessage.create = function () {
        var a = new ConsoleMessage();
        return a;
    };
    return ConsoleMessage;
}();
exports.default = ConsoleMessage;