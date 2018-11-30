"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http//mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var abilityTags;
(function (abilityTags) {
    abilityTags[abilityTags["SYSTEM"] = 0] = "SYSTEM";
    abilityTags[abilityTags["NONAGGRESSIVE"] = 1] = "NONAGGRESSIVE";
    abilityTags[abilityTags["NONINTERACTABLE"] = 2] = "NONINTERACTABLE";
    // Non-elemental
    abilityTags[abilityTags["NOMAGIC"] = 3] = "NOMAGIC";
    // Physical types
    abilityTags[abilityTags["WEAPON"] = 4] = "WEAPON";
    abilityTags[abilityTags["STYLE"] = 5] = "STYLE";
    abilityTags[abilityTags["SPEED"] = 6] = "SPEED";
    abilityTags[abilityTags["POTENTIAL"] = 7] = "POTENTIAL";
    abilityTags[abilityTags["TARGETING"] = 8] = "TARGETING";
    // Vocal
    abilityTags[abilityTags["VOICE"] = 9] = "VOICE";
    abilityTags[abilityTags["SHOUT"] = 10] = "SHOUT";
    abilityTags[abilityTags["INFLECTION"] = 11] = "INFLECTION";
    // Primary elemental magics
    abilityTags[abilityTags["AIR"] = 12] = "AIR";
    abilityTags[abilityTags["EARTH"] = 13] = "EARTH";
    abilityTags[abilityTags["FIRE"] = 14] = "FIRE";
    abilityTags[abilityTags["WATER"] = 15] = "WATER";
    // Secondary elemental magics
    abilityTags[abilityTags["BLAST"] = 16] = "BLAST";
    abilityTags[abilityTags["LAVA"] = 17] = "LAVA";
    abilityTags[abilityTags["MUD"] = 18] = "MUD";
    abilityTags[abilityTags["SAND"] = 19] = "SAND";
    abilityTags[abilityTags["STEAM"] = 20] = "STEAM";
    abilityTags[abilityTags["SPRAY"] = 21] = "SPRAY";
    // Non-elemental magics
    abilityTags[abilityTags["HEALING"] = 22] = "HEALING";
    abilityTags[abilityTags["RESTORATION"] = 23] = "RESTORATION";
    abilityTags[abilityTags["LIFEDRAIN"] = 24] = "LIFEDRAIN";
    abilityTags[abilityTags["SWIFTNESS"] = 25] = "SWIFTNESS";
    abilityTags[abilityTags["DISPLACEMENT"] = 26] = "DISPLACEMENT";
    // Shape
    abilityTags[abilityTags["SELF"] = 27] = "SELF";
    abilityTags[abilityTags["DIRECT"] = 28] = "DIRECT";
    abilityTags[abilityTags["TOUCH"] = 29] = "TOUCH";
    abilityTags[abilityTags["DART"] = 30] = "DART";
    abilityTags[abilityTags["BALL"] = 31] = "BALL";
    abilityTags[abilityTags["CLOUD"] = 32] = "CLOUD";
    abilityTags[abilityTags["FOUNTAIN"] = 33] = "FOUNTAIN";
    abilityTags[abilityTags["WALL"] = 34] = "WALL";
    abilityTags[abilityTags["FIELD"] = 35] = "FIELD";
    abilityTags[abilityTags["WAVE"] = 36] = "WAVE";
    abilityTags[abilityTags["POOL"] = 37] = "POOL";
    abilityTags[abilityTags["CONE"] = 38] = "CONE";
    // Meta types
    abilityTags[abilityTags["RUNE"] = 39] = "RUNE";
    abilityTags[abilityTags["SHAPE"] = 40] = "SHAPE";
    abilityTags[abilityTags["RANGE"] = 41] = "RANGE";
    abilityTags[abilityTags["SIZE"] = 42] = "SIZE";
    abilityTags[abilityTags["INFUSION"] = 43] = "INFUSION";
    abilityTags[abilityTags["FOCUS"] = 44] = "FOCUS";
    // Combat tags
    abilityTags[abilityTags["BLOCKING"] = 45] = "BLOCKING";
    abilityTags[abilityTags["COUNTERATTACK"] = 46] = "COUNTERATTACK";
    abilityTags[abilityTags["UNBLOCKABLE"] = 47] = "UNBLOCKABLE";
    // Bens test tags
    abilityTags[abilityTags["TESTTAGA"] = 48] = "TESTTAGA";
    abilityTags[abilityTags["TESTTAGB"] = 49] = "TESTTAGB";
    abilityTags[abilityTags["TESTTAGC"] = 50] = "TESTTAGC";
    abilityTags[abilityTags["TESTTAGD"] = 51] = "TESTTAGD";
    abilityTags[abilityTags["TESTTAGE"] = 52] = "TESTTAGE";
    // Total number of tags.  Do not use as a tag.
    abilityTags[abilityTags["COUNT"] = 53] = "COUNT";
})(abilityTags || (abilityTags = {}));
exports.default = abilityTags;