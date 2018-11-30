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
var Flyout_1 = require("./Flyout");
var RaisedButton_1 = require("./RaisedButton");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n"])));
var Header = react_emotion_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  color: #777;\n  font-weight: bold;\n  min-height: 2em;\n  padding: 5px;\n"], ["\n  display: flex;\n  color: #777;\n  font-weight: bold;\n  min-height: 2em;\n  padding: 5px;\n"])));
var HeaderItem = react_emotion_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  user-select: none;\n  cursor: default;\n  flex: 1;\n  margin: 0 5px;\n"], ["\n  user-select: none;\n  cursor: default;\n  flex: 1;\n  margin: 0 5px;\n"])));
var SortableHeaderItem = react_emotion_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var Grid = react_emotion_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  overfloy-y: auto;\n  padding-top: 10px;\n"], ["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  overfloy-y: auto;\n  padding-top: 10px;\n"])));
var GridItem = react_emotion_1.default('span')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 1;\n  margin: 0 5px;\n  min-width: 0;\n  display: flex;\n"], ["\n  flex: 1;\n  margin: 0 5px;\n  min-width: 0;\n  display: flex;\n"])));
var Row = react_emotion_1.default('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  flex: 0;\n  padding: 5px;\n  &:nth-child(even) {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n"], ["\n  display: flex;\n  flex: 0;\n  padding: 5px;\n  &:nth-child(even) {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n"])));
var RowMenu = react_emotion_1.default('span')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  min-width: 10px;\n  max-width: 10px;\n  width: 10px;\n  cursor: pointer;\n  flex: 0;\n"], ["\n  min-width: 10px;\n  max-width: 10px;\n  width: 10px;\n  cursor: pointer;\n  flex: 0;\n"])));
var Pagination = react_emotion_1.default('div')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  flex: 0;\n  align-content: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-self: center;\n  flex: 0;\n  align-content: center;\n  justify-content: center;\n"])));
var PageButton = react_emotion_1.default('div')(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  flex: 0;\n  font-size: 0.8em;\n"], ["\n  flex: 0;\n  font-size: 0.8em;\n"])));
var GridViewSort;
(function (GridViewSort) {
    GridViewSort[GridViewSort["None"] = 0] = "None";
    GridViewSort[GridViewSort["Up"] = 1] = "Up";
    GridViewSort[GridViewSort["Down"] = 2] = "Down";
})(GridViewSort = exports.GridViewSort || (exports.GridViewSort = {}));
var GridViewImpl = /** @class */function (_super) {
    __extends(GridViewImpl, _super);
    function GridViewImpl(props) {
        var _this = _super.call(this, props) || this;
        _this.sortItems = function (input, column, sorted) {
            if (sorted === GridViewSort.None) return input;
            if (!column.sortFunction) {
                column.sortFunction = function (a, b) {
                    return column.key(a) < column.key(b) ? 1 : -1;
                };
            }
            return input.sort(function (a, b) {
                return sorted === GridViewSort.Down ? column.sortFunction(a, b) : column.sortFunction(a, b) * -1;
            });
        };
        _this.setSort = function (index, sortBy) {
            var currentSort = { index: index, sorted: sortBy };
            _this.setState({
                currentSort: currentSort,
                sortedItems: _this.sortItems(_this.state.sortedItems, _this.props.columnDefinitions[index], currentSort.sorted)
            });
        };
        /*
         * PAGING interface
         */
        _this.getItemCount = function () {
            return _this.state.items.length;
        };
        _this.getItemsPerPage = function () {
            return _this.state.itemsPerPage;
        };
        _this.getCurrentPage = function () {
            return _this.state.page;
        };
        _this.goToPage = function (page) {
            _this.setState({
                page: page
            });
        };
        /*
         * RENDERING
         */
        _this.renderHeaderItems = function (customStyles) {
            var headerItems = [];
            _this.props.columnDefinitions.forEach(function (pdef, index) {
                var def = _this.props.columnDefinitions[index];
                var sorted = index === _this.state.currentSort.index ? _this.state.currentSort.sorted : GridViewSort.None;
                // if (def.viewPermission && ql.hasPermission(this.props.userPermissions, def.viewPermission) === false) return;
                headerItems.push(React.createElement(HeaderItem, { key: index, className: def.sortable ? SortableHeaderItem : '', style: def.style, onClick: def.sortable ? function () {
                        switch (sorted) {
                            case GridViewSort.None:
                            case GridViewSort.Down:
                                _this.setSort(index, GridViewSort.Up);
                                return;
                            case GridViewSort.Up:
                                _this.setSort(index, GridViewSort.Down);
                                return;
                        }
                    } : null }, def.title, "\xA0", sorted === GridViewSort.None ? null : React.createElement("i", { className: "fa fa-caret-" + (sorted === GridViewSort.Up ? 'up' : 'down') })));
            });
            return headerItems;
        };
        _this.renderRow = function (item, rowKey, customStyles) {
            var items = [];
            _this.props.columnDefinitions.forEach(function (pdef, index) {
                var def = _this.props.columnDefinitions[index];
                // if (def.viewPermission && ql.hasPermission(this.props.userPermissions, def.viewPermission) === false) return;
                if (def.renderItem) {
                    items.push(React.createElement(GridItem, { key: index, style: __assign({}, customStyles.gridItem, def.style) }, def.renderItem(item, _this.props.renderData)));
                    return;
                }
                items.push(React.createElement(GridItem, { key: index, style: __assign({}, customStyles.gridItem, def.style) }, def.key(item)));
            });
            if (_this.props.rowMenu) {
                items.push(React.createElement(RowMenu, { key: 'menu', style: customStyles.rowMenu }, React.createElement(Flyout_1.default, { content: function content(props) {
                        return _this.props.rowMenu(item, props.close);
                    }, style: _this.props.rowMenuStyle }, React.createElement("i", { className: 'fa fa-ellipsis-v click-effect' }))));
            }
            return React.createElement(Row, { key: rowKey, style: customStyles.row }, items);
        };
        _this.renderGrid = function (customStyles) {
            var state = _this.state;
            var startIndex = state.page * state.itemsPerPage;
            var rows = [];
            for (var index = startIndex; index - startIndex < state.itemsPerPage && index < state.sortedItems.length; ++index) {
                rows.push(_this.renderRow(state.sortedItems[index], index, customStyles));
            }
            return React.createElement(Grid, { style: customStyles.grid }, rows);
        };
        _this.renderPagination = function (customStyles) {
            var state = _this.state;
            var itemCount = _this.getItemCount();
            var itemsPerPage = _this.getItemsPerPage();
            var page = _this.getCurrentPage();
            var pageCount = Math.ceil(itemCount / itemsPerPage);
            if (pageCount <= 1) {
                return null;
            }
            var pages = [];
            // back to 0 button
            pages.push(React.createElement(RaisedButton_1.default, { key: 'back-full', disabled: page < 1, onClick: function onClick() {
                    return _this.goToPage(0);
                }, styles: {
                    button: {
                        margin: '5px'
                    },
                    buttonDisabled: {
                        margin: '5px'
                    }
                } }, React.createElement(PageButton, { style: customStyles.pageButton }, React.createElement("i", { className: 'fa fa-backward' }))));
            // back a single page button
            pages.push(React.createElement(RaisedButton_1.default, { key: 'back-one', disabled: page < 1, onClick: function onClick() {
                    return _this.goToPage(page - 1);
                }, styles: {
                    button: {
                        margin: '5px'
                    },
                    buttonDisabled: {
                        margin: '5px'
                    }
                } }, React.createElement(PageButton, { style: customStyles.pageButton }, React.createElement("i", { className: 'fa fa-step-backward' }))));
            // insert page numbers
            var start = page - 2;
            if (start < 0) start = 0;
            var end = page + 3;
            if (end > pageCount) end = pageCount;
            var _loop_1 = function _loop_1(i) {
                // render current page as disabled
                if (i === page) {
                    pages.push(React.createElement(RaisedButton_1.default, { key: i, disabled: true, styles: {
                            button: {
                                margin: '5px'
                            },
                            buttonDisabled: {
                                margin: '5px'
                            }
                        } }, React.createElement(PageButton, { style: customStyles.pageButton }, i + 1)));
                    return "continue";
                }
                pages.push(React.createElement(RaisedButton_1.default, { key: i, onClick: function onClick() {
                        return _this.goToPage(i);
                    }, styles: {
                        button: {
                            margin: '5px'
                        },
                        buttonDisabled: {
                            margin: '5px'
                        }
                    } }, React.createElement(PageButton, { style: customStyles.pageButton }, i + 1)));
            };
            for (var i = start; i < end; ++i) {
                _loop_1(i);
            }
            // forward one page button
            pages.push(React.createElement(RaisedButton_1.default, { key: 'forward-one', disabled: page > pageCount - 2, onClick: function onClick() {
                    return _this.goToPage(page + 1);
                }, styles: {
                    button: {
                        margin: '5px'
                    },
                    buttonDisabled: {
                        margin: '5px'
                    }
                } }, React.createElement(PageButton, { style: customStyles.pageButton }, React.createElement("i", { className: 'fa fa-step-forward' }))));
            // go to last page button
            pages.push(React.createElement(RaisedButton_1.default, { key: 'forward-full', disabled: page > pageCount - 2, onClick: function onClick() {
                    return _this.goToPage(pageCount - 1);
                }, styles: {
                    button: {
                        margin: '5px'
                    },
                    buttonDisabled: {
                        margin: '5px'
                    }
                } }, React.createElement(PageButton, { style: customStyles.pageButton }, React.createElement("i", { className: 'fa fa-forward' }))));
            return React.createElement(Pagination, { style: customStyles.pagination }, pages);
        };
        var items = lodash_1.cloneDeep(props.items);
        _this.state = {
            items: items,
            currentSort: { index: -1, sorted: GridViewSort.None },
            itemsPerPage: props.itemsPerPage || 25,
            sortedItems: items,
            page: 0
        };
        return _this;
    }
    GridViewImpl.prototype.render = function () {
        var customStyles = this.props.styles || {};
        return React.createElement(Container, { style: customStyles.container }, React.createElement(Header, { style: customStyles.header }, this.renderHeaderItems(customStyles)), this.renderGrid(customStyles), this.renderPagination(customStyles));
    };
    GridViewImpl.prototype.componentWillReceiveProps = function (nextProps) {
        var items = lodash_1.cloneDeep(nextProps.items);
        var sortedItems = this.sortItems(items, this.props.columnDefinitions[this.state.currentSort.index], this.state.currentSort.sorted);
        this.setState({
            items: items,
            sortedItems: sortedItems,
            itemsPerPage: this.props.itemsPerPage || 25
        });
    };
    return GridViewImpl;
}(React.Component);
exports.GridViewImpl = GridViewImpl;
var GridView = /** @class */function (_super) {
    __extends(GridView, _super);
    function GridView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GridView;
}(GridViewImpl);
exports.GridView = GridView;
exports.default = GridView;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;