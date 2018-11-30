"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RestAPI_1 = require("../../restapi/RestAPI");
var defaultTopics_1 = require("../defaultTopics");
var ControlGame_1 = require("../../core/classes/ControlGame");
var Population_1 = require("../../core/classes/Population");
var POLL_INTERVAL = 5000;
var timer;
function run(emitter, topic) {
    var info = {};
    // Handle tick
    function tick() {
        var count = 2;
        // wait for both requests to finish before triggering
        // the event
        function done() {
            count--;
            if (count === 0) {
                emitter.emit(topic, info);
                info = {};
            }
        }
        // Get control game (score only)
        RestAPI_1.getControlGame(false).then(function (data) {
            info.score = new ControlGame_1.default(data);
            done();
        }).catch(function (error) {
            info.error = { status: error.response.status, reason: error.message };
            done();
        });
        // and player counts
        RestAPI_1.getAllPlayers().then(function (data) {
            info.players = new Population_1.default(data);
            done();
        }).catch(function (error) {
            info.error = { status: error.response.status, reason: error.message };
            done();
        });
    }
    // if timer not running, start it
    if (!timer) {
        timer = setInterval(tick, POLL_INTERVAL);
    }
}
var ControlGameScoreListener = /** @class */function () {
    function ControlGameScoreListener() {
        this.listening = false;
        this.topic = defaultTopics_1.clientEventTopics.handlesControlGameScore;
    }
    ControlGameScoreListener.prototype.start = function (emitter) {
        if (!this.listening) {
            this.listening = true;
            run(emitter, this.topic);
        }
    };
    ControlGameScoreListener.prototype.stop = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            this.listening = false;
        }
    };
    return ControlGameScoreListener;
}();
exports.default = ControlGameScoreListener;