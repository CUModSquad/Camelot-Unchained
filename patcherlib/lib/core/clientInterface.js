"use strict";
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var SkillStateTypeEnum;
(function (SkillStateTypeEnum) {
    SkillStateTypeEnum[SkillStateTypeEnum["Standard"] = 0] = "Standard";
    SkillStateTypeEnum[SkillStateTypeEnum["Modal"] = 1] = "Modal";
})(SkillStateTypeEnum = exports.SkillStateTypeEnum || (exports.SkillStateTypeEnum = {}));
var SkillStateStatusEnum;
(function (SkillStateStatusEnum) {
    SkillStateStatusEnum[SkillStateStatusEnum["None"] = 0] = "None";
    SkillStateStatusEnum[SkillStateStatusEnum["Ready"] = 1] = "Ready";
    SkillStateStatusEnum[SkillStateStatusEnum["Unusable"] = 2] = "Unusable";
    SkillStateStatusEnum[SkillStateStatusEnum["Disabled"] = 4] = "Disabled";
    SkillStateStatusEnum[SkillStateStatusEnum["Queued"] = 8] = "Queued";
    SkillStateStatusEnum[SkillStateStatusEnum["Preparation"] = 16] = "Preparation";
    SkillStateStatusEnum[SkillStateStatusEnum["Channel"] = 32] = "Channel";
    SkillStateStatusEnum[SkillStateStatusEnum["Running"] = 64] = "Running";
    SkillStateStatusEnum[SkillStateStatusEnum["Recovery"] = 128] = "Recovery";
    SkillStateStatusEnum[SkillStateStatusEnum["Cooldown"] = 256] = "Cooldown";
    SkillStateStatusEnum[SkillStateStatusEnum["Error"] = 512] = "Error";
    SkillStateStatusEnum[SkillStateStatusEnum["Held"] = 1024] = "Held";
})(SkillStateStatusEnum = exports.SkillStateStatusEnum || (exports.SkillStateStatusEnum = {}));
var SkillStateReasonEnum;
(function (SkillStateReasonEnum) {
    SkillStateReasonEnum[SkillStateReasonEnum["None"] = 0] = "None";
    SkillStateReasonEnum[SkillStateReasonEnum["NoAmmo"] = 1] = "NoAmmo";
    SkillStateReasonEnum[SkillStateReasonEnum["NoWeapon"] = 2] = "NoWeapon";
})(SkillStateReasonEnum = exports.SkillStateReasonEnum || (exports.SkillStateReasonEnum = {}));
var SkillStateTrackEnum;
(function (SkillStateTrackEnum) {
    SkillStateTrackEnum[SkillStateTrackEnum["None"] = 0] = "None";
    SkillStateTrackEnum[SkillStateTrackEnum["PrimaryWeapon"] = 1] = "PrimaryWeapon";
    SkillStateTrackEnum[SkillStateTrackEnum["SecondaryWeapon"] = 2] = "SecondaryWeapon";
    SkillStateTrackEnum[SkillStateTrackEnum["BothWeapons"] = 3] = "BothWeapons";
    SkillStateTrackEnum[SkillStateTrackEnum["Voice"] = 4] = "Voice";
    SkillStateTrackEnum[SkillStateTrackEnum["Mind"] = 8] = "Mind";
})(SkillStateTrackEnum = exports.SkillStateTrackEnum || (exports.SkillStateTrackEnum = {}));