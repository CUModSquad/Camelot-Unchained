/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var BuildingEventTopics_1 = require("./BuildingEventTopics");
var client_1 = require("../../core/client");
function run(emitter, topic) {
    if (client_1.default.OnBlockSelected) {
        client_1.default.OnBuildingModeChanged(function (mode) {
            emitter.emit(topic, { mode: mode });
        });
    }
}
var BuildingModeListener = /** @class */function () {
    function BuildingModeListener() {
        this.listening = false;
        this.topic = BuildingEventTopics_1.default.handlesBuildingMode;
    }
    BuildingModeListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return BuildingModeListener;
}();
exports.default = BuildingModeListener;