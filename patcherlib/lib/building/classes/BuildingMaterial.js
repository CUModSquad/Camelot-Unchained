'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
var BuildingMaterial = /** @class */function () {
    function BuildingMaterial(substance) {
        if (substance === void 0) {
            substance = {};
        }
        this.id = substance.id;
        this.icon = substance.icon;
        this.tags = substance.tags || [];
        this.blocks = substance.blocks || [];
    }
    BuildingMaterial.prototype.getBlockForShape = function (shapeId) {
        for (var i in this.blocks) {
            var block = this.blocks[i];
            if (block.shapeId === shapeId) {
                return block;
            }
        }
    };
    BuildingMaterial.create = function () {
        var a = new BuildingMaterial();
        return a;
    };
    return BuildingMaterial;
}();
exports.default = BuildingMaterial;