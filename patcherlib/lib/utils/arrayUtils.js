"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils_1 = require("./objectUtils");
function cloneArray(array) {
    return array.slice();
}
exports.cloneArray = cloneArray;
function defaultCompare(a, b) {
    return a === b;
}
exports.defaultCompare = defaultCompare;
function findIndexWhere(arr, predicate) {
    if (!arr) return -1;
    var i = arr.length;
    while (--i >= 0) {
        if (predicate(arr[i])) return i;
    }
    return -1;
}
exports.findIndexWhere = findIndexWhere;
function findIndex(arr, obj, equals) {
    if (equals === void 0) {
        equals = defaultCompare;
    }
    if (!arr) return -1;
    var i = arr.length;
    while (--i >= 0) {
        if (equals(obj, arr[i])) return i;
    }
    return -1;
}
exports.findIndex = findIndex;
function addOrUpdate(arr, obj, equals) {
    if (equals === void 0) {
        equals = defaultCompare;
    }
    var copy = !arr ? [] : arr.slice();
    var index = -1;
    var i = copy.length;
    while (--i >= 0) {
        if (equals(obj, copy[i])) {
            index = i;
            break;
        }
    }
    if (index >= 0) {
        copy[index] = obj;
    } else {
        copy.push(obj);
    }
    return copy;
}
exports.addOrUpdate = addOrUpdate;
function remove(arr, obj, equals) {
    if (equals === void 0) {
        equals = defaultCompare;
    }
    if (!(arr && arr.length)) return arr;
    var copy = arr.slice();
    var index = -1;
    var i = copy.length;
    while (--i > -1) {
        if (equals(obj, copy[i])) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        copy.splice(index, 1);
    }
    return copy;
}
exports.remove = remove;
function removeWhere(arr, predicate) {
    var result = [];
    var removed = [];
    if (!(arr && arr.length)) return { result: result, removed: removed };
    var i = arr.length;
    while (--i > -1) {
        var o = Array.isArray(arr[i]) ? cloneArray(arr[i]) : objectUtils_1.clone(arr[i]);
        if (predicate(o)) {
            removed.push(o);
        } else {
            result.unshift(o);
        }
    }
    return { result: result, removed: removed };
}
exports.removeWhere = removeWhere;