"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var events = require("../events");
function eventToEvent(receive, send) {
    events.on(receive, function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return events.fire.apply(events, [send].concat(params));
    });
}
exports.eventToEvent = eventToEvent;
function eventMapper(evtMap, fn) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    evtMap.map(function (evt) {
        return fn.apply(void 0, [evt.receive, evt.send].concat(params));
    });
}
exports.eventMapper = eventMapper;