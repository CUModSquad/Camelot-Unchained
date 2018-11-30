/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import BuildingBlueprint from './classes/BuildingBlueprint';
declare function requestBlueprintCopy(): void;
declare function requestBlueprintPaste(): void;
declare function requestBlueprintDelete(blueprint: BuildingBlueprint): void;
declare function requestBlueprintSave(name: string): void;
declare function requestBlueprintSelect(blueprint: BuildingBlueprint): void;
declare function requestBlueprintIcon(blueprint: BuildingBlueprint): void;
declare function requestBlueprints(): void;
export { requestBlueprints, requestBlueprintIcon, requestBlueprintSelect, requestBlueprintSave, requestBlueprintDelete, requestBlueprintCopy, requestBlueprintPaste, };
