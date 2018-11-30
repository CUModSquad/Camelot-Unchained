"use strict";

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
/*
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
/*
 * Usage:
 *
 * A text tooltip is easy, just wrap the element you would like to have a tooltip
 * displayed for and set the content to a string message!
 * <Tooltip content='Hello World!'>
 *   <h1>Stuff and things</h1>
 * </Tooltip>
 *
 * Tooltips can also be jsx elements!
 * <Tooltip content={<img src='https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' />}>
 *   <h1>Hover for a cat picture!</h1>
 * </Tooltip>
 *
 */
var React = require("react");
var react_emotion_1 = require("react-emotion");
var utils_1 = require("../utils");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n"], ["\n  display: inline-block;\n  position: relative;\n"])));
var TooltipView = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  background-color: #444;\n  border: 1px solid #4A4A4A;\n  color: #ECECEC;\n  padding: 2px 5px;\n  max-width: 200px;\n  z-index: 10;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"], ["\n  position: fixed;\n  background-color: #444;\n  border: 1px solid #4A4A4A;\n  color: #ECECEC;\n  padding: 2px 5px;\n  max-width: 200px;\n  z-index: 10;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"])));
var TooltipFixedView = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  background-color: #444;\n  border: 1px solid #4A4A4A;\n  color: #ECECEC;\n  padding: 2px 5px;\n  max-width: 200px;\n  z-index: 10;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"], ["\n  position: fixed;\n  background-color: #444;\n  border: 1px solid #4A4A4A;\n  color: #ECECEC;\n  padding: 2px 5px;\n  max-width: 200px;\n  z-index: 10;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"])));
var Tooltip = /** @class */function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.initWindowDimensions = function () {
            _this.windowDimensions = { innerHeight: window.innerHeight, innerWidth: window.innerWidth };
        };
        _this.onMouseMove = function (e) {
            if (!_this.tooltipDimensions && _this.tooltipRef) {
                _this.tooltipDimensions = _this.tooltipRef.getBoundingClientRect();
            }
            var computedStyle;
            if (_this.props.fixedMode && _this.tooltipDimensions) {
                var _a = _this.childRef.getBoundingClientRect(),
                    top_1 = _a.top,
                    left = _a.left;
                computedStyle = _this.computeStyle(left, top_1, _this.state.offsetLeft, _this.state.offsetTop, _this.state.offsetRight, _this.state.offsetBottom);
            }
            if (!_this.props.fixedMode) {
                computedStyle = _this.computeStyle(e.clientX, e.clientY, _this.state.offsetLeft, _this.state.offsetTop, _this.state.offsetRight, _this.state.offsetBottom);
            }
            if (_this.tooltipRef && computedStyle) {
                if (computedStyle.bottom) {
                    var topScreenOverflow = e.clientY - _this.tooltipDimensions.height;
                    if (topScreenOverflow < 0) {
                        // Tooltip is overflowing the top of the viewport
                        _this.tooltipRef.style.bottom = computedStyle.bottom + topScreenOverflow + "px";
                    } else {
                        _this.tooltipRef.style.bottom = computedStyle.bottom + "px";
                    }
                }
                if (computedStyle.top) {
                    var bottomScreenOverflow = _this.windowDimensions.innerHeight - (e.clientY + _this.tooltipDimensions.height);
                    if (bottomScreenOverflow < 0) {
                        // Tooltip is overflowing the bottom of the viewport
                        _this.tooltipRef.style.top = computedStyle.top + bottomScreenOverflow + "px";
                    } else {
                        _this.tooltipRef.style.top = computedStyle.top + "px";
                    }
                }
                _this.tooltipRef.style.left = computedStyle.left ? computedStyle.left + "px" : 'auto';
                _this.tooltipRef.style.right = computedStyle.right ? computedStyle.right + "px" : 'auto';
            }
        };
        _this.onMouseEnter = function (e) {
            if (_this.props.onTooltipShow) {
                _this.props.onTooltipShow();
            }
            _this.setState({
                show: true,
                wndRegion: utils_1.windowQuadrant(e.clientX, e.clientY)
            });
        };
        _this.onMouseleave = function () {
            if (_this.props.onTooltipHide) {
                _this.props.onTooltipHide();
            }
            _this.setState({ show: false });
        };
        _this.computeStyle = function (x, y, offsetLeft, offsetTop, offsetRight, offsetBottom) {
            var wndRegion = typeof _this.props.wndRegion === 'number' ? _this.props.wndRegion : _this.state.wndRegion;
            if (_this.props.fixedMode && _this.tooltipDimensions) {
                var _a = _this.childRef.getBoundingClientRect(),
                    top_2 = _a.top,
                    left = _a.left,
                    width = _a.width,
                    height = _a.height;
                switch (wndRegion) {
                    case utils_1.Quadrant.TopLeft:
                        return {
                            left: x + offsetLeft,
                            top: y + height + offsetTop
                        };
                    case utils_1.Quadrant.TopRight:
                        return {
                            left: x - _this.tooltipDimensions.width + width + offsetRight,
                            top: y + height + offsetTop
                        };
                    case utils_1.Quadrant.BottomLeft:
                        return {
                            left: x + offsetLeft,
                            top: y - _this.tooltipDimensions.height + offsetBottom
                        };
                    case utils_1.Quadrant.BottomRight:
                        return {
                            left: x - _this.tooltipDimensions.width + width + offsetRight,
                            top: y - _this.tooltipDimensions.height + offsetBottom
                        };
                }
            } else {
                switch (wndRegion) {
                    case utils_1.Quadrant.TopLeft:
                        return {
                            left: x + offsetLeft,
                            top: y + offsetTop
                        };
                    case utils_1.Quadrant.TopRight:
                        return {
                            right: _this.windowDimensions.innerWidth - x + offsetRight,
                            top: y + offsetTop
                        };
                    case utils_1.Quadrant.BottomLeft:
                        return {
                            left: x + offsetLeft,
                            bottom: _this.windowDimensions.innerHeight - y + offsetBottom
                        };
                    case utils_1.Quadrant.BottomRight:
                        return {
                            right: _this.windowDimensions.innerWidth - x + offsetRight,
                            bottom: _this.windowDimensions.innerHeight - y + offsetBottom
                        };
                }
            }
        };
        _this.state = {
            wndRegion: utils_1.Quadrant.TopLeft || _this.props.wndRegion,
            show: _this.props.show || false,
            ttClassName: _this.props.tooltipClassName || 'Tooltip',
            offsetLeft: _this.props.offsetLeft || 10,
            offsetTop: _this.props.offsetTop || 10,
            offsetRight: _this.props.offsetRight || 5,
            offsetBottom: _this.props.offsetBottom || 5
        };
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _this = this;
        var customStyles = this.props.styles || {};
        var showTooltip = typeof this.props.show !== 'undefined' ? this.props.show : this.state.show;
        var fixed = this.props.fixedMode || false;
        return React.createElement(Container, { style: customStyles.Tooltip }, React.createElement("div", { ref: function ref(_ref) {
                return _this.childRef = _ref;
            }, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseleave, onMouseMove: this.onMouseMove }, this.props.children), showTooltip ? !fixed ? React.createElement(TooltipView, { innerRef: function innerRef(ref) {
                return _this.tooltipRef = ref;
            }, style: customStyles.tooltip }, typeof this.props.content === 'string' ? this.props.content : React.createElement(this.props.content, __assign({}, this.props.contentProps))) : React.createElement(TooltipFixedView, { innerRef: function innerRef(ref) {
                return _this.tooltipRef = ref;
            }, style: customStyles.tooltipFixed }, typeof this.props.content === 'string' ? this.props.content : React.createElement(this.props.content, __assign({}, this.props.contentProps))) : null);
    };
    Tooltip.prototype.componentDidMount = function () {
        this.initWindowDimensions();
        window.addEventListener('resize', this.initWindowDimensions);
    };
    Tooltip.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.initWindowDimensions);
    };
    return Tooltip;
}(React.Component);
exports.Tooltip = Tooltip;
exports.default = Tooltip;
var templateObject_1, templateObject_2, templateObject_3;