"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../core/client");
var arrayUtils_1 = require("../utils/arrayUtils");
__export(require("./SignalRHub"));
__export(require("./hubs/groupsHub"));
__export(require("./hubs/patcherHub"));
var hubsDef = {};
var initializedHubs = [];
var initialized = false;
exports.initializeSignalR = function (signalRHost) {
    if (signalRHost === void 0) {
        signalRHost = client_1.default.signalRHost;
    }
    if (initialized) return;
    initialized = true;
    if (client_1.default.debug) console.log('initializeSignalR called');
    $(function () {
        $.connection(signalRHost);
        $.connection.hub.url = signalRHost;
        $.connection.hub.start();
    });
};
exports.reinitializeSignalR = function (signalRHost) {
    if (signalRHost === void 0) {
        signalRHost = client_1.default.signalRHost;
    }
    initialized = false;
    exports.initializeSignalR(signalRHost);
};
exports.initializeSignalRHubs = function () {
    var hubs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hubs[_i] = arguments[_i];
    }
    if (client_1.default.debug) console.log("initializeSignalRHubs called on hubs " + hubs.map(function (h) {
        return h.name;
    }).join(','));
    var _loop_1 = function _loop_1(i) {
        if (arrayUtils_1.findIndexWhere(initializedHubs, function (h) {
            return h === hubs[i].name;
        }) === -1) {
            var hub = hubs[i];
            var def = hubsDef[hub.name];
            if (typeof def === 'undefined' || def == null || typeof def.init !== 'function') return "continue";
            def.init(hub.callback);
            initializedHubs.push(hub.name);
        }
    };
    for (var i = 0; i < hubs.length; ++i) {
        _loop_1(i);
    }
};
exports.unregisterSignalRHubs = function () {
    var hubNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hubNames[_i] = arguments[_i];
    }
    if (client_1.default.debug) console.log("unregisterSignalRHubs called on hubs " + hubNames.join(','));
    var _loop_2 = function _loop_2(i) {
        var index = arrayUtils_1.findIndexWhere(initializedHubs, function (name) {
            return name === hubNames[i];
        });
        if (index !== -1) {
            var def = hubsDef[hubNames[i]];
            if (typeof def === 'undefined' || def == null || typeof def.unregister !== 'function') return "continue";
            def.unregister();
            initializedHubs.splice(index, 1);
        }
    };
    for (var i = 0; i < hubNames.length; ++i) {
        _loop_2(i);
    }
};