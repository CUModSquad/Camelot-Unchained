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
        client_1.default.OnCopyBlueprint(function () {
            emitter.emit(BuildingEventTopics_1.default.handlesBlueprintCopy, {});
        });
    }
}
var BlueprintCopyListener = /** @class */function () {
    function BlueprintCopyListener() {
        this.listening = false;
        this.topic = BuildingEventTopics_1.default.handlesBlueprintCopy;
    }
    BlueprintCopyListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return BlueprintCopyListener;
}();
exports.default = BlueprintCopyListener;