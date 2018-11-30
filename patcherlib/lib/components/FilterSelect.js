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
var react_emotion_1 = require("react-emotion");
var Input_1 = require("./Input");
var lodash_1 = require("lodash");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n"])));
var List = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1;\n  position: absolute;\n  min-height: 0px;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  user-select: none;\n  background-color: #444;\n  z-index: 8888;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex: 1;\n  position: absolute;\n  min-height: 0px;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  user-select: none;\n  background-color: #444;\n  z-index: 8888;\n"])));
var ListItem = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  flex: 1;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"])));
var HighlightItem = react_emotion_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.2);\n"], ["\n  background-color: rgba(0, 0, 0, 0.2);\n"])));
var SelectedItem = react_emotion_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: rgba(220, 255, 230, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n"], ["\n  background-color: rgba(220, 255, 230, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n"])));
var FilterSelect = /** @class */function (_super) {
    __extends(FilterSelect, _super);
    function FilterSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.inputRef = null;
        _this.onInputChanged = function (e) {
            var value = e.target.value;
            if (_this.state.filterText === value) return;
            _this.applyFilter(value);
        };
        _this.onKeyDown = function (e) {
            // down or right
            if (e.keyCode === 40 || e.keyCode === 39) {
                if (_this.state.keyboardIndex + 1 < _this.state.filteredItems.length) {
                    _this.setState({
                        keyboardIndex: _this.state.keyboardIndex + 1
                    });
                    e.stopPropagation();
                }
            }
            // up or left
            if (e.keyCode === 38 || e.keyCode === 37) {
                if (_this.state.keyboardIndex - 1 > -1) {
                    _this.setState({
                        keyboardIndex: _this.state.keyboardIndex - 1
                    });
                    e.stopPropagation();
                }
            }
            // enter
            if (e.keyCode === 13) {
                if (_this.state.keyboardIndex > -1) {
                    _this.selectItem(_this.state.filteredItems[_this.state.keyboardIndex]);
                    e.stopPropagation();
                }
            }
        };
        _this.applyFilter = function (s) {
            var filteredItems = [];
            _this.state.items.forEach(function (item) {
                if (_this.props.filter(s, item)) filteredItems.push(item);
            });
            _this.setState({
                filteredItems: filteredItems,
                filterText: s
            });
        };
        _this.selectItem = function (item) {
            _this.setState({
                keyboardIndex: -1,
                selectedItem: item
            });
        };
        var items = lodash_1.cloneDeep(_this.props.items);
        _this.state = {
            items: items,
            filteredItems: items,
            selectedItem: null,
            filterText: '',
            keyboardIndex: -1
        };
        return _this;
    }
    FilterSelect.prototype.render = function () {
        var _this = this;
        var customStyles = this.props.styles || {};
        return React.createElement(Container, { style: customStyles.container }, React.createElement(Input_1.Input, { inputRef: function inputRef(r) {
                return _this.inputRef = r;
            }, onChange: this.onInputChanged, onKeyDown: this.onKeyDown }), React.createElement("div", null, this.state.selectedItem == null ? null : React.createElement(SelectedItem, null, this.props.renderItem(this.state.selectedItem, this.props.renderData)), React.createElement(List, null, this.state.filteredItems.map(function (item, index) {
            if (item === _this.state.selectedItem) return null;
            return React.createElement(ListItem, { key: index, style: _this.state.keyboardIndex === index ? __assign({}, customStyles.listItem, customStyles.highlightItem) : customStyles.listItem, onClick: function onClick() {
                    return _this.selectItem(item);
                } }, _this.props.renderItem(item, _this.props.renderData));
        }))));
    };
    return FilterSelect;
}(React.Component);
exports.FilterSelect = FilterSelect;
exports.default = FilterSelect;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;