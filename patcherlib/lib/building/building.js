"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var BuildingMaterial_1 = require("./classes/BuildingMaterial");
var BuildingBlock_1 = require("./classes/BuildingBlock");
var client_1 = require("../core/client");
var events = require("../events");
var materialsLoaded = false;
var materialsRequested = false;
var numBlocksToLoad = 0;
var loadCallbacks = [];
var materialsMap = {};
var materialsList = [];
var blocks = {};
// tslint:disable-next-line
var BLANK_IMAGE = 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAALxSURBVHhe5dlLiI1xGMfx30pCRFkJCyXFYiRSsmBByWIipMiOWYiNjZSirCxcsrUZuUzKZSGxULNT5JJsKaXspJlcVsd7zDn1zPN+z5n38v/bPIvP5nee37//M73TnN5Rp9MJDcNIMIwEw0gwjATDSDCMBMNIMIwEw0gwjATDSDCMBMNIMIwEw8akHYXNhU1gBXaqkrYWuufvLKH5ijBsTDr470j2BjtVSNfdWdYe7FSEYSvShLmcdx47w0ij7gzrKnZqwLA1adpc0tuIHSItLnwzXesjdmrCsDVpxFzUm8QOke65rrUQOzVhmIR00VzWO4MdSxpzHWsXdhrAMBnptbm0tx47XdLawh8za13GTkMYJiMtMBf3nmKnS3rmZvve4XwLGCYlHTELeKdg/qybsZaX5lvCMDnpllnC+llYbea2mc+80VlnJoJhFtIXs4x118x8dp/1Jf29tzDMQtpiFvJOF+64rO8VnpcIhtlI58xiVa3CsxLBMCvpuVluLofxjIQwzEpaUvjdW3CYG9hPDMPspP1mUfIWexlg+F9I18zC3hh2MsAwu5lviN97y5IfhfnYTQzD7KT7vUWHeYjdxDDMSjphlpxL+atyYhhmI60xy1W1Ds9KBMNspJdmMWuy8Mhlfe/xrEQwzEK6YJbyFvVmvrq870rpvEQwTE7abpbxjpm5ve4za/esMxPBMDlpyixiPYHZQa/Ap0qzCWCYlDRulvBmHn1Lmlf4ZGasx6X5ljBMZvg/Sg5hp0va52at49hpCMMkpGXm0t4EdizpputYS7HTAIZJDH8jXH70vZkf4KCvyx+w0wCGrQ1/8TH40feko65rXcJOTRi2Im0wl/TGsTOM9MCdYY1gpwYMW5F+mQta3T+Fcz/6nrTSnOFNY6cGDBsb/GKzq/qj70kn3VnWbexUhGEj0gFzKa/+o+9JL9yZVuP/GWAYCYaRYBgJhpFgGAmGkWAYCYaRYBgJhpFgGAmGkWAYCYaRYBhHR38Boj2hpYws8QsAAAAASUVORK5CYII=';
function getBlockForShapeId(shapeId, blocks) {
    for (var i in blocks) {
        var block = blocks[i];
        if (block.shapeId === shapeId) {
            return block;
        }
    }
    return blocks[0];
}
function getShapeIdFromBlockId(id) {
    return id >> 21 & 31;
}
function getMaterialIdFromBlockId(id) {
    return id >> 2 & 4095;
}
function recieveMaterials(subsRecieved) {
    for (var i in subsRecieved) {
        var id = parseInt(i, 10);
        var material = new BuildingMaterial_1.default({
            id: id,
            icon: subsRecieved[i],
            tags: [],
            blocks: []
        });
        materialsMap[id] = material;
        materialsList.push(material);
    }
    client_1.default.RequestBlocks();
}
function recieveBlocks(blocksRecieved) {
    for (var i in blocksRecieved) {
        numBlocksToLoad++;
        var id = parseInt(i, 10);
        blocks[id] = {
            id: id,
            icon: blocksRecieved[i],
            materialTags: [],
            shapeTags: []
        };
    }
    for (var i in blocksRecieved) {
        var id = parseInt(i, 10);
        client_1.default.RequestBlockTags(id);
    }
}
function recieveBlockTags(id, tags) {
    var block = blocks[id];
    block.shapeId = getShapeIdFromBlockId(id);
    block.shapeTags = tags.Shapes;
    block.materialId = getMaterialIdFromBlockId(id);
    block.materialTags = tags.Types;
    var material = materialsMap[block.materialId];
    if (material == null) {
        console.log('unknown material ' + block.materialId + ' for block ' + id + '-' + tags.Types.join(','));
    } else {
        material.tags = tags.Types;
        material.blocks.push(block);
    }
    if (--numBlocksToLoad === 0) {
        // finished loading shapes and types
        events.fire(events.buildingEventTopics.handlesBlocks, { materials: materialsList });
    }
}
function getBlockForBlockId(blockid) {
    var matId = getMaterialIdFromBlockId(blockid);
    var shapeId = getShapeIdFromBlockId(blockid);
    var sub = materialsMap[matId];
    if (sub == null) {
        return null;
    }
    // select by shape instead of by block id, it is more reliable, the block id sent back
    // can have extra information stored in it
    return getBlockForShapeId(shapeId, sub.blocks);
}
exports.getBlockForBlockId = getBlockForBlockId;
function getMaterialForBlockId(blockid) {
    var matId = getMaterialIdFromBlockId(blockid);
    return materialsMap[matId];
}
exports.getMaterialForBlockId = getMaterialForBlockId;
function requestBlockSelect(block) {
    client_1.default.ChangeBlockType(block.id);
}
exports.requestBlockSelect = requestBlockSelect;
// some blocks don't show up in the list retrieved by Request Substances or RequestBlocks
// make up the information based on the block id, so we can at least display the shape and material type to the user
// returning this information as a promise in case it is possible to request meta data on the material
function getMissingMaterial(blockid) {
    var block = new BuildingBlock_1.default({
        id: blockid,
        shapeId: getShapeIdFromBlockId(blockid),
        materialId: getMaterialIdFromBlockId(blockid),
        icon: BLANK_IMAGE
    });
    blocks[block.id] = block;
    var material = new BuildingMaterial_1.default({ id: block.materialId, blocks: [block], icon: BLANK_IMAGE });
    materialsMap[material.id] = material;
    materialsList.push(material);
    events.fire(events.buildingEventTopics.handlesBlocks, { materials: materialsList });
    return { material: material, block: block };
}
exports.getMissingMaterial = getMissingMaterial;
function requestMaterials() {
    if (!materialsRequested) {
        materialsRequested = false;
        client_1.default.OnReceiveSubstances(recieveMaterials);
        client_1.default.OnReceiveBlocks(recieveBlocks);
        client_1.default.OnReceiveBlockTags(recieveBlockTags);
        client_1.default.RequestSubstances();
    }
}
exports.requestMaterials = requestMaterials;
__export(require("./blueprints"));
__export(require("./building-actions"));