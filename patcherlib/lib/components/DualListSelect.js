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
var lodash_1 = require("lodash");
var react_emotion_1 = require("react-emotion");
var RaisedButton_1 = require("./RaisedButton");
var Input_1 = require("./Input");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"])));
var ListSection = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: stretch;\n  align-content: stretch;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: stretch;\n  align-content: stretch;\n"])));
var ListBox = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n  user-select: none;\n  padding: 1px 15px;\n"], ["\n  cursor: pointer;\n  user-select: none;\n  padding: 1px 15px;\n"])));
var ListItem = react_emotion_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  cursor: pointer;\n  user-select: none;\n  padding: 1px 15px;\n"], ["\n  cursor: pointer;\n  user-select: none;\n  padding: 1px 15px;\n"])));
var SelectedListItem = react_emotion_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.2);\n"], ["\n  background-color: rgba(0, 0, 0, 0.2);\n"])));
var Buttons = react_emotion_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n"])));
var Filter = react_emotion_1.default('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex: 0;\n"], ["\n  flex: 0;\n"])));
var defaultButtonStyle = {
    margin: 10
};
var DualListSelect = /** @class */function (_super) {
    __extends(DualListSelect, _super);
    function DualListSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.leftInputRef = null;
        _this.rightInputRef = null;
        _this.getRightItems = function () {
            return lodash_1.clone(_this.state.rightItems);
        };
        _this.getLeftItems = function () {
            return lodash_1.clone(_this.state.leftItems);
        };
        _this.getRightKeys = function () {
            var keys = [];
            for (var key in _this.state.rightItems) {
                keys.push(key);
            }
            return keys;
        };
        _this.getLeftKeys = function () {
            var keys = [];
            for (var key in _this.state.leftItems) {
                keys.push(key);
            }
            return keys;
        };
        _this.onLeftFilterTextChanged = function (e) {
            _this.filterLeftItems(e.target.value);
        };
        _this.onRightFilterTextChanged = function (e) {
            _this.filterRightItems(e.target.value);
        };
        // remove from left add to right
        _this.selectItem = function (selectKey) {
            var key = selectKey || _this.state.leftSelectedItemKey;
            var leftItems = lodash_1.clone(_this.state.leftItems);
            var rightItems = lodash_1.clone(_this.state.rightItems);
            var item = lodash_1.clone(leftItems[key]);
            rightItems[key] = item;
            delete leftItems[key];
            _this.setState({
                rightItems: rightItems,
                leftItems: leftItems,
                filteredRightItems: rightItems,
                filteredLeftItems: leftItems,
                leftFilter: '',
                rightFilter: '',
                leftSelectedItemKey: ''
            });
            _this.leftInputRef.value = '';
        };
        // remove from right
        _this.removeItem = function (selectKey) {
            var key = selectKey || _this.state.rightSelectedItemKey;
            var leftItems = lodash_1.clone(_this.state.leftItems);
            var rightItems = lodash_1.clone(_this.state.rightItems);
            var item = lodash_1.clone(rightItems[key]);
            leftItems[key] = item;
            delete rightItems[key];
            _this.setState({
                rightItems: rightItems,
                leftItems: leftItems,
                filteredRightItems: rightItems,
                filteredLeftItems: leftItems,
                leftFilter: '',
                rightFilter: '',
                rightSelectedItemKey: ''
            });
            _this.rightInputRef.value = '';
        };
        _this.selectAll = function () {
            var rightItems = lodash_1.clone(_this.state.rightItems);
            for (var key in _this.state.leftItems) {
                rightItems[key] = lodash_1.clone(_this.state.leftItems[key]);
            }
            _this.setState({
                rightItems: rightItems,
                leftItems: {},
                filteredRightItems: rightItems,
                filteredLeftItems: {},
                leftFilter: '',
                rightFilter: '',
                rightSelectedItemKey: ''
            });
            _this.rightInputRef.value = '';
        };
        _this.removeAll = function () {
            var leftItems = lodash_1.clone(_this.state.leftItems);
            for (var key in _this.state.rightItems) {
                leftItems[key] = lodash_1.clone(_this.state.rightItems[key]);
            }
            _this.setState({
                leftItems: leftItems,
                rightItems: {},
                filteredRightItems: {},
                filteredLeftItems: leftItems,
                leftFilter: '',
                rightFilter: '',
                rightSelectedItemKey: ''
            });
            _this.rightInputRef.value = '';
        };
        _this.filterRightItems = function (rightFilter) {
            if (rightFilter === '') {
                _this.setState({
                    rightFilter: rightFilter,
                    filteredRightItems: _this.state.rightItems
                });
                return;
            }
            var filteredRightItems = {};
            for (var key in _this.state.rightItems) {
                if (key.indexOf(rightFilter) === -1) continue;
                filteredRightItems[key] = _this.state.rightItems[key];
            }
            _this.setState({
                rightFilter: rightFilter,
                filteredRightItems: filteredRightItems
            });
        };
        _this.filterLeftItems = function (leftFilter) {
            if (leftFilter === '') {
                _this.setState({
                    leftFilter: leftFilter,
                    filteredLeftItems: _this.state.leftItems
                });
                return;
            }
            var filteredLeftItems = {};
            for (var key in _this.state.leftItems) {
                if (key.indexOf(leftFilter) === -1) continue;
                filteredLeftItems[key] = _this.state.leftItems[key];
            }
            _this.setState({
                leftFilter: leftFilter,
                filteredLeftItems: filteredLeftItems
            });
        };
        _this.renderLeftItems = function (customStyle) {
            var items = [];
            var _loop_1 = function _loop_1(key) {
                items.push(React.createElement(ListItem, { key: key, style: key === _this.state.leftSelectedItemKey ? __assign({}, customStyle.listItem, customStyle.selectedListItem) : customStyle.listItem, className: key === _this.state.leftSelectedItemKey ? SelectedListItem : '', onClick: function onClick() {
                        return _this.setState({ leftSelectedItemKey: key });
                    }, onDoubleClick: function onDoubleClick() {
                        return _this.selectItem(key);
                    } }, _this.state.filteredLeftItems[key]));
            };
            for (var key in _this.state.filteredLeftItems) {
                _loop_1(key);
            }
            return items;
        };
        _this.renderRightItems = function (customStyle) {
            var items = [];
            var _loop_2 = function _loop_2(key) {
                items.push(React.createElement(ListItem, { key: key, style: key === _this.state.rightSelectedItemKey ? __assign({}, customStyle.listItem, customStyle.selectedListItem) : customStyle.listItem, className: key === _this.state.rightSelectedItemKey ? SelectedListItem : '', onClick: function onClick() {
                        return _this.setState({ rightSelectedItemKey: key });
                    }, onDoubleClick: function onDoubleClick() {
                        return _this.removeItem(key);
                    } }, _this.state.filteredRightItems[key]));
            };
            for (var key in _this.state.filteredRightItems) {
                _loop_2(key);
            }
            return items;
        };
        _this.state = {
            leftItems: lodash_1.clone(props.items),
            rightItems: {},
            leftFilter: '',
            rightFilter: '',
            filteredLeftItems: lodash_1.clone(props.items),
            filteredRightItems: {},
            leftSelectedItemKey: '',
            rightSelectedItemKey: ''
        };
        return _this;
    }
    DualListSelect.prototype.render = function () {
        var _this = this;
        var customStyle = this.props.styles || {};
        return React.createElement(Container, { style: customStyle.container }, React.createElement(ListSection, { style: customStyle.listSection }, React.createElement(Filter, { style: customStyle.filter }, React.createElement(Input_1.default, { type: 'text', label: this.props.labelLeft || '', inputRef: function inputRef(r) {
                return _this.leftInputRef = r;
            }, placeholder: 'Filter', onChange: this.onLeftFilterTextChanged })), React.createElement(ListBox, { style: customStyle.listBox }, this.renderLeftItems(customStyle))), React.createElement(Buttons, null, React.createElement(RaisedButton_1.default, { styles: {
                button: lodash_1.merge({}, this.props.styles ? this.props.styles.button : null || {})
            }, onClick: this.selectAll }, React.createElement("i", { className: 'fa fa-angle-double-right' })), React.createElement(RaisedButton_1.default, { styles: { button: lodash_1.merge(defaultButtonStyle, this.props.styles ? this.props.styles.button : null || {}) }, onClick: function onClick() {
                return _this.selectItem();
            } }, React.createElement("i", { className: 'fa fa-angle-right' })), React.createElement(RaisedButton_1.default, { styles: { button: lodash_1.merge(defaultButtonStyle, this.props.styles ? this.props.styles.button : null || {}) }, onClick: function onClick() {
                return _this.removeItem();
            } }, React.createElement("i", { className: 'fa fa-angle-left' })), React.createElement(RaisedButton_1.default, { styles: { button: lodash_1.merge(defaultButtonStyle, this.props.styles ? this.props.styles.button : null || {}) }, onClick: this.removeAll }, React.createElement("i", { className: 'fa fa-angle-double-left' }))), React.createElement(ListSection, { style: customStyle.listSection }, React.createElement(Filter, { style: customStyle.filter }, React.createElement(Input_1.default, { type: 'text', label: this.props.labelRight || '', inputRef: function inputRef(r) {
                return _this.rightInputRef = r;
            }, placeholder: 'Filter', onChange: this.onRightFilterTextChanged })), React.createElement(ListBox, { style: customStyle.listBox }, this.renderRightItems(customStyle))));
    };
    return DualListSelect;
}(React.Component);
exports.DualListSelect = DualListSelect;
exports.default = DualListSelect;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;