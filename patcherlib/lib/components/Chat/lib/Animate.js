"use strict";
// Typescript conversion based on https://github.com/thiagoc7/react-animate.css
//  which is under the MIT license as indicated below
//
// The MIT License (MIT)
//
// Copyright (c) 2015 Ryan Florence
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
var react_transition_group_1 = require("react-transition-group");
function renderStyle(animationEnter, animationLeave, durationEnter, durationLeave) {
    return "\n    .default-enter {\n      opacity: 0;\n    }\n    .default-enter." + animationEnter + " {\n      animation-duration: " + durationEnter / 1000 + "s;\n      animation-fill-mode: both;\n      opacity: 1;\n    }\n    .default-leave {\n      opacity: 1;\n    }\n    .default-leave." + animationLeave + " {\n      animation-duration: " + durationLeave / 1000 + "s;\n      animation-fill-mode: both;\n    }\n    ";
}
var Animate = /** @class */function (_super) {
    __extends(Animate, _super);
    function Animate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animate.prototype.render = function () {
        var _a = this.props,
            children = _a.children,
            animationEnter = _a.animationEnter,
            animationLeave = _a.animationLeave,
            durationEnter = _a.durationEnter,
            durationLeave = _a.durationLeave;
        return React.createElement(react_transition_group_1.CSSTransitionGroup, { key: this.props.key, component: this.props.component ? this.props.component : 'div', transitionName: {
                enter: 'default-enter',
                enterActive: animationEnter,
                leave: 'default-leave',
                leaveActive: animationLeave
            }, transitionEnterTimeout: durationEnter, transitionLeaveTimeout: durationLeave, className: "" + (this.props.className ? this.props.className : '') }, React.createElement("style", { dangerouslySetInnerHTML: {
                __html: renderStyle(animationEnter, animationLeave, durationEnter, durationLeave)
            } }), children);
    };
    return Animate;
}(React.Component);
exports.default = Animate;