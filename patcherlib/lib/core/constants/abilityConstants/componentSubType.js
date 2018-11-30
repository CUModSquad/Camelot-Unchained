"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http//mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var componentSubType;
(function (componentSubType) {
    componentSubType[componentSubType["None"] = 0] = "None";
    // Magic
    componentSubType[componentSubType["Rune"] = 1] = "Rune";
    componentSubType[componentSubType["Shape"] = 2] = "Shape";
    componentSubType[componentSubType["Range"] = 4] = "Range";
    componentSubType[componentSubType["Size"] = 8] = "Size";
    componentSubType[componentSubType["Infusion"] = 16] = "Infusion";
    componentSubType[componentSubType["Focus"] = 32] = "Focus";
    componentSubType[componentSubType["Transposition"] = 64] = "Transposition";
    // Physical
    componentSubType[componentSubType["Weapon"] = 128] = "Weapon";
    componentSubType[componentSubType["Style"] = 256] = "Style";
    componentSubType[componentSubType["Speed"] = 512] = "Speed";
    componentSubType[componentSubType["Potential"] = 1024] = "Potential";
    componentSubType[componentSubType["Target"] = 2048] = "Target";
    componentSubType[componentSubType["Stance"] = 4096] = "Stance";
    // Ranged
    componentSubType[componentSubType["RangedWeapon"] = 8192] = "RangedWeapon";
    componentSubType[componentSubType["Load"] = 16384] = "Load";
    componentSubType[componentSubType["Prepare"] = 32768] = "Prepare";
    componentSubType[componentSubType["Draw"] = 65536] = "Draw";
    componentSubType[componentSubType["Aim"] = 131072] = "Aim";
    // Sound
    componentSubType[componentSubType["Voice"] = 262144] = "Voice";
    componentSubType[componentSubType["Instrument"] = 524288] = "Instrument";
    componentSubType[componentSubType["Shout"] = 1048576] = "Shout";
    componentSubType[componentSubType["Song"] = 2097152] = "Song";
    componentSubType[componentSubType["Inflection"] = 4194304] = "Inflection";
    componentSubType[componentSubType["Technique"] = 8388608] = "Technique";
    // TODO : remove these when abilities get updated, these are to cull components from showing in the UI
    componentSubType[componentSubType["DeadPrimary"] = 16777216] = "DeadPrimary";
    componentSubType[componentSubType["DeadSecondary"] = 33554432] = "DeadSecondary";
})(componentSubType = exports.componentSubType || (exports.componentSubType = {}));
exports.default = componentSubType;