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
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n"])));
var Tabs = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 0 0 auto;\n  display: flex;\n"], ["\n  flex: 0 0 auto;\n  display: flex;\n"])));
var Tab = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 0 0 auto;\n  -webkit-user-select: none;\n  cursor: pointer;\n"], ["\n  flex: 0 0 auto;\n  -webkit-user-select: none;\n  cursor: pointer;\n"])));
var ContentContainer = react_emotion_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  position: relative;\n  height: 0;\n  overflow: hidden;\n"], ["\n  flex: 1;\n  position: relative;\n  height: 0;\n  overflow: hidden;\n"])));
var Content = react_emotion_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"])));
var ContentHidden = react_emotion_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  visibility: hidden;\n  -webkit-user-select: none;\n  pointer-events: none;\n"], ["\n  visibility: hidden;\n  -webkit-user-select: none;\n  pointer-events: none;\n"])));
var TabPanel = /** @class */function (_super) {
    __extends(TabPanel, _super);
    function TabPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.renderTabs = function (customStyle) {
            return React.createElement(Tabs, { className: customStyle.tabs }, _this.props.tabs.map(function (tabItem, index) {
                var selected = index === _this.activeTabIndex;
                if (typeof _this.props.renderTabDivider === 'function') {
                    return [React.createElement(Tab, { key: index, className: selected ? react_emotion_1.cx(customStyle.tab, customStyle.activeTab) : customStyle.tab, onClick: function onClick() {
                            return _this.selectIndex(index, tabItem.name);
                        } }, _this.props.renderTab(tabItem.tab, selected)), index !== _this.props.tabs.length - 1 ? React.createElement(React.Fragment, { key: "tab-divider-" + index }, _this.props.renderTabDivider()) : null];
                } else {
                    return React.createElement(Tab, { key: index, className: selected ? react_emotion_1.cx(customStyle.tab, customStyle.activeTab) : customStyle.tab, onClick: function onClick() {
                            return _this.selectIndex(index, tabItem.name);
                        } }, _this.props.renderTab(tabItem.tab, selected));
                }
            }), _this.props.renderExtraTabItems && _this.props.renderExtraTabItems());
        };
        // Renders active content visibly, renders inactive content hidden
        _this.renderAllContent = function (customStyles) {
            return _this.props.content.map(function (content, index) {
                var active = _this.props.tabs[_this.activeTabIndex].rendersContent === content.name;
                return React.createElement(Content, { key: index, className: !active ? react_emotion_1.cx(customStyles.content, ContentHidden, customStyles.contentHidden) : customStyles.content }, React.createElement(content.content.render, __assign({}, content.content.props)));
            });
        };
        // Render only the active content.
        _this.renderActiveContent = function (customStyles) {
            var activeItem = _.find(_this.props.content, function (content) {
                return _this.props.tabs[_this.activeTabIndex].rendersContent === content.name;
            });
            return React.createElement(Content, { className: customStyles.content }, React.createElement(activeItem.content.render, __assign({}, activeItem.content.props)));
        };
        _this.selectIndex = function (index, name) {
            if (_this.activeTabIndex === index) return;
            _this.setState({ activeIndex: index });
            if (_this.props.onActiveTabChanged) _this.props.onActiveTabChanged(index, name);
        };
        _this.state = {
            activeIndex: props.defaultTabIndex || 0
        };
        return _this;
    }
    Object.defineProperty(TabPanel.prototype, "activeTabIndex", {
        get: function get() {
            return this.state.activeIndex;
        },
        set: function set(idx) {
            if (!this.didMount || this.state.activeIndex === idx) return;
            this.setState({ activeIndex: idx });
        },
        enumerable: true,
        configurable: true
    });
    TabPanel.prototype.render = function () {
        var customStyles = this.props.styles || {};
        return React.createElement(Container, { className: react_emotion_1.cx(customStyles.tabPanel) }, this.renderTabs(customStyles), React.createElement(ContentContainer, { className: react_emotion_1.cx(customStyles.contentContainer) }, this.props.alwaysRenderContent ? this.renderAllContent(customStyles) : this.renderActiveContent(customStyles)));
    };
    TabPanel.prototype.componentDidMount = function () {
        this.didMount = true;
    };
    TabPanel.prototype.componentWillUnmount = function () {
        this.didMount = false;
    };
    return TabPanel;
}(React.Component);
exports.TabPanel = TabPanel;
exports.default = TabPanel;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;