"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http//mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var componentType;
(function (componentType) {
    componentType[componentType["Primary"] = 0] = "Primary";
    componentType[componentType["Secondary"] = 1] = "Secondary";
    componentType[componentType["OptionalModifier"] = 2] = "OptionalModifier";
    componentType[componentType["SpecialModal"] = 3] = "SpecialModal";
    componentType[componentType["IndependantModal"] = 4] = "IndependantModal";
})(componentType = exports.componentType || (exports.componentType = {}));
exports.default = componentType;