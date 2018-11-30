"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var emotes;
(function (emotes) {
    emotes[emotes["DANCE1"] = 0] = "DANCE1";
    emotes[emotes["DANCE2"] = 1] = "DANCE2";
    emotes[emotes["WAVE1"] = 2] = "WAVE1";
    emotes[emotes["WAVE2"] = 3] = "WAVE2";
    // STOP is penultimate
    emotes[emotes["STOP"] = 4] = "STOP";
    // None is last
    emotes[emotes["NONE"] = 5] = "NONE";
})(emotes || (emotes = {}));
exports.default = emotes;