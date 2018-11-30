/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as def from './definitions';
export declare function parseResponseData(res: any): any;
export declare function accessLevelToPatchPermission(access: def.AccessType): def.PatchPermissions.Public | def.PatchPermissions.InternalTest | def.PatchPermissions.Development | def.PatchPermissions.Alpha | def.PatchPermissions.Beta1 | def.PatchPermissions.Beta2 | def.PatchPermissions.Beta3;
export declare function accessLevelString(access: def.AccessType): "Everyone" | "All Backers" | "Beta 1-2, Alpha, IT" | "Beta 1, Alpha, IT" | "Alpha, IT" | "IT" | "CSE";
export declare function raceString(race: def.Race): "Luchorpán" | "Valkyrie" | "Human" | "Pict";
export declare function archetypeString(archetype: def.Archetype): "Black Knight" | "Fianna" | "Mjölnir" | "Physician" | "Empath" | "Stonehealer" | "Black Guard" | "Forest Stalker" | "Winter's Shadow";
