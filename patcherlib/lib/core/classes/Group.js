"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("./Character");
var Group = /** @class */function () {
    function Group(group) {
        if (group === void 0) {
            group = {};
        }
        group.self = group.self || new Character_1.default();
        group.members = group.members || [];
    }
    Group.create = function () {
        var a = new Group();
        return a;
    };
    return Group;
}();
exports.default = Group;