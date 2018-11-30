"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var moment = require("moment");
function prettyPrintTimeSpan(fromDate, untilSecondsPass) {
    var from = moment(fromDate);
    var until = from.add(untilSecondsPass, 'seconds');
    if (_.includes(moment().to(until, true), 'seconds')) {
        // If there are seconds, then just show seconds. ex.) 30s -> 29s -> 28s
        var now_1 = Date.parse(new Date().toISOString());
        var elapsedTime = Number(Math.floor((now_1 - Date.parse(fromDate)) / 1000).toFixed(0));
        if (Number(untilSecondsPass) - elapsedTime > 0) {
            return (Number(untilSecondsPass) - elapsedTime).toString() + "s";
        }
        return '';
    }
    // If there are more than seconds, ex.) in an hour, in 2 hours
    var now = moment();
    if (now.isAfter(until)) {
        return '';
    }
    return now.to(until, true);
}
exports.prettyPrintTimeSpan = prettyPrintTimeSpan;