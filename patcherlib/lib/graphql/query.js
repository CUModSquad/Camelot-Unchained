"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

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
var request_1 = require("../utils/request");
var Raven = require("raven-js");
var withDefaults_1 = require("../utils/withDefaults");
// issues with graphql .mjs file usage
// tslint:disable-next-line
var print = require('graphql/language/printer.js').print;
exports.defaultQueryOpts = {
    url: '/graphql',
    requestOptions: {
        headers: {},
        ignoreCache: false,
        timeout: 5000
    },
    stringifyVariables: false
};
exports.defaultQuery = {
    operationName: null,
    namedQuery: null,
    useNamedQueryCache: true,
    query: '{}',
    variables: null
};
function parseQuery(query) {
    if (typeof query === 'string') {
        return query;
    }
    if (query.hasOwnProperty('loc') || query.hasOwnProperty('definitions')) {
        return print(query);
    }
    var queryString = '';
    query.definitions.forEach(function (definition) {
        queryString = queryString + " " + definition.loc.source.body;
        return;
    });
    return queryString;
}
exports.parseQuery = parseQuery;
function errorResult(msg) {
    return {
        data: null,
        ok: false,
        statusText: msg
    };
}
function getMessage(obj) {
    return obj.message;
}
function query(query, options) {
    return __awaiter(this, void 0, void 0, function () {
        var q, opts, response, result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    q = withDefaults_1.withDefaults(query, exports.defaultQuery);
                    opts = withDefaults_1.withDefaults(options, exports.defaultQueryOpts);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3,, 4]);
                    return [4 /*yield*/, request_1.request('post', opts.url, {}, __assign({}, q, { query: parseQuery(q.query), variables: opts.stringifyVariables ? JSON.stringify(q.variables) : q.variables }), __assign({}, opts.requestOptions, { headers: __assign({}, opts.requestOptions.headers, { 'Content-Type': 'application/json', Accept: 'application/json' }) }))];
                case 2:
                    response = _a.sent();
                    if (response.ok) {
                        result = JSON.parse(response.data);
                        if (result.errors) {
                            // TODO log sentry error here?
                            console.error('GraphQL Server Error:', {
                                errors: result.errors.map(getMessage).join(' '),
                                query: q.query,
                                operationName: q.operationName,
                                namedQuery: q.namedQuery,
                                useNamedQueryCache: q.useNamedQueryCache,
                                variables: JSON.stringify(q.variables)
                            });
                        }
                        return [2 /*return*/, {
                            data: result.data,
                            ok: result.data !== undefined && result.errors === undefined,
                            statusText: result.errors === undefined ? 'OK' : result.errors.map(getMessage).join(' ')
                        }];
                    }
                    // TODO log sentry error here?
                    console.error('GraphQL Request Error:', {
                        errors: response.statusText,
                        query: q.query,
                        operationName: q.operationName,
                        namedQuery: q.namedQuery,
                        useNamedQueryCache: q.useNamedQueryCache,
                        variables: JSON.stringify(q.variables)
                    });
                    return [2 /*return*/, errorResult(response.statusText)];
                case 3:
                    err_1 = _a.sent();
                    Raven.captureException(err_1);
                    return [2 /*return*/, errorResult(err_1)];
                case 4:
                    return [2 /*return*/];
            }
        });
    });
}
exports.query = query;