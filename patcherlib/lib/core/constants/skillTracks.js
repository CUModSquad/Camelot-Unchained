"use strict";
/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var skillTracks;
(function (skillTracks) {
    skillTracks[skillTracks["NONE"] = 0] = "NONE";
    skillTracks[skillTracks["PRIMARYWEAPON"] = 1] = "PRIMARYWEAPON";
    skillTracks[skillTracks["SECONDARYWEAPON"] = 2] = "SECONDARYWEAPON";
    skillTracks[skillTracks["BOTHWEAPONS"] = 3] = "BOTHWEAPONS";
    skillTracks[skillTracks["VOICE"] = 4] = "VOICE";
    skillTracks[skillTracks["MIND"] = 8] = "MIND";
    // ANY SKILL TRACK WITH THIS FLAG HAS SOME SORT OF ERROR OR CONFLICT.
    skillTracks[skillTracks["ERRORFLAG"] = 268435456] = "ERRORFLAG";
    // SPECIAL FLAGS THAT ARE NOT A FIXED SLOT. SKILLS USING ONE OF THESE
    // WILL END UP USING ONE OF THE SLOTS, WITH THE CHOICE DEPENDING ON WHAT'S CURRENTLY
    // IN USE BY OTHER SKILLS. USE SKILL.RESOLVETRACKCHOICES TO COMPUTE THAT.
    skillTracks[skillTracks["EITHERWEAPONPREFERPRIMARY"] = 536870912] = "EITHERWEAPONPREFERPRIMARY";
    skillTracks[skillTracks["EITHERWEAPONPREFERSECONDARY"] = 1073741824] = "EITHERWEAPONPREFERSECONDARY";
    skillTracks[skillTracks["CHOICEFLAGS"] = 1610612736] = "CHOICEFLAGS";
    skillTracks[skillTracks["ALL"] = -1879048193] = "ALL";
})(skillTracks = exports.skillTracks || (exports.skillTracks = {}));