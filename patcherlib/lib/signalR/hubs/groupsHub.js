"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../../core/client");
var SignalRHub_1 = require("../SignalRHub");
// UI EVENT NAMES
exports.hubEvents = {
    joined: 'warbands/joined',
    update: 'warbands/update',
    quit: 'warbands/quit',
    abandoned: 'warbands/abandoned',
    memberJoined: 'warbands/memberJoined',
    memberUpdate: 'warbands/memberUpdate',
    memberRemoved: 'warbands/memberRemoved',
    inviteReceived: 'warbands/inviteReceived'
};
var groupsHubEventsMap = [{
    receive: 'warbandJoined',
    send: exports.hubEvents.joined
}, {
    receive: 'warbandUpdate',
    send: exports.hubEvents.update
}, {
    receive: 'warbandQuit',
    send: exports.hubEvents.quit
}, {
    receive: 'warbandAbandoned',
    send: exports.hubEvents.abandoned
}, {
    receive: 'warbandMemberJoined',
    send: exports.hubEvents.memberJoined
}, {
    receive: 'warbandMemberUpdated',
    send: exports.hubEvents.memberUpdate
}, {
    receive: 'warbandMemberRemoved',
    send: exports.hubEvents.memberRemoved
}, {
    receive: 'warbandInviteReceived',
    send: exports.hubEvents.inviteReceived
}];
exports.groupsHub = new SignalRHub_1.SignalRHub('groupsHub', groupsHubEventsMap, { debug: client_1.default.debug });
function invokeIdentify(hub) {
    hub.invoke('identify', client_1.default.accessToken, client_1.default.shardID, client_1.default.characterID).done(function (success) {
        if (!success) {
            if (client_1.default.debug) console.log("groupsHub identify failed.");
            setTimeout(function () {
                return invokeIdentify(hub);
            }, 5000);
            return;
        }
        if (client_1.default.debug) console.log("groupsHub identify success!");
        hub.invoke('invalidate');
    });
}
function onConnected(hub) {
    if (client_1.default.debug) console.log('groupsHub onConnected');
    invokeIdentify(hub);
}
exports.groupsHub.addEventHandler('connected', onConnected);