"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var def = require("./definitions");
function parseResponseData(res) {
    if (!res.data) {
        return res;
    }
    if (typeof res.data === 'string') {
        var newRes = __assign({}, res, { data: JSON.parse(res.data) });
        return newRes;
    }
    return res;
}
exports.parseResponseData = parseResponseData;
function accessLevelToPatchPermission(access) {
    switch (access) {
        case def.AccessType.Public:
            return def.PatchPermissions.Public;
        case def.AccessType.Beta3:
            return def.PatchPermissions.Beta3;
        case def.AccessType.Beta2:
            return def.PatchPermissions.Beta2;
        case def.AccessType.Beta1:
            return def.PatchPermissions.Beta1;
        case def.AccessType.Alpha:
            return def.PatchPermissions.Alpha;
        case def.AccessType.InternalTest:
            return def.PatchPermissions.InternalTest;
        case def.AccessType.Employees:
            return def.PatchPermissions.Development;
    }
}
exports.accessLevelToPatchPermission = accessLevelToPatchPermission;
function accessLevelString(access) {
    switch (access) {
        case def.AccessType.Public:
            return 'Everyone';
        case def.AccessType.Beta3:
            return 'All Backers';
        case def.AccessType.Beta2:
            return 'Beta 1-2, Alpha, IT';
        case def.AccessType.Beta1:
            return 'Beta 1, Alpha, IT';
        case def.AccessType.Alpha:
            return 'Alpha, IT';
        case def.AccessType.InternalTest:
            return 'IT';
        case def.AccessType.Employees:
            return 'CSE';
    }
}
exports.accessLevelString = accessLevelString;
function raceString(race) {
    switch (race) {
        case def.Race.Luchorpan:
            return 'Luchorpán';
        case def.Race.Valkyrie:
            return 'Valkyrie';
        case def.Race.HumanMaleV:
            return 'Human';
        case def.Race.HumanMaleA:
            return 'Human';
        case def.Race.HumanMaleT:
            return 'Human';
        case def.Race.Pict:
            return 'Pict';
    }
}
exports.raceString = raceString;
function archetypeString(archetype) {
    switch (archetype) {
        case def.Archetype.BlackKnight:
            return 'Black Knight';
        case def.Archetype.Fianna:
            return 'Fianna';
        case def.Archetype.Mjolnir:
            return 'Mjölnir';
        case def.Archetype.Physician:
            return 'Physician';
        case def.Archetype.Empath:
            return 'Empath';
        case def.Archetype.Stonehealer:
            return 'Stonehealer';
        case def.Archetype.Blackguard:
            return 'Black Guard';
        case def.Archetype.ForestStalker:
            return 'Forest Stalker';
        case def.Archetype.WintersShadow:
            return 'Winter\'s Shadow';
    }
}
exports.archetypeString = archetypeString;