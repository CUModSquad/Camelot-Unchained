"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
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
var react_emotion_1 = require("react-emotion");
var Spinner_1 = require("./Spinner");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.5);\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0,0,0,0.5);\n"])));
var LoadingContainer = /** @class */function (_super) {
    __extends(LoadingContainer, _super);
    function LoadingContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.handleLoadingState = function (nextProps) {
            if (_this.props.loading !== nextProps.loading) {
                _this.setState({ hidden: true });
                if (_this.props.wait) {
                    setTimeout(function () {
                        _this.setState({ hidden: false });
                    }, _this.props.wait);
                    return;
                }
                _this.setState({ hidden: false });
            }
        };
        _this.state = {
            hidden: true
        };
        return _this;
    }
    LoadingContainer.prototype.render = function () {
        return this.props.loading && !this.state.hidden && React.createElement(Container, null, React.createElement(Spinner_1.default, null));
    };
    LoadingContainer.prototype.componentDidMount = function () {
        this.handleLoadingState(this.props);
    };
    LoadingContainer.prototype.componentWillReceiveProps = function (nextProps) {
        this.handleLoadingState(nextProps);
    };
    return LoadingContainer;
}(React.Component);
exports.LoadingContainer = LoadingContainer;
var templateObject_1;