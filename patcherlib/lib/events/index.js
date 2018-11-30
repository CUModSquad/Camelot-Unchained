"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var EventEmitter_1 = require("./EventEmitter");
var defaultTopics_1 = require("./defaultTopics");
var BuildingEventTopics_1 = require("../building/events/BuildingEventTopics");
var Init_1 = require("./listeners/Init");
var Announcements_1 = require("./listeners/Announcements");
var BeginChat_1 = require("./listeners/BeginChat");
var Chat_1 = require("./listeners/Chat");
var ControlGame_1 = require("./listeners/ControlGame");
var ControlGameScore_1 = require("./listeners/ControlGameScore");
var Inventory_1 = require("./listeners/Inventory");
var EquippedGear_1 = require("./listeners/EquippedGear");
var Console_1 = require("./listeners/Console");
var Logging_1 = require("./listeners/Logging");
var Plot_1 = require("./listeners/Plot");
var BlockSelect_1 = require("../building/events/BlockSelect");
var BuildingMode_1 = require("../building/events/BuildingMode");
var BlueprintSelect_1 = require("../building/events/BlueprintSelect");
var BlueprintCopy_1 = require("../building/events/BlueprintCopy");
exports.buildingEventTopics = BuildingEventTopics_1.default;
// Listeners
var listeners = (_a = {}, _a[defaultTopics_1.clientEventTopics.initialize] = new Init_1.default(), _a[defaultTopics_1.clientEventTopics.handlesAnnouncements] = new Announcements_1.default(), _a[defaultTopics_1.clientEventTopics.handlesBeginChat] = new BeginChat_1.default(), _a[defaultTopics_1.clientEventTopics.handlesChat] = new Chat_1.default(), _a[defaultTopics_1.clientEventTopics.handlesControlGame] = new ControlGame_1.default(), _a[defaultTopics_1.clientEventTopics.handlesControlGameScore] = new ControlGameScore_1.default(), _a[defaultTopics_1.clientEventTopics.handlesInventory] = new Inventory_1.default(), _a[defaultTopics_1.clientEventTopics.handlesEquippedGear] = new EquippedGear_1.default(), _a[defaultTopics_1.clientEventTopics.handlesConsole] = new Console_1.default(), _a[defaultTopics_1.clientEventTopics.handlesLogging] = new Logging_1.default(), _a[defaultTopics_1.clientEventTopics.handlesPlot] = new Plot_1.default(), _a[exports.buildingEventTopics.handlesBlockSelect] = new BlockSelect_1.default(), _a[exports.buildingEventTopics.handlesBuildingMode] = new BuildingMode_1.default(), _a[exports.buildingEventTopics.handlesBlueprintSelect] = new BlueprintSelect_1.default(), _a[exports.buildingEventTopics.handlesBlueprintCopy] = new BlueprintCopy_1.default(), _a);
/**
 * Register a callback for specified topic.
 * @method on
 * @param topic {string}      The topic name of the event
 * @param callback {function} The handler to be called when the event is triggered.
 *                            Passed the event data as the first argument
 * @return {number} an event handler id (used to stop listening for the event)
 */
function on(topic, callback) {
    var listener = listeners[topic];
    if (listener) {
        var handle = EventEmitter_1.emitter.addListener(topic, listener.once, callback);
        listener.start(EventEmitter_1.emitter);
        return handle;
    }
    return EventEmitter_1.emitter.addListener(topic, false, callback);
}
exports.on = on;
/**
 * Register a callback for specified topic, once only.  Automatically unregisters
 * from the event one triggered.
 * @method once
 * @param topic {string}      The topic name of the event
 * @param callback {function} The handler to be called when the event is triggered.
 *                            Passed the event data as the first argument
 * @return {number} an event handler id (used to stop listening for the event)
 */
function once(topic, callback) {
    var listener = listeners[topic];
    if (listener) {
        var handle = EventEmitter_1.emitter.addListener(topic, true, callback);
        listener.start(EventEmitter_1.emitter);
        return handle;
    }
    return EventEmitter_1.emitter.addListener(topic, true, callback);
}
exports.once = once;
// Unregister from events
/**
 * Register a callback for specified topic, once only.  Automatically unregisters
 * from the event one triggered.
 * @method off
 * @param listener {number} Handle returned from a call to on() once() or addEventListener()
 */
function off(handle) {
    EventEmitter_1.emitter.removeListener(handle);
}
exports.off = off;
// Fire events
/**
 * Trigger an event for a topic, passing the event data (by reference) to any registered
 * handlers.  If passing by reference is an issue, the caller is responsible for cloning.
 * @method fire
 * @param topic {string}  The topic name of the event
 * @param data {any}      Data to be passed to registered handlers
 */
function fire(topic) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    EventEmitter_1.emitter.emit.apply(EventEmitter_1.emitter, [topic].concat(params));
}
exports.fire = fire;
function diagnostics() {
    EventEmitter_1.emitter.diagnostics();
}
exports.diagnostics = diagnostics;
function addListener(topic, callback) {
    return on(topic, callback);
}
exports.addListener = addListener;
function removeListener(handle) {
    off(handle);
}
exports.removeListener = removeListener;