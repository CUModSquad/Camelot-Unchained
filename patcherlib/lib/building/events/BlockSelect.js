/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var BuildingEventTopics_1 = require("./BuildingEventTopics");
var client_1 = require("../../core/client");
var building = require("../../building/building");
function run(emitter, topic) {
    if (client_1.default.OnBlockSelected) {
        client_1.default.OnBlockSelected(function (blockid) {
            var material = building.getMaterialForBlockId(blockid);
            var block = building.getBlockForBlockId(blockid);
            if (material) {
                emitter.emit(topic, { material: material, block: block });
            } else {
                emitter.emit(topic, building.getMissingMaterial(blockid));
            }
        });
    }
}
var BlockSelectListener = /** @class */function () {
    function BlockSelectListener() {
        this.listening = false;
        this.topic = BuildingEventTopics_1.default.handlesBlockSelect;
    }
    BlockSelectListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return BlockSelectListener;
}();
exports.default = BlockSelectListener;