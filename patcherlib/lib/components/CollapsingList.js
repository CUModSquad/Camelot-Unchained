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
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: all;\n  color: white;\n"], ["\n  height: 100%;\n  -webkit-user-select: none;\n  user-select: none;\n  pointer-events: all;\n  color: white;\n"])));
var Title = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var CollapseButton = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  color: white;\n  width: 15px;\n"], ["\n  display: inline-block;\n  color: white;\n  width: 15px;\n"])));
var ListItem = react_emotion_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n"])));
var Collapsed = react_emotion_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
var CollapsingList = /** @class */function (_super) {
    __extends(CollapsingList, _super);
    function CollapsingList(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggleCollapse = function () {
            if (typeof _this.props.collapsed !== 'boolean') {
                _this.setState(function (state, props) {
                    if (state.collapsed) {
                        // Show
                        if (_this.props.onToggleCollapse) _this.props.onToggleCollapse(false);
                        return {
                            collapsed: false
                        };
                    }
                    // Hide
                    if (_this.props.onToggleCollapse) _this.props.onToggleCollapse(true);
                    return {
                        collapsed: true
                    };
                });
            } else if (_this.props.onToggleCollapse) {
                _this.props.onToggleCollapse(!_this.props.collapsed);
            }
        };
        _this.state = {
            collapsed: props.defaultCollapsed || false
        };
        return _this;
    }
    CollapsingList.prototype.render = function () {
        var _this = this;
        var collapsed = typeof this.props.collapsed === 'boolean' ? this.props.collapsed : this.state.collapsed;
        var animationClass = this.props.animationClass && this.props.animationClass(collapsed);
        var customStyle = this.props.styles || {};
        return React.createElement(Container, { className: customStyle.container }, React.createElement("div", null, typeof this.props.title === 'string' ? React.createElement(Title, { className: customStyle.title, onClick: this.onToggleCollapse }, React.createElement(CollapseButton, { className: customStyle.collapseButton }, collapsed ? '+' : '-'), this.props.title) : React.createElement(Title, { className: customStyle.title, onClick: this.onToggleCollapse }, this.props.title(collapsed))), React.createElement("div", { className: !animationClass ? collapsed ? react_emotion_1.cx(customStyle.body, Collapsed) : customStyle.body : react_emotion_1.cx(customStyle.body, animationClass.anim) }, this.props.renderListHeader && React.createElement("div", null, this.props.renderListHeader()), React.createElement("div", { className: customStyle.listContainer }, this.props.items.map(function (item, i) {
            if (!_this.props.renderListItem) {
                if (typeof item === 'string') {
                    return React.createElement(ListItem, { key: i }, item);
                }
                return React.createElement(ListItem, { key: i, className: customStyle.listItem }, Object.keys(item).map(function (key) {
                    return React.createElement("div", { key: key }, item[key]);
                }));
            }
            return _this.props.renderListItem(item, i);
        })), this.props.renderListFooter && React.createElement("div", { className: customStyle.listFooter }, this.props.renderListFooter())));
    };
    return CollapsingList;
}(React.Component);
exports.CollapsingList = CollapsingList;
exports.default = CollapsingList;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;