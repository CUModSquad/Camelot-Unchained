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
var React = require("react");
var client_1 = require("../core/client");
var ErrorBoundary = /** @class */function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.onReloadUI = function () {
            client_1.default.ReloadAllUI();
        };
        _this.state = {
            hasError: false,
            error: null,
            info: null
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, info) {
        if (this.props.outputErrorToConsole) {
            console.error(error, info);
        }
        if (this.props.onError) {
            this.props.onError(error, info);
        }
        if (this.props.reloadUIOnError && !client_1.default.debug) {
            client_1.default.ReloadAllUI();
        }
        this.setState({
            error: error,
            info: info,
            hasError: true
        });
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.hasError) {
            return this.props.renderError ? this.props.renderError(this.state.error, this.state.info) : React.createElement("h2", null, "Unhandled UI Error! ", React.createElement("button", { onClick: this.onReloadUI }, "Reload UI"));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React.PureComponent);
exports.ErrorBoundary = ErrorBoundary;