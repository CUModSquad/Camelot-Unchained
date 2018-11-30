/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import BuildingMaterial from './classes/BuildingMaterial';
import BuildingBlock from './classes/BuildingBlock';
declare function getBlockForBlockId(blockid: number): BuildingBlock;
declare function getMaterialForBlockId(blockid: number): BuildingMaterial;
declare function requestBlockSelect(block: BuildingBlock): void;
declare function getMissingMaterial(blockid: number): {
    material: BuildingMaterial;
    block: BuildingBlock;
};
declare function requestMaterials(): void;
export * from './blueprints';
export * from './building-actions';
export { requestMaterials, getMissingMaterial, requestBlockSelect, getBlockForBlockId, getMaterialForBlockId };
