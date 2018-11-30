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
var Animate_1 = require("./Animate");
var Tooltip_1 = require("./Tooltip");
var utils_1 = require("../utils");
var HelpContainer = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: ", "px;\n  left: ", "px;\n  width: ", "px;\n  height: ", "px;\n  z-index: 999;\n  pointer-events: none;\n  background-color: rgba(255,255,255,0.1);\n  box-shadow: inset 0 0 5px 5px rgba(255,255,255,0.4);\n  pointer-events: none;\n"], ["\n  position: fixed;\n  top: ", "px;\n  left: ", "px;\n  width: ", "px;\n  height: ", "px;\n  z-index: 999;\n  pointer-events: none;\n  background-color: rgba(255,255,255,0.1);\n  box-shadow: inset 0 0 5px 5px rgba(255,255,255,0.4);\n  pointer-events: none;\n"])), function (props) {
    return props.top;
}, function (props) {
    return props.left;
}, function (props) {
    return props.width;
}, function (props) {
    return props.height;
});
var HelpOverlay = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 998;\n  pointer-events: none;\n  background-color: rgba(0,0,0,0.5);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 998;\n  pointer-events: none;\n  background-color: rgba(0,0,0,0.5);\n"])));
var TooltipIcon = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: ", ";\n  left: ", ";\n  background-color: ", ";\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  z-index: 999;\n  cursor: pointer;\n  pointer-events: all;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: ", ";\n  left: ", ";\n  background-color: ", ";\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  z-index: 999;\n  cursor: pointer;\n  pointer-events: all;\n"])), function (props) {
    return props.top - 5 + "px";
}, function (props) {
    return props.left + props.width - 5 + "px";
}, utils_1.darkenColor('#9de3ff', 100));
var ExitButton = react_emotion_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  padding: 0 15px;\n  text-align: right;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  z-index: 9999;\n  transition: text-shadow 0.2s;\n  text-shadow: none;\n  pointer-events: all;\n  &:hover {\n    text-shadow: 1px 1px 3px rgba(255,255,255,0.4);\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  padding: 0 15px;\n  text-align: right;\n  background-color: black;\n  color: white;\n  cursor: pointer;\n  z-index: 9999;\n  transition: text-shadow 0.2s;\n  text-shadow: none;\n  pointer-events: all;\n  &:hover {\n    text-shadow: 1px 1px 3px rgba(255,255,255,0.4);\n  }\n"])));
var HelpInfo = /** @class */function (_super) {
    __extends(HelpInfo, _super);
    function HelpInfo(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggleHints = function (enabled) {
            if (enabled) {
                _this.addHints();
                return;
            }
            _this.removeHints();
        };
        _this.addHints = function () {
            var hints = [];
            _this.props.steps.forEach(function (step, i) {
                var classNameElement = document.getElementsByClassName(step.element).item(0);
                var idElement = document.getElementById(step.element);
                var element = classNameElement || idElement;
                if (element) {
                    var _a = element.getBoundingClientRect(),
                        width = _a.width,
                        height = _a.height,
                        top_1 = _a.top,
                        left = _a.left;
                    hints.push(React.createElement("div", null, React.createElement(HelpContainer, { top: top_1, left: left, width: width, height: height }), step.tooltipText && React.createElement(Tooltip_1.default, { content: step.tooltipText, styles: {
                            tooltip: {
                                zIndex: 9999,
                                backgroundColor: 'rgba(0,0,0,0.9)',
                                padding: '5px'
                            }
                        } }, React.createElement(TooltipIcon, { top: top_1, left: left, width: width }, "?"))));
                }
            });
            _this.setState({ hints: hints });
        };
        _this.removeHints = function () {
            _this.setState({ hints: [] });
        };
        _this.state = {
            hints: []
        };
        return _this;
    }
    HelpInfo.prototype.render = function () {
        var options = __assign({ skipLabel: 'Exit', doneLabel: 'Exit' });
        return React.createElement(Animate_1.default, { className: react_emotion_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["position: absolute;"], ["position: absolute;"]))), animationEnter: 'fadeIn', animationLeave: 'fadeOut', durationEnter: 200, durationLeave: 200 }, this.state.hints.length > 0 && [React.createElement(ExitButton, { onClick: this.props.onExitClick }, "Exit Help Mode"), React.createElement(HelpOverlay, null)], this.state.hints);
    };
    HelpInfo.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.enabled !== nextProps.enabled || !_.isEqual(this.props.steps, nextProps.steps)) {
            this.onToggleHints(nextProps.enabled);
        }
    };
    return HelpInfo;
}(React.Component);
exports.HelpInfo = HelpInfo;
exports.default = HelpInfo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;