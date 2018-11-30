"use strict";

var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_emotion_1 = require("react-emotion");
var Tooltip_1 = require("./Tooltip");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin-right: 10px;\n"], ["\n  display: inline-block;\n  margin-right: 10px;\n"])));
var ButtonIcon = react_emotion_1.default('span')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 0.9em;\n  cursor: pointer;\n  text-shadow\n"], ["\n  font-size: 0.9em;\n  cursor: pointer;\n  text-shadow\n"])));
var Disabled = react_emotion_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: not-allowed;\n  text-shadow: 0;\n"], ["\n  cursor: not-allowed;\n  text-shadow: 0;\n"])));
exports.IconButton = function (props) {
    var customStyles = props.styles || {};
    var tooltipContent = props.tooltipContent,
        disabled = props.disabled,
        iconClass = props.iconClass,
        onClick = props.onClick,
        color = props.color,
        disabledColor = props.disabledColor,
        active = props.active,
        activeColor = props.activeColor;
    return React.createElement(Container, { onClick: !disabled ? onClick : null, style: customStyles.IconButton }, tooltipContent ? React.createElement(Tooltip_1.default, { content: tooltipContent }, React.createElement(ButtonIcon, { style: {
            color: !color ? 'white' : disabled && disabledColor ? disabledColor : active && activeColor ? activeColor : color
        }, className: "fa " + iconClass + " " + (!disabled ? 'click-effect' : '') + " " + (disabled && Disabled) })) : React.createElement(ButtonIcon, { style: { color: color }, className: "fa " + iconClass + " " + (!disabled ? 'click-effect' : '') + " " + (disabled && Disabled) }));
};
exports.default = exports.IconButton;
var templateObject_1, templateObject_2, templateObject_3;