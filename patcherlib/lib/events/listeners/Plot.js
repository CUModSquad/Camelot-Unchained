"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var defaultTopics_1 = require("../defaultTopics");
function run(emitter, topic) {
    cuAPI.OnPlotStatus(function (plotOwned, permissions, charID, entityID) {
        emitter.emit(topic, {
            plotOwned: plotOwned,
            permissions: permissions,
            charID: charID,
            entityID: entityID
        });
    });
}
var PlotListener = /** @class */function () {
    function PlotListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesPlot;
    }
    PlotListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return PlotListener;
}();
exports.default = PlotListener;