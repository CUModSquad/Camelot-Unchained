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
Object.defineProperty(exports, "__esModule", { value: true });
var SignalRHub_1 = require("../SignalRHub");
var __1 = require("../..");
exports.PATCHER_EVENTS_SERVERUPDATED = 'patcher/serverUpdated';
exports.PATCHER_EVENTS_SERVERUNAVAILABLE = 'patcher/serverUnavailable';
exports.PATCHER_EVENTS_ALERT = 'patcher/alert';
exports.PATCHER_EVENTS_CHARACTERREMOVED = 'patcher/characterRemoved';
exports.PATCHER_EVENTS_CHARACTERUPDATED = 'patcher/characterUpdated';
exports.PATCHER_LIFETIME_EVENT_STARTING = 'patcher/starting';
exports.PATCHER_LIFETIME_EVENT_CONNECTIONSLOW = 'patcher/connectionslow';
exports.PATCHER_LIFETIME_EVENT_RECONNECTING = 'patcher/reconnecting';
exports.PATCHER_LIFETIME_EVENT_RECONNECTED = 'patcher/reconnected';
exports.PATCHER_LIFETIME_EVENT_CONNECTING = 'patcher/connecting';
exports.PATCHER_LIFETIME_EVENT_CONNECTED = 'patcher/connected';
exports.PATCHER_LIFETIME_EVENT_DISCONNECTED = 'patcher/disconnected';
exports.PATCHER_LIFETIME_EVENT_IDENTIFIED = 'patcher/identified';
exports.PATCHER_LIFETIME_EVENT_STATECHANGED = 'patcher/statechanged';
exports.genericPatcherEventsMap = [{
    receive: 'characterUpdated',
    send: exports.PATCHER_EVENTS_CHARACTERUPDATED
}, {
    receive: 'characterRemoved',
    send: exports.PATCHER_EVENTS_CHARACTERREMOVED
}];
exports.patcherEventsMap = exports.genericPatcherEventsMap.concat([{
    receive: 'serverUpdate',
    send: exports.PATCHER_EVENTS_SERVERUPDATED
}, {
    receive: 'serverUnavailable',
    send: exports.PATCHER_EVENTS_SERVERUNAVAILABLE
}, {
    receive: 'patcherAlert',
    send: exports.PATCHER_EVENTS_ALERT
}]);
function getPatcherEventName(apiHostName, eventName) {
    if (apiHostName === __1.client.signalRHost) {
        return eventName;
    }
    return apiHostName + "-" + eventName;
}
exports.getPatcherEventName = getPatcherEventName;
function createPatcherHub(opts) {
    var hostName = opts.hostName || __1.client.signalRHost;
    var eventsMap = (opts.isMainPatcherHub ? exports.patcherEventsMap : exports.genericPatcherEventsMap).map(function (evtMap) {
        return __assign({}, evtMap, { send: getPatcherEventName(hostName, evtMap.send) });
    });
    var newPatcherHub = new SignalRHub_1.SignalRHub('patcherHub', eventsMap, { debug: __1.client.debug }, hostName);
    var reconnectTries = 0;
    function invokeIdentify(hub) {
        hub.invoke('identify', __1.client.accessToken).done(function (success) {
            if (!success) {
                if (__1.client.debug) console.log('PatcherHub identify failed.');
                // Try again!
                setTimeout(function () {
                    return invokeIdentify(hub);
                }, 5000);
                return;
            }
            // invalidate to force a resend of all data to this client
            if (__1.client.debug) console.log('PatcherHub identify success!');
            hub.invoke('invalidate');
            __1.events.fire(exports.PATCHER_LIFETIME_EVENT_IDENTIFIED, hub);
        }).fail(function () {
            setTimeout(function () {
                if (reconnectTries === 5) {
                    reconnectTries = 0;
                    hub.onStarting(hub);
                }
                reconnectTries++;
                hub.onConnected(hub);
            }, 5000);
        });
    }
    ////////////////////////////////////
    // lifetime events
    ////////////////////////////////////
    newPatcherHub.onStarting = function (hub) {
        var evtName = getPatcherEventName(hostName, exports.PATCHER_LIFETIME_EVENT_STARTING);
        __1.events.fire(evtName, hub);
    };
    newPatcherHub.onConnectionSlow = function (hub) {
        var evtName = getPatcherEventName(hostName, exports.PATCHER_LIFETIME_EVENT_CONNECTIONSLOW);
        __1.events.fire(evtName);
    };
    newPatcherHub.onConnected = function (hub) {
        var evtName = getPatcherEventName(hostName, exports.PATCHER_LIFETIME_EVENT_CONNECTED);
        __1.events.fire(evtName, hub);
        invokeIdentify(hub);
    };
    newPatcherHub.onReconnecting = function (hub) {
        var evtName = getPatcherEventName(hostName, exports.PATCHER_LIFETIME_EVENT_RECONNECTING);
        __1.events.fire(evtName, hub);
    };
    newPatcherHub.onReconnected = function (hub) {
        var evtName = getPatcherEventName(hostName, exports.PATCHER_LIFETIME_EVENT_RECONNECTED);
        __1.events.fire(evtName, hub);
    };
    newPatcherHub.onStateChanged = function (hub, state) {
        var evtName = getPatcherEventName(hostName, exports.PATCHER_LIFETIME_EVENT_STATECHANGED);
        __1.events.fire(evtName, hub, state);
        switch (state.newState) {
            case SignalRHub_1.ConnectionState.Connecting:
                __1.events.fire(getPatcherEventName(hostName, exports.PATCHER_LIFETIME_EVENT_CONNECTING), hub);
                break;
        }
    };
    newPatcherHub.onDisconnected = function (hub) {
        var evtName = getPatcherEventName(hostName, exports.PATCHER_LIFETIME_EVENT_DISCONNECTED);
        __1.events.fire(evtName, hub);
    };
    return newPatcherHub;
}
exports.createPatcherHub = createPatcherHub;
exports.patcherHub = createPatcherHub({ isMainPatcherHub: true });
exports.default = exports.patcherHub;