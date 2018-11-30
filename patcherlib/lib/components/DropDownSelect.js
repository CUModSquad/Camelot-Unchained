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
var lodash_1 = require("lodash");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  position: relative;\n  user-select: none;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-content: stretch;\n  position: relative;\n  user-select: none;\n"])));
var ListWrapper = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  flex: 1;\n  display: flex;\n  width: 100%;\n"], ["\n  position: relative;\n  flex: 1;\n  display: flex;\n  width: 100%;\n"])));
var List = react_emotion_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap\n  flex: 1 1 auto;\n  position: absolute;\n  min-height: 0px;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  user-select: none;\n  background-color: #444;\n  z-index: 8888;\n  transition: all 0.5s;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap\n  flex: 1 1 auto;\n  position: absolute;\n  min-height: 0px;\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  user-select: none;\n  background-color: #444;\n  z-index: 8888;\n  transition: all 0.5s;\n"])));
var ListMinimized = react_emotion_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  max-height: 0px;\n"], ["\n  max-height: 0px;\n"])));
var ListItem = react_emotion_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  flex: 1;\n  cursor: pointer;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"])));
var HighlightItem = react_emotion_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.2);\n"], ["\n  background-color: rgba(0, 0, 0, 0.2);\n"])));
var Selected = react_emotion_1.default('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n"], ["\n  display: flex;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n"])));
var Caret = react_emotion_1.default('div')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  flex: 0;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.1);\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  flex: 0;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.1);\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"])));
var SelectedItem = react_emotion_1.default('div')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
var DropDownSelect = /** @class */function (_super) {
    __extends(DropDownSelect, _super);
    function DropDownSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedItem = function () {
            return _this.state.selectedItem;
        };
        _this.onKeyDown = function (e) {
            // down or right
            if (e.keyCode === 40 || e.keyCode === 39) {
                if (_this.state.keyboardIndex + 1 < _this.state.items.length) {
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
                    _this.selectItem(_this.state.items[_this.state.keyboardIndex]);
                    e.stopPropagation();
                }
            }
        };
        _this.selectItem = function (item) {
            _this.setState({
                keyboardIndex: -1,
                selectedItem: item,
                dropDownOpen: false
            });
            _this.props.onSelectedItemChaned(item);
        };
        var items = lodash_1.cloneDeep(_this.props.items);
        _this.state = {
            items: items,
            selectedItem: _this.props.selectedItem || items[0],
            keyboardIndex: -1,
            dropDownOpen: false
        };
        return _this;
    }
    DropDownSelect.prototype.render = function () {
        var _this = this;
        var customStyles = this.props.styles || {};
        return React.createElement(Container, { style: customStyles.container, onKeyDown: this.onKeyDown }, React.createElement(Selected, { style: customStyles.selected, onClick: function onClick() {
                return _this.setState({ dropDownOpen: !_this.state.dropDownOpen });
            } }, React.createElement(SelectedItem, { style: customStyles.selectedItem }, this.props.renderSelectedItem(this.state.selectedItem, this.props.renderData)), React.createElement(Caret, { style: customStyles.caret }, React.createElement("i", { className: "fa fa-caret-" + (this.state.dropDownOpen ? 'up' : 'down') }))), React.createElement(ListWrapper, { style: customStyles.listWrapper }, React.createElement("div", { className: this.state.dropDownOpen ? List : ListMinimized, style: this.state.dropDownOpen ? customStyles.list : customStyles.listMinimized }, this.state.items.map(function (item, index) {
            if (item === _this.state.selectedItem) return null;
            return React.createElement(ListItem, { key: index, className: _this.state.keyboardIndex === index ? HighlightItem : '', style: _this.state.keyboardIndex === index ? __assign({}, customStyles.listItem, customStyles.highlightItem) : customStyles.listItem, onClick: function onClick() {
                    return _this.selectItem(item);
                } }, _this.props.renderListItem(item, _this.props.renderData));
        }))));
    };
    return DropDownSelect;
}(React.Component);
exports.DropDownSelect = DropDownSelect;
exports.default = DropDownSelect;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;