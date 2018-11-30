"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils_1 = require("./objectUtils");
exports.defaultAction = {
    type: null,
    when: null
};
exports.defaultFetchStatus = {
    isFetching: false,
    lastFetchStart: null,
    lastFetchSuccess: null,
    lastFetchFailed: null,
    lastError: ''
};
function loggingMiddleware(store) {
    return function (next) {
        return function (action) {
            console.group("ACTION | " + action.type);
            console.log('dispatching', action);
            var result = next(action);
            console.log('next state', store.getState());
            console.groupEnd();
            return result;
        };
    };
}
exports.loggingMiddleware = loggingMiddleware;
function crashReporterMiddleware(store) {
    return function (next) {
        return function (action) {
            try {
                return next(action);
            } catch (err) {
                console.error('Caught an exception!', err);
                console.log('state', store.getState());
                throw err;
            }
        };
    };
}
exports.crashReporterMiddleware = crashReporterMiddleware;
function thunkMiddleware(store) {
    return function (next) {
        return function (action) {
            return typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
        };
    };
}
exports.thunkMiddleware = thunkMiddleware;
function createReducer(defaultState, actions) {
    var actionDefs = objectUtils_1.clone(actions);
    return function (state, action) {
        if (state === void 0) {
            state = defaultState;
        }
        if (action === void 0) {
            action = exports.defaultAction;
        }
        var def = actionDefs[action.type];
        if (typeof def === 'undefined' || def === null) return state;
        return def(state, action);
    };
}
exports.createReducer = createReducer;