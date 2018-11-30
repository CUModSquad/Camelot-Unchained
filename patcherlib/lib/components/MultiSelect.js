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
var __1 = require("..");
var lodash_1 = require("lodash");
var KeyCodes = __1.utils.KeyCodes;
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  position: relative;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  position: relative;\n"])));
var InputView = react_emotion_1.default('input')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 0;\n"], ["\n  flex: 0;\n"])));
var List = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  position: relative;\n  min-height: 0;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  user-select: none;\n  background-color: #444;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1;\n  position: relative;\n  min-height: 0;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  user-select: none;\n  background-color: #444;\n"])));
var ListItem = react_emotion_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 1;\n  cursor: pointer;\n  &:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  flex: 1;\n  cursor: pointer;\n  &:hover {\n    background: rgba(0, 0, 0, 0.2);\n  }\n"])));
var HighlightItem = react_emotion_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.2);\n"], ["\n  background-color: rgba(0, 0, 0, 0.2);\n"])));
var SelectedItemList = react_emotion_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  user-select: none;\n  background-color: #777;\n  position: relative;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  user-select: none;\n  background-color: #777;\n  position: relative;\n"])));
var Selected = react_emotion_1.default('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex: 0;\n  background-color: #222;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 5px;\n  cursor: pointer;\n  &:hover {\n    background-color: #555;\n  }\n"], ["\n  display: flex;\n  flex: 0;\n  background-color: #222;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 5px;\n  cursor: pointer;\n  &:hover {\n    background-color: #555;\n  }\n"])));
var RemoveSelected = react_emotion_1.default('div')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n  font-size: 0.8em;\n  cursor: pointer;\n  &:hover {\n    color: darkred;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2px;\n  font-size: 0.8em;\n  cursor: pointer;\n  &:hover {\n    color: darkred;\n  }\n"])));
var MultiSelect = /** @class */function (_super) {
    __extends(MultiSelect, _super);
    function MultiSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedItems = function () {
            return lodash_1.cloneDeep(_this.state.selectedItems);
        };
        _this.onInputChanged = function (e) {
            var value = e.target.value;
            if (_this.state.filterText === value) return;
            _this.applyFilter(value);
        };
        _this.onKeyDown = function (e) {
            if (e.keyCode === KeyCodes.KEY_DownArrow || e.keyCode === KeyCodes.KEY_RightArrow) {
                if (_this.state.keyboardIndex + 1 < _this.state.filteredItems.length) {
                    _this.setState({
                        keyboardIndex: _this.state.keyboardIndex + 1
                    });
                    e.stopPropagation();
                }
            }
            // up or left
            if (e.keyCode === KeyCodes.KEY_UpArrow || e.keyCode === KeyCodes.KEY_LeftArrow) {
                if (_this.state.keyboardIndex - 1 > -1) {
                    _this.setState({
                        keyboardIndex: _this.state.keyboardIndex - 1
                    });
                    e.stopPropagation();
                }
            }
            // enter
            if (e.keyCode === KeyCodes.KEY_Enter) {
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
                selectedItems: _this.state.selectedItems.concat([item])
            });
        };
        _this.unselectItem = function (item) {
            var index = __1.utils.findIndexWhere(_this.state.selectedItems, function (a) {
                return _this.props.itemComparison(a, item);
            });
            var selectedItems = lodash_1.cloneDeep(_this.state.selectedItems);
            selectedItems.splice(index, 1);
            _this.setState({
                selectedItems: selectedItems,
                keyboardIndex: -1
            });
        };
        var items = lodash_1.cloneDeep(props.items);
        _this.state = {
            items: items,
            filteredItems: items,
            selectedItems: lodash_1.cloneDeep(props.selectedItems),
            filterText: '',
            keyboardIndex: -1
        };
        return _this;
    }
    MultiSelect.prototype.render = function () {
        var _this = this;
        var customStyles = this.props.styles || {};
        return React.createElement(Container, { style: customStyles.container }, React.createElement(__1.Input, __assign({ inputRef: function inputRef(r) {
                return _this.inputRef = r;
            }, onChange: this.onInputChanged, onKeyDown: this.onKeyDown }, this.props.inputProps)), React.createElement("div", { style: { position: 'relative' } }, React.createElement("div", { style: { position: 'absolute', width: '100%', zIndex: 1 } }, React.createElement(SelectedItemList, { style: customStyles.selectedItemList }, this.state.selectedItems.map(function (i) {
            return React.createElement(Selected, { style: customStyles.selected, onClick: function onClick() {
                    return _this.unselectItem(i);
                } }, React.createElement("div", { style: customStyles.selectedItem }, _this.props.renderSelectedItem(i, _this.props.renderData)), React.createElement(RemoveSelected, { style: customStyles.removeSelected }, React.createElement("i", { className: 'fa fa-times' })));
        })), React.createElement(List, { style: customStyles.list }, this.state.filteredItems.map(function (item, index) {
            if (__1.utils.findIndexWhere(_this.state.selectedItems, function (i) {
                return _this.props.itemComparison(i, item);
            }) > -1) {
                return null;
            }
            return React.createElement("div", { key: index, style: _this.state.keyboardIndex === index ? __assign({}, customStyles.listItem, customStyles.highlightItem) : customStyles.listItem, onClick: function onClick() {
                    return _this.selectItem(item);
                } }, _this.props.renderListItem(item, _this.props.renderData));
        })))));
    };
    return MultiSelect;
}(React.Component);
exports.MultiSelect = MultiSelect;
exports.default = MultiSelect;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;