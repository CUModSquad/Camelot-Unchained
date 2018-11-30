"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Spinner_1 = require("./Spinner");
var lodash_1 = require("lodash");
exports.defaultFloatSpinnerStyle = {
    spinner: {
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: 99999
    }
};
exports.FloatSpinner = function (props) {
    return React.createElement(Spinner_1.default, { styles: lodash_1.merge(exports.defaultFloatSpinnerStyle, props.styles || {}) });
};
exports.default = exports.FloatSpinner;