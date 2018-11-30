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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var react_emotion_1 = require("react-emotion");
var StatContainer = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var StatListSection = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n"], ["\n  flex: 1;\n"])));
exports.GridStats = function (props) {
    var customStyles = props.styles || {};
    var statArray = props.statArray;
    var numberOfItemsInGrid = Math.ceil(statArray.length / props.howManyGrids);
    var emptyListItems = props.shouldRenderEmptyListItems ? _.fill(Array(numberOfItemsInGrid * props.howManyGrids - statArray.length), '') : [];
    var beginningArrayIndex = 0;
    var arrayOfGrids = _.fill(Array(props.howManyGrids), '').map(function (ignore, index) {
        var isLastGrid = index + 1 === props.howManyGrids;
        var grids = [];
        if (isLastGrid) {
            grids = statArray.slice(beginningArrayIndex, numberOfItemsInGrid * (index + 1)).concat(emptyListItems);
        } else {
            grids = statArray.slice(beginningArrayIndex, numberOfItemsInGrid * (index + 1));
        }
        beginningArrayIndex = numberOfItemsInGrid * (index + 1);
        return grids;
    });
    return React.createElement(StatContainer, { style: customStyles.statContainer }, arrayOfGrids.map(function (grid, index) {
        return React.createElement(StatListSection, { key: index, style: customStyles.statListSection }, props.renderHeaderItem && props.renderHeaderItem(), grid.map(function (item, i) {
            return React.createElement("div", { key: i, style: customStyles.listItemContainer }, props.renderListItem(item, i));
        }));
    }));
};
var templateObject_1, templateObject_2;