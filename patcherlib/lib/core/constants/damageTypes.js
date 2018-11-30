"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var damageTypes;
(function (damageTypes) {
    damageTypes[damageTypes["NONE"] = 0] = "NONE";
    damageTypes[damageTypes["SLASHING"] = 1] = "SLASHING";
    damageTypes[damageTypes["PIERCING"] = 2] = "PIERCING";
    damageTypes[damageTypes["CRUSHING"] = 4] = "CRUSHING";
    damageTypes[damageTypes["ACID"] = 8] = "ACID";
    damageTypes[damageTypes["POISON"] = 16] = "POISON";
    damageTypes[damageTypes["DISEASE"] = 32] = "DISEASE";
    damageTypes[damageTypes["EARTH"] = 64] = "EARTH";
    damageTypes[damageTypes["WATER"] = 128] = "WATER";
    damageTypes[damageTypes["FIRE"] = 256] = "FIRE";
    damageTypes[damageTypes["AIR"] = 512] = "AIR";
    damageTypes[damageTypes["LIGHTNING"] = 1024] = "LIGHTNING";
    damageTypes[damageTypes["FROST"] = 2048] = "FROST";
    damageTypes[damageTypes["PHYSICSIMPACT"] = 4096] = "PHYSICSIMPACT";
    damageTypes[damageTypes["WEAPON"] = 7] = "WEAPON";
    damageTypes[damageTypes["PHYSICALTYPES"] = 8191] = "PHYSICALTYPES";
    damageTypes[damageTypes["LIFE"] = 8192] = "LIFE";
    damageTypes[damageTypes["MIND"] = 16384] = "MIND";
    damageTypes[damageTypes["SPIRIT"] = 32768] = "SPIRIT";
    damageTypes[damageTypes["RADIANT"] = 65536] = "RADIANT";
    damageTypes[damageTypes["DEATH"] = 131072] = "DEATH";
    damageTypes[damageTypes["SHADOW"] = 262144] = "SHADOW";
    damageTypes[damageTypes["CHAOS"] = 524288] = "CHAOS";
    damageTypes[damageTypes["VOID"] = 1048576] = "VOID";
    damageTypes[damageTypes["ARCANE"] = 2097152] = "ARCANE";
    damageTypes[damageTypes["MAGICALTYPES"] = 4186112] = "MAGICALTYPES";
    damageTypes[damageTypes["ALL"] = -1] = "ALL";
    damageTypes[damageTypes["SYSTEM"] = -2147483648] = "SYSTEM";
})(damageTypes = exports.damageTypes || (exports.damageTypes = {}));