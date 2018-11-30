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
var ControllerButton = react_emotion_1.default('button')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  cursor: pointer;\n  &:active {\n    text-shadow: 1px 1px rgba(0, 0, 0, 0.7);\n  }\n"], ["\n  display: inline-block;\n  cursor: pointer;\n  &:active {\n    text-shadow: 1px 1px rgba(0, 0, 0, 0.7);\n  }\n"])));
var PageNumberText = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0;\n"], ["\n  margin: 0;\n"])));
var PageController = /** @class */function (_super) {
    __extends(PageController, _super);
    function PageController(props) {
        var _this = _super.call(this, props) || this;
        _this.renderPageController = function (customStyles) {
            var moreNext = _this.state.activePageIndex < _this.props.pages.length - 1;
            var morePrev = _this.state.activePageIndex > 0;
            return React.createElement("div", { className: customStyles.controllerContainer }, React.createElement(ControllerButton, { className: !morePrev ? react_emotion_1.cx(customStyles.controllerButton, customStyles.disabledControllerButton) : customStyles.controllerButton, onClick: _this.onPrevPage }, _this.props.prevButtonText || '<Prev'), React.createElement("p", { className: customStyles.pageNumberText }, _this.state.activePageIndex + 1, " / ", _this.props.pages.length), React.createElement(ControllerButton, { className: !moreNext ? react_emotion_1.cx(customStyles.controllerButton, customStyles.disabledControllerButton) : customStyles.controllerButton, onClick: _this.onNextPage }, _this.props.nextButtonText || 'Next>'));
        };
        _this.onNextPage = function () {
            if (_this.state.activePageIndex < _this.props.pages.length - 1) {
                var nextPageIndex = _this.state.activePageIndex + 1;
                _this.setState({ activePageIndex: nextPageIndex });
                if (typeof _this.props.onNextPageClick === 'function') {
                    _this.props.onNextPageClick(nextPageIndex);
                    _this.props.onPageChange(nextPageIndex);
                }
            }
        };
        _this.onPrevPage = function () {
            if (_this.state.activePageIndex > 0) {
                var prevPageIndex = _this.state.activePageIndex - 1;
                _this.setState({ activePageIndex: _this.state.activePageIndex - 1 });
                if (typeof _this.props.onPrevPageClick === 'function') {
                    _this.props.onPrevPageClick(prevPageIndex);
                    _this.props.onPageChange(prevPageIndex);
                }
            }
        };
        _this.state = {
            activePageIndex: 0
        };
        return _this;
    }
    PageController.prototype.render = function () {
        var customStyles = this.props.styles || {};
        var activeContent = this.props.pages[this.state.activePageIndex];
        var _a = this.props,
            renderHeaderContainer = _a.renderHeaderContainer,
            renderPageController = _a.renderPageController;
        return React.createElement("div", { className: customStyles.PageController }, renderHeaderContainer && renderHeaderContainer(this.state, this.props), renderPageController ? renderPageController(this.state, this.props, this.onNextPage, this.onPrevPage) : this.renderPageController(customStyles), activeContent && React.createElement(activeContent.render, __assign({}, activeContent.props)));
    };
    PageController.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.pages.length < this.state.activePageIndex) {
            this.setState({ activePageIndex: 0 });
            this.props.onPageChange(0);
        }
    };
    return PageController;
}(React.Component);
exports.PageController = PageController;
exports.default = PageController;
var templateObject_1, templateObject_2;