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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_emotion_1 = require("react-emotion");
var __1 = require("..");
var redux_typed_modules_1 = require("redux-typed-modules");
var DropDownSelect_1 = require("./DropDownSelect");
var DefaultView = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  flex: 1;\n  cursor: pointer;\n"], ["\n  position: relative;\n  flex: 1;\n  cursor: pointer;\n"])));
var EditModeContainer = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n"], ["\n  position: relative;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n"])));
var EditModeButtons = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row-reverse;\n"], ["\n  display: flex;\n  flex-direction: row-reverse;\n"])));
var EditButton = react_emotion_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  font-size: 0.9em;\n"], ["\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  font-size: 0.9em;\n"])));
var Error = react_emotion_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: darkred;\n  font-size: 0.9em;\n"], ["\n  color: darkred;\n  font-size: 0.9em;\n"])));
var InlineDropDownSelectEdit = /** @class */function (_super) {
    __extends(InlineDropDownSelectEdit, _super);
    function InlineDropDownSelectEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.editModeListenerID = null;
        _this.id = '';
        _this.dropDownRef = null;
        _this.onEditModeActiveEvent = function (id) {
            if (_this.id === id) return;
            if (_this.state.editMode) {
                _this.deactivateEditMode();
            }
        };
        _this.onMouseleave = function () {
            if (_this.state.showEditButton === false) return;
            _this.setState({ showEditButton: false });
        };
        _this.onKeyDown = function (e) {
            // escape pressed
            if (e.keyCode === 27) {
                if (_this.state.editMode) {
                    _this.deactivateEditMode();
                    e.stopPropagation();
                }
            }
            // enter pressed
            if (e.keyCode === 13) {
                _this.doSave();
            }
        };
        _this.showEditButton = function () {
            if (_this.state.showEditButton) return;
            _this.setState({ showEditButton: true });
        };
        _this.doSave = function () {
            if (_this.props.value === _this.dropDownRef.selectedItem()) {
                _this.deactivateEditMode();
                return;
            }
            _this.props.onSave(_this.props.value, _this.dropDownRef.selectedItem()).then(function (result) {
                if (result.ok) {
                    _this.dropDownRef = null;
                    _this.setState({
                        saving: false,
                        editMode: false,
                        errors: null
                    });
                }
                _this.setState({
                    saving: false,
                    errors: result.error
                });
            });
            _this.setState({ saving: true });
        };
        _this.activateEditMode = function () {
            _this.setState({
                editMode: true,
                showEditButton: false
            });
            __1.events.fire(InlineDropDownSelectEdit.editModeActiveEvent, _this.id);
        };
        _this.deactivateEditMode = function () {
            _this.dropDownRef = null;
            _this.setState({ editMode: false });
        };
        _this.id = redux_typed_modules_1.generateID(7);
        _this.state = {
            editMode: false,
            showEditButton: false,
            saving: false,
            errors: null
        };
        return _this;
    }
    InlineDropDownSelectEdit.prototype.render = function () {
        var _this = this;
        var customStyles = this.props.styles || {};
        var DropDown = DropDownSelect_1.default;
        if (this.state.editMode) {
            return React.createElement(EditModeContainer, { style: customStyles.editModeContainer, onKeyDown: this.onKeyDown }, this.state.errors ? React.createElement(Error, { style: customStyles.error }, React.createElement(__1.Tooltip, { content: function content() {
                    return React.createElement("span", null, _this.state.errors);
                } }, React.createElement("i", { className: 'fa fa-exclamation-circle' }), " Save failed.")) : null, React.createElement(DropDown, { items: this.props.items, ref: function ref(r) {
                    return _this.dropDownRef = r;
                }, selectedItem: this.props.value, renderSelectedItem: this.props.renderSelectedItem, renderListItem: this.props.renderListItem, renderData: this.props.renderData, styles: this.props.dropDownStyles }), this.state.saving ? React.createElement(__1.FloatSpinner, { styles: { spinner: { position: 'absolute' } } }) : null, React.createElement(EditModeButtons, { style: customStyles.editModeButtons }, React.createElement("a", { style: {
                    marginLeft: '4px',
                    fontSize: '0.8em'
                }, onClick: this.deactivateEditMode }, "cancel"), React.createElement("a", { style: {
                    marginLeft: '4px',
                    fontSize: '0.8em'
                }, onClick: this.doSave }, "save")));
        }
        return React.createElement(DefaultView, { style: customStyles.defaultView, onMouseEnter: this.showEditButton, onMouseOver: this.showEditButton, onMouseLeave: this.onMouseleave, onClick: this.activateEditMode }, this.props.renderSelectedItem(this.props.value, this.props.renderData), this.state.showEditButton ? React.createElement(EditButton, { style: customStyles.editButton }, React.createElement("i", { className: 'fa fa-pencil' })) : null);
    };
    InlineDropDownSelectEdit.prototype.componentDidMount = function () {
        this.editModeListenerID = __1.events.on(InlineDropDownSelectEdit.editModeActiveEvent, this.onEditModeActiveEvent);
    };
    InlineDropDownSelectEdit.prototype.componentWillUnmount = function () {
        __1.events.off(this.editModeListenerID);
        this.editModeListenerID = null;
    };
    InlineDropDownSelectEdit.editModeActiveEvent = 'input-edit-mode-active';
    return InlineDropDownSelectEdit;
}(React.Component);
exports.InlineDropDownSelectEdit = InlineDropDownSelectEdit;
exports.default = InlineDropDownSelectEdit;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;