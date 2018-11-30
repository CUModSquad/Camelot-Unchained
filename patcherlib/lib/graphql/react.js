"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

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
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var query_1 = require("./query");
var subscription_1 = require("./subscription");
var ErrorBoundary_1 = require("../components/ErrorBoundary");
var withDefaults_1 = require("../utils/withDefaults");
var defaultGraphQLOptions = __assign({}, query_1.defaultQueryOpts, { pollInterval: 0 });
var GraphQLClient = /** @class */function () {
    function GraphQLClient(options) {
        var _this = this;
        this.query = function (query) {
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.lastQuery = query;
                            this.lastQuery.query = query_1.parseQuery(query.query);
                            return [4 /*yield*/, this.refetch()];
                        case 1:
                            return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        this.refetch = function () {
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.lastQuery) {
                                return [2 /*return*/, {
                                    data: null,
                                    ok: false,
                                    statusText: 'No query to refetch.'
                                }];
                            }
                            return [4 /*yield*/, query_1.query({
                                query: this.lastQuery.query,
                                operationName: this.lastQuery.operationName,
                                namedQuery: this.lastQuery.namedQuery,
                                useNamedQueryCache: this.lastQuery.useNamedQueryCache,
                                variables: this.lastQuery.variables
                            }, this.conf)];
                        case 1:
                            return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        this.conf = options;
    }
    return GraphQLClient;
}();
exports.GraphQLClient = GraphQLClient;
var queryConf = withDefaults_1.withDefaults(null, query_1.defaultQueryOpts);
var getQueryConf = function getQueryConf() {
    return null;
};
function getQueryOptions() {
    return __assign({}, defaultGraphQLOptions, withDefaults_1.withDefaults(getQueryConf(), queryConf));
}
function setQueryOptions(queryOptions) {
    queryConf = queryOptions;
}
var subsConf = withDefaults_1.withDefaults(null, subscription_1.defaultSubscriptionOpts);
var getSubscriptionConf = function getSubscriptionConf() {
    return null;
};
function getSubscriptionOptions() {
    return __assign({}, subscription_1.defaultSubscriptionOpts, withDefaults_1.withDefaults(getSubscriptionConf(), subsConf));
}
function setSubscriptionOptions(subscriptionOptions) {
    subsConf = subscriptionOptions;
}
function useConfig(getQueryConfig, getSubscriptionConfig) {
    getQueryConf = getQueryConfig;
    getSubscriptionConf = getSubscriptionConfig;
    queryConf = withDefaults_1.withDefaults(getQueryConfig(), queryConf);
    subsConf = withDefaults_1.withDefaults(getSubscriptionConfig(), subsConf);
}
exports.useConfig = useConfig;
var GraphQL = /** @class */function (_super) {
    __extends(GraphQL, _super);
    function GraphQL(props) {
        var _this = _super.call(this, props) || this;
        _this.pollingTimeout = null;
        _this.subscriptionHandler = function (result) {
            if (!_this.props.subscriptionHandler) return;
            var data = _this.props.subscriptionHandler(result, _this.state.data);
            _this.setState({ data: data });
            _this.props.onQueryResult && _this.props.onQueryResult(__assign({}, _this.state, { data: data, client: _this.client, refetch: _this.refetch }));
        };
        _this.subscriptionError = function (e) {
            console.error(e);
        };
        _this.refetch = function () {
            return __awaiter(_this, void 0, void 0, function () {
                var query;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.query) return [2 /*return*/];
                            query = this.updateConfig();
                            return [4 /*yield*/, this.refetchQuery(query)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.refetchQuery = function (query) {
            return __awaiter(_this, void 0, void 0, function () {
                var result, state;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.state.loading === false) {
                                this.setState({ loading: true });
                            }
                            return [4 /*yield*/, this.client.query(query || this.query)];
                        case 1:
                            result = _a.sent();
                            state = {
                                data: result.data,
                                loading: false,
                                ok: result.ok,
                                lastError: result.statusText
                            };
                            this.setState(state);
                            this.props.onQueryResult && this.props.onQueryResult(__assign({}, state, { client: this.client, refetch: this.refetch }));
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.pollingRefetch = function () {
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/, this.refetch()];
                        case 1:
                            _a.sent();
                            this.pollingTimeout = window.setTimeout(this.pollingRefetch, this.queryOptions.pollInterval);
                            return [2 /*return*/];
                    }
                });
            });
        };
        _this.updateConfig = function () {
            if (typeof _this.props.useConfig === 'function') {
                var config = _this.props.useConfig();
                var queryConfChanged = !_.isEqual(config.queryConf, queryConf);
                var subsConfChanged = !_.isEqual(config.subsConf, subsConf);
                if (queryConfChanged || subsConfChanged) {
                    if (queryConfChanged) {
                        // Only set query options if there is a difference
                        setQueryOptions(config.queryConf);
                        _this.queryOptions = getQueryOptions();
                    }
                    if (subsConfChanged) {
                        // Only set subscription options if there is a difference
                        setSubscriptionOptions(config.subsConf);
                        _this.subscriptionOptions = getSubscriptionOptions();
                    }
                    // Update graphql client
                    _this.client = new GraphQLClient({
                        url: _this.queryOptions.url,
                        requestOptions: _this.queryOptions.requestOptions,
                        stringifyVariables: _this.queryOptions.stringifyVariables
                    });
                    var q = typeof _this.props.query === 'string' ? { query: _this.props.query } : _this.props.query;
                    _this.query = withDefaults_1.withDefaults(q, query_1.defaultQuery);
                }
            } else {
                useConfig(getQueryConf, getSubscriptionConf);
                _this.queryOptions = withDefaults_1.withDefaults(getQueryConf(), _this.queryOptions);
                // Update graphql client
                _this.client = new GraphQLClient({
                    url: _this.queryOptions.url,
                    requestOptions: _this.queryOptions.requestOptions,
                    stringifyVariables: _this.queryOptions.stringifyVariables
                });
            }
            return _this.query;
        };
        _this.state = {
            data: props.initialData || null,
            loading: false,
            ok: false,
            lastError: null
        };
        if (props.query) {
            var q = void 0;
            if (typeof props.query === 'string' || props.query.hasOwnProperty('loc') || props.query.hasOwnProperty('definitions')) {
                q = { query: props.query };
            } else {
                q = props.query;
            }
            _this.query = withDefaults_1.withDefaults(q, query_1.defaultQuery);
            var qp = typeof props.query === 'string' ? {} : props.query;
            if (typeof props.useConfig === 'function') {
                var config = props.useConfig();
                setQueryOptions(config.queryConf);
                setSubscriptionOptions(config.subsConf);
            }
            _this.queryOptions = withDefaults_1.withDefaults(qp, getQueryOptions());
            _this.client = new GraphQLClient({
                url: _this.queryOptions.url,
                requestOptions: _this.queryOptions.requestOptions,
                stringifyVariables: _this.queryOptions.stringifyVariables
            });
        }
        if (props.subscription) {
            var s = void 0;
            if (typeof props.subscription === 'string' || props.subscription.hasOwnProperty('loc')) {
                s = { query: props.subscription };
            } else {
                s = props.subscription;
            }
            _this.subscription = withDefaults_1.withDefaults(s, subscription_1.defaultSubscription);
            _this.subscriptionOptions = withDefaults_1.withDefaults(s, getSubscriptionOptions());
        }
        return _this;
    }
    GraphQL.prototype.render = function () {
        return React.createElement(ErrorBoundary_1.ErrorBoundary, { renderError: function renderError(error) {
                return React.createElement("span", null, "GraphQL Component Error: ", error);
            } }, this.props.children ? this.props.children(__assign({}, this.state, { client: this.client, refetch: this.refetch })) : null);
    };
    GraphQL.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_.isEqual(this.state, nextState)) return true;
        if (!_.isEqual(this.props, nextProps)) return true;
        return false;
    };
    GraphQL.prototype.componentDidMount = function () {
        if (this.queryOptions && this.queryOptions.pollInterval && this.queryOptions.pollInterval > 0) {
            this.pollingRefetch();
        } else if (this.state.data === null) {
            this.refetch();
        }
        if (this.props.subscription) {
            var result = subscription_1.subscribe(this.subscription, this.subscriptionHandler, this.subscriptionOptions, this.subscriptionError);
            this.subscriptionID = result.id;
            this.subscriptionManager = result.subscriptions;
        }
    };
    GraphQL.prototype.componentWillReceiveProps = function (nextProps) {
        if (!_.isEqual(this.props.query, nextProps.query)) {
            var q = void 0;
            if (typeof nextProps.query === 'string' || nextProps.query.hasOwnProperty('loc')) {
                q = { query: nextProps.query };
            } else {
                q = nextProps.query;
            }
            this.query = withDefaults_1.withDefaults(q, query_1.defaultQuery);
        }
    };
    GraphQL.prototype.componentWillUnmount = function () {
        if (this.pollingTimeout) {
            window.clearTimeout(this.pollingTimeout);
            this.pollingTimeout = null;
        }
        if (this.subscriptionManager) {
            this.subscriptionManager.stop(this.subscriptionID);
        }
    };
    return GraphQL;
}(React.Component);
exports.GraphQL = GraphQL;
function withGraphQL(query, options) {
    return function (WrappedComponent) {
        return (/** @class */function (_super) {
                __extends(class_1, _super);
                function class_1(props) {
                    var _this = _super.call(this, props) || this;
                    var q = typeof query === 'function' ? query(props) : query;
                    var opts = typeof options === 'function' ? options(props) : options;
                    if (typeof q === 'string' || q.hasOwnProperty('loc')) {
                        _this.queryProp = __assign({ query: q }, opts);
                    } else {
                        _this.queryProp = __assign({}, q, opts);
                    }
                    return _this;
                }
                class_1.prototype.render = function () {
                    var _this = this;
                    return React.createElement(GraphQL, { query: this.queryProp }, function (graphql) {
                        return React.createElement(WrappedComponent, __assign({ graphql: graphql }, _this.props));
                    });
                };
                return class_1;
            }(React.Component)
        );
    };
}
exports.withGraphQL = withGraphQL;