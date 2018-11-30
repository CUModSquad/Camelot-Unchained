"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RestAPI_1 = require("../../restapi/RestAPI");
var defaultTopics_1 = require("../defaultTopics");
var ControlGame_1 = require("../../core/classes/ControlGame");
var POLL_INTERVAL = 5000;
var timer;
function run(emitter, topic) {
    function tick() {
        // TODO: switch to using cu-restapi
        RestAPI_1.getControlGame(true).then(function (data) {
            var instance = new ControlGame_1.default(data);
            emitter.emit(topic, instance);
        }).catch(function (error) {
            emitter.emit(topic, { error: { status: error.response.status, reason: error.message } });
        });
    }
    if (!timer) {
        setInterval(tick, POLL_INTERVAL);
    }
}
var ControlGameListener = /** @class */function () {
    function ControlGameListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesControlGame;
    }
    ControlGameListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    ControlGameListener.prototype.stop = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            this.listening = false;
        }
    };
    return ControlGameListener;
}();
exports.default = ControlGameListener;