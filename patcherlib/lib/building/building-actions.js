"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../core/client");
function changeMode(mode) {
    client_1.default.SetBuildingMode(mode);
}
exports.changeMode = changeMode;
function commit() {
    client_1.default.CommitBlock();
}
exports.commit = commit;
function undo() {
    client_1.default.UndoCube();
}
exports.undo = undo;
function redo() {
    client_1.default.RedoCube();
}
exports.redo = redo;
function rotateX() {
    client_1.default.BlockRotateX();
}
exports.rotateX = rotateX;
function rotateY() {
    client_1.default.BlockRotateY();
}
exports.rotateY = rotateY;
function rotateZ() {
    client_1.default.BlockRotateZ();
}
exports.rotateZ = rotateZ;
function flipX() {
    client_1.default.BlockFlipX();
}
exports.flipX = flipX;
function flipY() {
    client_1.default.BlockFlipY();
}
exports.flipY = flipY;
function flipZ() {
    client_1.default.BlockFlipZ();
}
exports.flipZ = flipZ;