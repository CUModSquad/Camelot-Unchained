"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var defaultTopics_1 = require("../defaultTopics");
var client_1 = require("../../core/client");
function run(emitter, topic) {
    client_1.default.OnAnnouncement(function (message, type) {
        emitter.emit(topic, {
            message: message,
            type: type
        });
    });
}
var AnnouncementsListener = /** @class */function () {
    function AnnouncementsListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesAnnouncements;
    }
    AnnouncementsListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    return AnnouncementsListener;
}();
exports.default = AnnouncementsListener;