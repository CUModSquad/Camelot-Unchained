"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
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
var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var react_emotion_1 = require("react-emotion");
var utils_1 = require("../utils");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #4D573E;\n  border: 1px solid darken(#4D573E, 20%);\n  color: #ECECEC;\n  z-index: 9998;\n"], ["\n  background-color: #4D573E;\n  border: 1px solid darken(#4D573E, 20%);\n  color: #ECECEC;\n  z-index: 9998;\n"])));
var ContextMenu = /** @class */function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.mouseOverElement = false;
        _this.hide = function () {
            if (_this.props.onContextMenuContentHide) _this.props.onContextMenuContentHide();
            _this.setState({ hidden: true });
            window.removeEventListener('keydown', _this.onKeyDown);
            window.removeEventListener('mousedown', _this.onMouseDown);
        };
        _this.show = function (clientX, clientY) {
            if (_this.props.onContextMenuContentShow) _this.props.onContextMenuContentShow();
            _this.setState({
                hidden: false,
                wndRegion: utils_1.windowQuadrant(clientX, clientY),
                x: clientX,
                y: clientY
            });
        };
        _this.onKeyDown = function (e) {
            if (e.which === 27 && !_this.state.hidden) {
                // escape, close this
                _this.hide();
            }
        };
        _this.onMouseDown = function (e) {
            if (!_this.mouseOverElement && !_this.state.hidden) {
                _this.hide();
            }
        };
        _this.onMouseEnter = function () {
            _this.mouseOverElement = true;
        };
        _this.onMouseLeave = function () {
            _this.mouseOverElement = false;
        };
        _this.onContextMenu = function (e) {
            if (!_this.state.hidden) _this.hide();
            _this.show(e.clientX, e.clientY);
            window.addEventListener('keydown', _this.onKeyDown);
            window.addEventListener('mousedown', _this.onMouseDown);
        };
        _this.computeStyle = function () {
            switch (_this.state.wndRegion) {
                case utils_1.Quadrant.TopLeft:
                    return {
                        position: 'fixed',
                        left: _this.state.x + _this.state.offsetLeft + "px",
                        top: _this.state.y + _this.state.offsetTop + "px"
                    };
                case utils_1.Quadrant.TopRight:
                    return {
                        position: 'fixed',
                        right: window.window.innerWidth - _this.state.x + _this.state.offsetRight + "px",
                        top: _this.state.y + _this.state.offsetTop + "px"
                    };
                case utils_1.Quadrant.BottomLeft:
                    return {
                        position: 'fixed',
                        left: _this.state.x + _this.state.offsetLeft + "px",
                        bottom: window.window.innerHeight - _this.state.y + _this.state.offsetBottom + "px"
                    };
                case utils_1.Quadrant.BottomRight:
                    return {
                        position: 'fixed',
                        right: window.window.innerWidth - _this.state.x + _this.state.offsetRight + "px",
                        bottom: window.window.innerHeight - _this.state.y + _this.state.offsetBottom + "px"
                    };
            }
        };
        _this.state = {
            x: -99999,
            y: -99999,
            wndRegion: utils_1.Quadrant.TopLeft,
            hidden: true,
            offsetLeft: _this.props.offsetLeft || 10,
            offsetTop: _this.props.offsetTop || 10,
            offsetRight: _this.props.offsetRight || 5,
            offsetBottom: _this.props.offsetBottom || 5
        };
        return _this;
    }
    ContextMenu.prototype.render = function () {
        var contentProps = this.props.contentProps || {};
        return React.createElement("div", { onContextMenu: this.onContextMenu, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, style: { display: 'inline-block' } }, this.props.children, this.state.hidden ? null : React.createElement(Container, { style: this.computeStyle() }, React.createElement(this.props.content, __assign({ close: this.hide }, contentProps))));
    };
    ContextMenu.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
    };
    ContextMenu.prototype.componentWillUnmount = function () {
        // unreg window handlers
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('mousedown', this.onMouseDown);
    };
    return ContextMenu;
}(React.Component);
exports.ContextMenu = ContextMenu;
exports.default = ContextMenu;
var templateObject_1;