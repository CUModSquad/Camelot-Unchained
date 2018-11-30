"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* GENERATED FILE -- DO NOT EDIT */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var request_1 = require("../utils/request");
var AccessType;
(function (AccessType) {
    AccessType[AccessType["Public"] = 0] = "Public";
    AccessType[AccessType["Beta3"] = 1] = "Beta3";
    AccessType[AccessType["Beta2"] = 2] = "Beta2";
    AccessType[AccessType["Beta1"] = 3] = "Beta1";
    AccessType[AccessType["Alpha"] = 4] = "Alpha";
    AccessType[AccessType["InternalTest"] = 5] = "InternalTest";
    AccessType[AccessType["Employees"] = 6] = "Employees";
})(AccessType = exports.AccessType || (exports.AccessType = {}));
var StatType;
(function (StatType) {
    StatType[StatType["None"] = 0] = "None";
    StatType[StatType["Primary"] = 1] = "Primary";
    StatType[StatType["Secondary"] = 2] = "Secondary";
    StatType[StatType["Derived"] = 3] = "Derived";
    StatType[StatType["Hidden"] = 4] = "Hidden";
})(StatType = exports.StatType || (exports.StatType = {}));
var SubItemSlot;
(function (SubItemSlot) {
    SubItemSlot[SubItemSlot["Invalid"] = 0] = "Invalid";
    SubItemSlot[SubItemSlot["PrimaryIngredient"] = 1] = "PrimaryIngredient";
    SubItemSlot[SubItemSlot["SecondaryIngredient1"] = 2] = "SecondaryIngredient1";
    SubItemSlot[SubItemSlot["SecondaryIngredient2"] = 3] = "SecondaryIngredient2";
    SubItemSlot[SubItemSlot["SecondaryIngredient3"] = 4] = "SecondaryIngredient3";
    SubItemSlot[SubItemSlot["SecondaryIngredient4"] = 5] = "SecondaryIngredient4";
    SubItemSlot[SubItemSlot["Alloy"] = 6] = "Alloy";
    SubItemSlot[SubItemSlot["WeaponBlade"] = 7] = "WeaponBlade";
    SubItemSlot[SubItemSlot["WeaponHandle"] = 8] = "WeaponHandle";
    SubItemSlot[SubItemSlot["NonRecipe"] = 9] = "NonRecipe";
})(SubItemSlot = exports.SubItemSlot || (exports.SubItemSlot = {}));
var Archetype;
(function (Archetype) {
    Archetype[Archetype["BlackKnight"] = 8] = "BlackKnight";
    Archetype[Archetype["Fianna"] = 9] = "Fianna";
    Archetype[Archetype["Mjolnir"] = 10] = "Mjolnir";
    Archetype[Archetype["Physician"] = 11] = "Physician";
    Archetype[Archetype["Empath"] = 12] = "Empath";
    Archetype[Archetype["Stonehealer"] = 13] = "Stonehealer";
    Archetype[Archetype["Blackguard"] = 14] = "Blackguard";
    Archetype[Archetype["ForestStalker"] = 15] = "ForestStalker";
    Archetype[Archetype["WintersShadow"] = 16] = "WintersShadow";
})(Archetype = exports.Archetype || (exports.Archetype = {}));
var Faction;
(function (Faction) {
    Faction[Faction["Factionless"] = 0] = "Factionless";
    Faction[Faction["TDD"] = 1] = "TDD";
    Faction[Faction["Viking"] = 2] = "Viking";
    Faction[Faction["Arthurian"] = 3] = "Arthurian";
    Faction[Faction["COUNT"] = 4] = "COUNT";
})(Faction = exports.Faction || (exports.Faction = {}));
var Gender;
(function (Gender) {
    Gender[Gender["None"] = 0] = "None";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var Race;
(function (Race) {
    Race[Race["Luchorpan"] = 2] = "Luchorpan";
    Race[Race["Valkyrie"] = 4] = "Valkyrie";
    Race[Race["HumanMaleV"] = 15] = "HumanMaleV";
    Race[Race["HumanMaleA"] = 16] = "HumanMaleA";
    Race[Race["HumanMaleT"] = 17] = "HumanMaleT";
    Race[Race["Pict"] = 18] = "Pict";
})(Race = exports.Race || (exports.Race = {}));
var ZoneType;
(function (ZoneType) {
    ZoneType[ZoneType["None"] = 0] = "None";
    ZoneType[ZoneType["Home"] = 1] = "Home";
    ZoneType[ZoneType["Builder"] = 2] = "Builder";
    ZoneType[ZoneType["Contested"] = 3] = "Contested";
})(ZoneType = exports.ZoneType || (exports.ZoneType = {}));
var ProgressionResultCode;
(function (ProgressionResultCode) {
    ProgressionResultCode[ProgressionResultCode["Success"] = 0] = "Success";
    ProgressionResultCode[ProgressionResultCode["InProgress"] = 1] = "InProgress";
    ProgressionResultCode[ProgressionResultCode["PlayerNotFound"] = 2] = "PlayerNotFound";
    ProgressionResultCode[ProgressionResultCode["DailyLogNotFound"] = 3] = "DailyLogNotFound";
    ProgressionResultCode[ProgressionResultCode["DBError"] = 4] = "DBError";
    ProgressionResultCode[ProgressionResultCode["DailyLogNotPublished"] = 5] = "DailyLogNotPublished";
    ProgressionResultCode[ProgressionResultCode["NotNextDayLog"] = 6] = "NotNextDayLog";
    ProgressionResultCode[ProgressionResultCode["InItemLoadoutScenario"] = 7] = "InItemLoadoutScenario";
    ProgressionResultCode[ProgressionResultCode["InvalidRequest"] = -1] = "InvalidRequest";
})(ProgressionResultCode = exports.ProgressionResultCode || (exports.ProgressionResultCode = {}));
var ItemActionResultCode;
(function (ItemActionResultCode) {
    ItemActionResultCode[ItemActionResultCode["Invalid"] = 0] = "Invalid";
    ItemActionResultCode[ItemActionResultCode["Success"] = 1] = "Success";
    ItemActionResultCode[ItemActionResultCode["UnknownError"] = 2] = "UnknownError";
    ItemActionResultCode[ItemActionResultCode["PermissionDenied"] = 3] = "PermissionDenied";
    ItemActionResultCode[ItemActionResultCode["ErrorNotFound"] = 4] = "ErrorNotFound";
    ItemActionResultCode[ItemActionResultCode["OutOfRange"] = 5] = "OutOfRange";
    ItemActionResultCode[ItemActionResultCode["ActionNotFound"] = 6] = "ActionNotFound";
    ItemActionResultCode[ItemActionResultCode["OnCooldown"] = 7] = "OnCooldown";
    ItemActionResultCode[ItemActionResultCode["PositionNotFound"] = 8] = "PositionNotFound";
    ItemActionResultCode[ItemActionResultCode["LimitReached"] = 9] = "LimitReached";
    ItemActionResultCode[ItemActionResultCode["InvalidPosition"] = 10] = "InvalidPosition";
    ItemActionResultCode[ItemActionResultCode["FeatureNotEnabled"] = 11] = "FeatureNotEnabled";
})(ItemActionResultCode = exports.ItemActionResultCode || (exports.ItemActionResultCode = {}));
var ModifyItemResultCode;
(function (ModifyItemResultCode) {
    ModifyItemResultCode[ModifyItemResultCode["Invalid"] = 0] = "Invalid";
    ModifyItemResultCode[ModifyItemResultCode["Success"] = 1] = "Success";
    ModifyItemResultCode[ModifyItemResultCode["NotSupported"] = 2] = "NotSupported";
    ModifyItemResultCode[ModifyItemResultCode["InvalidName"] = 3] = "InvalidName";
    ModifyItemResultCode[ModifyItemResultCode["PermissionDenied"] = 4] = "PermissionDenied";
    ModifyItemResultCode[ModifyItemResultCode["EntityNotFound"] = 5] = "EntityNotFound";
    ModifyItemResultCode[ModifyItemResultCode["ItemNotFound"] = 6] = "ItemNotFound";
    ModifyItemResultCode[ModifyItemResultCode["IncompatiblePermissions"] = 7] = "IncompatiblePermissions";
    ModifyItemResultCode[ModifyItemResultCode["UnknownError"] = 8] = "UnknownError";
})(ModifyItemResultCode = exports.ModifyItemResultCode || (exports.ModifyItemResultCode = {}));
var ModifySecureTradeResultCode;
(function (ModifySecureTradeResultCode) {
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["Success"] = 0] = "Success";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["NoTrade"] = 1] = "NoTrade";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["IncorrectState"] = 2] = "IncorrectState";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["ItemNotFound"] = 3] = "ItemNotFound";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["InventoryNotFound"] = 4] = "InventoryNotFound";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["DuplicateItemInRequest"] = 5] = "DuplicateItemInRequest";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["NoPendingInvite"] = 6] = "NoPendingInvite";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["MissingFaction"] = 7] = "MissingFaction";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["FactionMismatch"] = 8] = "FactionMismatch";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["TradeSourceNotAlive"] = 9] = "TradeSourceNotAlive";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["TradeTargetNotAlive"] = 10] = "TradeTargetNotAlive";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["NoEntityPosition"] = 11] = "NoEntityPosition";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["TooFarAway"] = 12] = "TooFarAway";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["EntityMismatch"] = 13] = "EntityMismatch";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["CanceledEntityMissing"] = 14] = "CanceledEntityMissing";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["DBError"] = 15] = "DBError";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["NotLoggedIn"] = 16] = "NotLoggedIn";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["EntityToTradeWithNotFound"] = 17] = "EntityToTradeWithNotFound";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["CannotTradeWithSelf"] = 18] = "CannotTradeWithSelf";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["MoveItemError"] = 19] = "MoveItemError";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["EntityCannotTrade"] = 20] = "EntityCannotTrade";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["LockTimeNotPassed"] = 21] = "LockTimeNotPassed";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["UnknownError"] = 22] = "UnknownError";
    ModifySecureTradeResultCode[ModifySecureTradeResultCode["InvalidRequest"] = -1] = "InvalidRequest";
})(ModifySecureTradeResultCode = exports.ModifySecureTradeResultCode || (exports.ModifySecureTradeResultCode = {}));
var MoveItemRequestLocationType;
(function (MoveItemRequestLocationType) {
    MoveItemRequestLocationType[MoveItemRequestLocationType["Invalid"] = 0] = "Invalid";
    MoveItemRequestLocationType[MoveItemRequestLocationType["Container"] = 1] = "Container";
    MoveItemRequestLocationType[MoveItemRequestLocationType["Equipment"] = 2] = "Equipment";
    MoveItemRequestLocationType[MoveItemRequestLocationType["Ground"] = 3] = "Ground";
    MoveItemRequestLocationType[MoveItemRequestLocationType["Inventory"] = 4] = "Inventory";
    MoveItemRequestLocationType[MoveItemRequestLocationType["Vox"] = 5] = "Vox";
    MoveItemRequestLocationType[MoveItemRequestLocationType["Trash"] = 6] = "Trash";
    MoveItemRequestLocationType[MoveItemRequestLocationType["BuildingPlaced"] = 7] = "BuildingPlaced";
})(MoveItemRequestLocationType = exports.MoveItemRequestLocationType || (exports.MoveItemRequestLocationType = {}));
var MoveItemResultCode;
(function (MoveItemResultCode) {
    MoveItemResultCode[MoveItemResultCode["Success"] = 0] = "Success";
    MoveItemResultCode[MoveItemResultCode["None"] = 1] = "None";
    MoveItemResultCode[MoveItemResultCode["Timeout"] = 2] = "Timeout";
    MoveItemResultCode[MoveItemResultCode["PlayerNotFound"] = 3] = "PlayerNotFound";
    MoveItemResultCode[MoveItemResultCode["EntityNotFound"] = 4] = "EntityNotFound";
    MoveItemResultCode[MoveItemResultCode["ItemNotFound"] = 5] = "ItemNotFound";
    MoveItemResultCode[MoveItemResultCode["ItemNotValid"] = 6] = "ItemNotValid";
    MoveItemResultCode[MoveItemResultCode["MixedError"] = 7] = "MixedError";
    MoveItemResultCode[MoveItemResultCode["TooManyItems"] = 8] = "TooManyItems";
    MoveItemResultCode[MoveItemResultCode["InventoryNotFound"] = 9] = "InventoryNotFound";
    MoveItemResultCode[MoveItemResultCode["EquipmentNotFound"] = 10] = "EquipmentNotFound";
    MoveItemResultCode[MoveItemResultCode["DefinitionNotFound"] = 11] = "DefinitionNotFound";
    MoveItemResultCode[MoveItemResultCode["SecureTradeNotFound"] = 12] = "SecureTradeNotFound";
    MoveItemResultCode[MoveItemResultCode["InvalidParameter"] = 13] = "InvalidParameter";
    MoveItemResultCode[MoveItemResultCode["SpatialNotFound"] = 14] = "SpatialNotFound";
    MoveItemResultCode[MoveItemResultCode["ItemFeatureTurnedOff"] = 15] = "ItemFeatureTurnedOff";
    MoveItemResultCode[MoveItemResultCode["BrokenItem"] = 16] = "BrokenItem";
    MoveItemResultCode[MoveItemResultCode["ItemRequirementNotMet"] = 17] = "ItemRequirementNotMet";
    MoveItemResultCode[MoveItemResultCode["ItemStatRequirementNotMet"] = 18] = "ItemStatRequirementNotMet";
    MoveItemResultCode[MoveItemResultCode["EntityNotValid"] = 19] = "EntityNotValid";
    MoveItemResultCode[MoveItemResultCode["MultiItemMoveNotSupported"] = 20] = "MultiItemMoveNotSupported";
    MoveItemResultCode[MoveItemResultCode["ItemsDoNotStack"] = 21] = "ItemsDoNotStack";
    MoveItemResultCode[MoveItemResultCode["TooFarAway"] = 22] = "TooFarAway";
    MoveItemResultCode[MoveItemResultCode["PermissionDenied"] = 23] = "PermissionDenied";
    MoveItemResultCode[MoveItemResultCode["ItemInversion"] = 24] = "ItemInversion";
    MoveItemResultCode[MoveItemResultCode["InvalidVoxSlot"] = 25] = "InvalidVoxSlot";
    MoveItemResultCode[MoveItemResultCode["ItemCannotBeTraded"] = 26] = "ItemCannotBeTraded";
    MoveItemResultCode[MoveItemResultCode["RestrictedToScenario"] = 27] = "RestrictedToScenario";
    MoveItemResultCode[MoveItemResultCode["CannotRemoveFromRunningScenario"] = 28] = "CannotRemoveFromRunningScenario";
    MoveItemResultCode[MoveItemResultCode["TrashingItemNotAllowed"] = 29] = "TrashingItemNotAllowed";
    MoveItemResultCode[MoveItemResultCode["OutOfRange"] = 30] = "OutOfRange";
    MoveItemResultCode[MoveItemResultCode["UnknownError"] = 31] = "UnknownError";
})(MoveItemResultCode = exports.MoveItemResultCode || (exports.MoveItemResultCode = {}));
var ModifyVoxJobResultCode;
(function (ModifyVoxJobResultCode) {
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["Success"] = 0] = "Success";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["JobAlreadyExists"] = 1] = "JobAlreadyExists";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["InvalidJob"] = 2] = "InvalidJob";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["NoCurrentJob"] = 3] = "NoCurrentJob";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["ItemsInVox"] = 4] = "ItemsInVox";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["IncorrectJobState"] = 5] = "IncorrectJobState";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["DBError"] = 6] = "DBError";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["NotSupported"] = 7] = "NotSupported";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["InvalidRecipe"] = 8] = "InvalidRecipe";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["TooManyIngredients"] = 9] = "TooManyIngredients";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["NotEnoughIngredients"] = 10] = "NotEnoughIngredients";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["IncorrectIngredient"] = 11] = "IncorrectIngredient";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["InvalidIngredient"] = 12] = "InvalidIngredient";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["InvalidQuality"] = 13] = "InvalidQuality";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["InventoryFull"] = 14] = "InventoryFull";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["NoRepairPoints"] = 15] = "NoRepairPoints";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["InvalidUnitCount"] = 16] = "InvalidUnitCount";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["ParameterError"] = 17] = "ParameterError";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["VoxNotFound"] = 18] = "VoxNotFound";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["RecipeAlreadyDiscovered"] = 19] = "RecipeAlreadyDiscovered";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["RecipeNotSet"] = 20] = "RecipeNotSet";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["ItemSlotNotSupported"] = 21] = "ItemSlotNotSupported";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["IngredientsExist"] = 22] = "IngredientsExist";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["VoxBroken"] = 23] = "VoxBroken";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["IngredientBroken"] = 24] = "IngredientBroken";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["PlayerNotFound"] = 25] = "PlayerNotFound";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["MoveItemError"] = 26] = "MoveItemError";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["InvalidItemName"] = 27] = "InvalidItemName";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["UnknownError"] = 28] = "UnknownError";
    ModifyVoxJobResultCode[ModifyVoxJobResultCode["InvalidRequest"] = -1] = "InvalidRequest";
})(ModifyVoxJobResultCode = exports.ModifyVoxJobResultCode || (exports.ModifyVoxJobResultCode = {}));
var InviteStatus;
(function (InviteStatus) {
    InviteStatus[InviteStatus["Active"] = 0] = "Active";
    InviteStatus[InviteStatus["Revoked"] = 1] = "Revoked";
    InviteStatus[InviteStatus["UsageLimitReached"] = 2] = "UsageLimitReached";
    InviteStatus[InviteStatus["Expired"] = 3] = "Expired";
})(InviteStatus = exports.InviteStatus || (exports.InviteStatus = {}));
var GroupTypes;
(function (GroupTypes) {
    GroupTypes[GroupTypes["Warband"] = 0] = "Warband";
    GroupTypes[GroupTypes["Battlegroup"] = 1] = "Battlegroup";
    GroupTypes[GroupTypes["Order"] = 2] = "Order";
    GroupTypes[GroupTypes["Campaign"] = 3] = "Campaign";
})(GroupTypes = exports.GroupTypes || (exports.GroupTypes = {}));
var ActionErrorCode;
(function (ActionErrorCode) {
    ActionErrorCode[ActionErrorCode["UnspecifiedError"] = 0] = "UnspecifiedError";
    ActionErrorCode[ActionErrorCode["ServerException"] = 1] = "ServerException";
    ActionErrorCode[ActionErrorCode["TokenAuthorizationFailed"] = 2] = "TokenAuthorizationFailed";
    ActionErrorCode[ActionErrorCode["NoActionRequired"] = 3] = "NoActionRequired";
    ActionErrorCode[ActionErrorCode["GeneralDatabaseError"] = 4] = "GeneralDatabaseError";
    ActionErrorCode[ActionErrorCode["PermissionDenied"] = 5] = "PermissionDenied";
    ActionErrorCode[ActionErrorCode["CharacterNotFound"] = 6] = "CharacterNotFound";
    ActionErrorCode[ActionErrorCode["GroupNotFound"] = 7] = "GroupNotFound";
    ActionErrorCode[ActionErrorCode["WrongGroupType"] = 8] = "WrongGroupType";
    ActionErrorCode[ActionErrorCode["WrongFaction"] = 9] = "WrongFaction";
    ActionErrorCode[ActionErrorCode["NameLength"] = 10] = "NameLength";
    ActionErrorCode[ActionErrorCode["NameContainsInvalidCharacters"] = 11] = "NameContainsInvalidCharacters";
    ActionErrorCode[ActionErrorCode["NameContainsNaughtyWords"] = 12] = "NameContainsNaughtyWords";
    ActionErrorCode[ActionErrorCode["NameContainsReservedWords"] = 13] = "NameContainsReservedWords";
    ActionErrorCode[ActionErrorCode["NameAlreadyInUse"] = 14] = "NameAlreadyInUse";
    ActionErrorCode[ActionErrorCode["ActiveWarbandAlreadyExists"] = 15] = "ActiveWarbandAlreadyExists";
    ActionErrorCode[ActionErrorCode["AlreadyAnOrderMember"] = 16] = "AlreadyAnOrderMember";
    ActionErrorCode[ActionErrorCode["MemberLimitReached"] = 17] = "MemberLimitReached";
    ActionErrorCode[ActionErrorCode["InviteCodeNotFound"] = 18] = "InviteCodeNotFound";
    ActionErrorCode[ActionErrorCode["InviteRequirementsNotMet"] = 19] = "InviteRequirementsNotMet";
    ActionErrorCode[ActionErrorCode["InviteExpired"] = 20] = "InviteExpired";
    ActionErrorCode[ActionErrorCode["InviteRevoked"] = 21] = "InviteRevoked";
    ActionErrorCode[ActionErrorCode["InviteUsageLimitReached"] = 22] = "InviteUsageLimitReached";
    ActionErrorCode[ActionErrorCode["RankLimitReached"] = 23] = "RankLimitReached";
    ActionErrorCode[ActionErrorCode["InvalidRankLevel"] = 24] = "InvalidRankLevel";
})(ActionErrorCode = exports.ActionErrorCode || (exports.ActionErrorCode = {}));
var PatchPermissions;
(function (PatchPermissions) {
    PatchPermissions[PatchPermissions["Public"] = 0] = "Public";
    PatchPermissions[PatchPermissions["AllBackers"] = 1] = "AllBackers";
    PatchPermissions[PatchPermissions["InternalTest"] = 2] = "InternalTest";
    PatchPermissions[PatchPermissions["Development"] = 4] = "Development";
    PatchPermissions[PatchPermissions["Alpha"] = 8] = "Alpha";
    PatchPermissions[PatchPermissions["Beta1"] = 16] = "Beta1";
    PatchPermissions[PatchPermissions["Beta2"] = 32] = "Beta2";
    PatchPermissions[PatchPermissions["Beta3"] = 64] = "Beta3";
})(PatchPermissions = exports.PatchPermissions || (exports.PatchPermissions = {}));
var ResourceNodePermissions;
(function (ResourceNodePermissions) {
    ResourceNodePermissions[ResourceNodePermissions["None"] = 0] = "None";
    ResourceNodePermissions[ResourceNodePermissions["Take"] = 1] = "Take";
    ResourceNodePermissions[ResourceNodePermissions["AutoDiscovered"] = 2] = "AutoDiscovered";
    ResourceNodePermissions[ResourceNodePermissions["All"] = -1] = "All";
})(ResourceNodePermissions = exports.ResourceNodePermissions || (exports.ResourceNodePermissions = {}));
var PermissibleSetKeyType;
(function (PermissibleSetKeyType) {
    PermissibleSetKeyType[PermissibleSetKeyType["Invalid"] = 0] = "Invalid";
    PermissibleSetKeyType[PermissibleSetKeyType["Faction"] = 1] = "Faction";
    PermissibleSetKeyType[PermissibleSetKeyType["ScenarioTeam"] = 2] = "ScenarioTeam";
    PermissibleSetKeyType[PermissibleSetKeyType["ScenarioRole"] = 3] = "ScenarioRole";
})(PermissibleSetKeyType = exports.PermissibleSetKeyType || (exports.PermissibleSetKeyType = {}));
var PermissibleTargetType;
(function (PermissibleTargetType) {
    PermissibleTargetType[PermissibleTargetType["Invalid"] = 0] = "Invalid";
    PermissibleTargetType[PermissibleTargetType["Any"] = 1] = "Any";
    PermissibleTargetType[PermissibleTargetType["Faction"] = 2] = "Faction";
    PermissibleTargetType[PermissibleTargetType["Character"] = 3] = "Character";
    PermissibleTargetType[PermissibleTargetType["ScenarioTeam"] = 4] = "ScenarioTeam";
    PermissibleTargetType[PermissibleTargetType["Warband"] = 5] = "Warband";
    PermissibleTargetType[PermissibleTargetType["CharactersWarband"] = 6] = "CharactersWarband";
    PermissibleTargetType[PermissibleTargetType["CharactersFaction"] = 7] = "CharactersFaction";
    PermissibleTargetType[PermissibleTargetType["CharactersOrder"] = 8] = "CharactersOrder";
    PermissibleTargetType[PermissibleTargetType["InNoScenario"] = 9] = "InNoScenario";
    PermissibleTargetType[PermissibleTargetType["Inverse"] = 10] = "Inverse";
    PermissibleTargetType[PermissibleTargetType["And"] = 11] = "And";
    PermissibleTargetType[PermissibleTargetType["ScenarioRole"] = 12] = "ScenarioRole";
    PermissibleTargetType[PermissibleTargetType["Scenario"] = 13] = "Scenario";
    PermissibleTargetType[PermissibleTargetType["Account"] = 14] = "Account";
})(PermissibleTargetType = exports.PermissibleTargetType || (exports.PermissibleTargetType = {}));
var VoxJobType;
(function (VoxJobType) {
    VoxJobType[VoxJobType["Invalid"] = 0] = "Invalid";
    VoxJobType[VoxJobType["Block"] = 1] = "Block";
    VoxJobType[VoxJobType["Grind"] = 2] = "Grind";
    VoxJobType[VoxJobType["Make"] = 3] = "Make";
    VoxJobType[VoxJobType["Purify"] = 4] = "Purify";
    VoxJobType[VoxJobType["Repair"] = 5] = "Repair";
    VoxJobType[VoxJobType["Salvage"] = 6] = "Salvage";
    VoxJobType[VoxJobType["Shape"] = 7] = "Shape";
})(VoxJobType = exports.VoxJobType || (exports.VoxJobType = {}));
var ItemPermissions;
(function (ItemPermissions) {
    ItemPermissions[ItemPermissions["None"] = 0] = "None";
    ItemPermissions[ItemPermissions["Trade"] = 1] = "Trade";
    ItemPermissions[ItemPermissions["Trash"] = 2] = "Trash";
    ItemPermissions[ItemPermissions["CraftWithVox"] = 4] = "CraftWithVox";
    ItemPermissions[ItemPermissions["Control"] = 8] = "Control";
    ItemPermissions[ItemPermissions["AddContents"] = 16] = "AddContents";
    ItemPermissions[ItemPermissions["RemoveContents"] = 32] = "RemoveContents";
    ItemPermissions[ItemPermissions["ViewContents"] = 64] = "ViewContents";
    ItemPermissions[ItemPermissions["ModifyDisplay"] = 128] = "ModifyDisplay";
    ItemPermissions[ItemPermissions["Ground"] = 256] = "Ground";
    ItemPermissions[ItemPermissions["Inventory"] = 512] = "Inventory";
    ItemPermissions[ItemPermissions["Equipment"] = 1024] = "Equipment";
    ItemPermissions[ItemPermissions["Container"] = 2048] = "Container";
    ItemPermissions[ItemPermissions["Vox"] = 4096] = "Vox";
    ItemPermissions[ItemPermissions["All"] = -1] = "All";
})(ItemPermissions = exports.ItemPermissions || (exports.ItemPermissions = {}));
var ModifyPlotResultCode;
(function (ModifyPlotResultCode) {
    ModifyPlotResultCode[ModifyPlotResultCode["Success"] = 0] = "Success";
    ModifyPlotResultCode[ModifyPlotResultCode["PlotNotFound"] = 1] = "PlotNotFound";
    ModifyPlotResultCode[ModifyPlotResultCode["CharacterNotFound"] = 2] = "CharacterNotFound";
    ModifyPlotResultCode[ModifyPlotResultCode["InvalidParameter"] = 3] = "InvalidParameter";
    ModifyPlotResultCode[ModifyPlotResultCode["NoMatchingPermissionSetFound"] = 4] = "NoMatchingPermissionSetFound";
    ModifyPlotResultCode[ModifyPlotResultCode["PermissionDenied"] = 5] = "PermissionDenied";
    ModifyPlotResultCode[ModifyPlotResultCode["CharacterNotOnPlot"] = 6] = "CharacterNotOnPlot";
    ModifyPlotResultCode[ModifyPlotResultCode["PlotNotCompatibleWithScenario"] = 7] = "PlotNotCompatibleWithScenario";
    ModifyPlotResultCode[ModifyPlotResultCode["PlotNotCompatibleWithFaction"] = 8] = "PlotNotCompatibleWithFaction";
    ModifyPlotResultCode[ModifyPlotResultCode["ScenarioNotFound"] = 9] = "ScenarioNotFound";
    ModifyPlotResultCode[ModifyPlotResultCode["TeamNotForScenario"] = 10] = "TeamNotForScenario";
    ModifyPlotResultCode[ModifyPlotResultCode["DatabaseError"] = 11] = "DatabaseError";
    ModifyPlotResultCode[ModifyPlotResultCode["NotSupported"] = 12] = "NotSupported";
    ModifyPlotResultCode[ModifyPlotResultCode["FeatureDisabled"] = 13] = "FeatureDisabled";
    ModifyPlotResultCode[ModifyPlotResultCode["UnknownError"] = 14] = "UnknownError";
    ModifyPlotResultCode[ModifyPlotResultCode["MaxPlotsOwned"] = 15] = "MaxPlotsOwned";
})(ModifyPlotResultCode = exports.ModifyPlotResultCode || (exports.ModifyPlotResultCode = {}));
var PlotPermissions;
(function (PlotPermissions) {
    PlotPermissions[PlotPermissions["None"] = 0] = "None";
    PlotPermissions[PlotPermissions["ModifyPlannedBuilding"] = 1] = "ModifyPlannedBuilding";
    PlotPermissions[PlotPermissions["RemoveDroppedBlocks"] = 2] = "RemoveDroppedBlocks";
    PlotPermissions[PlotPermissions["Owned"] = 4] = "Owned";
    PlotPermissions[PlotPermissions["UseSpawnPoint"] = 8] = "UseSpawnPoint";
    PlotPermissions[PlotPermissions["AddItems"] = 16] = "AddItems";
    PlotPermissions[PlotPermissions["RemoveItems"] = 32] = "RemoveItems";
    PlotPermissions[PlotPermissions["NoPlayerOwnerPermissions"] = -5] = "NoPlayerOwnerPermissions";
    PlotPermissions[PlotPermissions["All"] = -1] = "All";
})(PlotPermissions = exports.PlotPermissions || (exports.PlotPermissions = {}));
var AuthActionErrorCode;
(function (AuthActionErrorCode) {
    AuthActionErrorCode[AuthActionErrorCode["Unknown"] = 0] = "Unknown";
    AuthActionErrorCode[AuthActionErrorCode["NoActionRequired"] = 1] = "NoActionRequired";
    AuthActionErrorCode[AuthActionErrorCode["Unauthorized"] = 2] = "Unauthorized";
    AuthActionErrorCode[AuthActionErrorCode["InvalidToken"] = 3] = "InvalidToken";
    AuthActionErrorCode[AuthActionErrorCode["CharacterNotFound"] = 4] = "CharacterNotFound";
    AuthActionErrorCode[AuthActionErrorCode["PermissionExpired"] = 5] = "PermissionExpired";
    AuthActionErrorCode[AuthActionErrorCode["RenewalTimerExpired"] = 6] = "RenewalTimerExpired";
    AuthActionErrorCode[AuthActionErrorCode["TokenGenerationFailed"] = 7] = "TokenGenerationFailed";
    AuthActionErrorCode[AuthActionErrorCode["TokenAccessRevoked"] = 8] = "TokenAccessRevoked";
    AuthActionErrorCode[AuthActionErrorCode["InvalidEmailOrPassword"] = 9] = "InvalidEmailOrPassword";
    AuthActionErrorCode[AuthActionErrorCode["RequirePrivacyPolicyAcceptance"] = 10] = "RequirePrivacyPolicyAcceptance";
    AuthActionErrorCode[AuthActionErrorCode["Throttled"] = 11] = "Throttled";
    AuthActionErrorCode[AuthActionErrorCode["NoScreenName"] = 12] = "NoScreenName";
})(AuthActionErrorCode = exports.AuthActionErrorCode || (exports.AuthActionErrorCode = {}));
var APIPermissions;
(function (APIPermissions) {
    APIPermissions[APIPermissions["None"] = 0] = "None";
    APIPermissions[APIPermissions["EquipmentRead"] = 1] = "EquipmentRead";
    APIPermissions[APIPermissions["InventoryRead"] = 2] = "InventoryRead";
    APIPermissions[APIPermissions["StatsAndTraitsRead"] = 3] = "StatsAndTraitsRead";
    APIPermissions[APIPermissions["LiveStatusRead"] = 4] = "LiveStatusRead";
    APIPermissions[APIPermissions["ProgressionRead"] = 5] = "ProgressionRead";
    APIPermissions[APIPermissions["FriendsRead"] = 6] = "FriendsRead";
    APIPermissions[APIPermissions["EnemiesRead"] = 7] = "EnemiesRead";
    APIPermissions[APIPermissions["ActiveWarbandRead"] = 8] = "ActiveWarbandRead";
    APIPermissions[APIPermissions["BattlegroupRead"] = 9] = "BattlegroupRead";
    APIPermissions[APIPermissions["WarbandsRead"] = 10] = "WarbandsRead";
    APIPermissions[APIPermissions["OrderRead"] = 11] = "OrderRead";
    APIPermissions[APIPermissions["CampaignsRead"] = 12] = "CampaignsRead";
    APIPermissions[APIPermissions["LiveWarbandRead"] = 13] = "LiveWarbandRead";
    APIPermissions[APIPermissions["LiveBattlegroupRead"] = 14] = "LiveBattlegroupRead";
    APIPermissions[APIPermissions["VoxInventoryRead"] = 15] = "VoxInventoryRead";
    APIPermissions[APIPermissions["VoxJobsRead"] = 16] = "VoxJobsRead";
    APIPermissions[APIPermissions["InvitesRead"] = 17] = "InvitesRead";
    APIPermissions[APIPermissions["PlotRead"] = 30] = "PlotRead";
    APIPermissions[APIPermissions["PlotQueueRead"] = 31] = "PlotQueueRead";
    APIPermissions[APIPermissions["CreateCharacters"] = 1000] = "CreateCharacters";
    APIPermissions[APIPermissions["DeleteCharacters"] = 1001] = "DeleteCharacters";
    APIPermissions[APIPermissions["ManageEquipment"] = 1002] = "ManageEquipment";
    APIPermissions[APIPermissions["ManageInventory"] = 1003] = "ManageInventory";
    APIPermissions[APIPermissions["ManageContainers"] = 1004] = "ManageContainers";
    APIPermissions[APIPermissions["AcceptInvites"] = 2000] = "AcceptInvites";
    APIPermissions[APIPermissions["ManageOrder"] = 2003] = "ManageOrder";
    APIPermissions[APIPermissions["ManageWarbands"] = 2003] = "ManageWarbands";
    APIPermissions[APIPermissions["ManageBattlegroups"] = 2004] = "ManageBattlegroups";
    APIPermissions[APIPermissions["VoxDeposit"] = 3000] = "VoxDeposit";
    APIPermissions[APIPermissions["VoxWithdraw"] = 3001] = "VoxWithdraw";
    APIPermissions[APIPermissions["ManageVoxJobs"] = 3002] = "ManageVoxJobs";
    APIPermissions[APIPermissions["ManagePlot"] = 4000] = "ManagePlot";
    APIPermissions[APIPermissions["Game"] = 9001] = "Game";
    APIPermissions[APIPermissions["Chat"] = 9002] = "Chat";
    APIPermissions[APIPermissions["CSE"] = 2147483646] = "CSE";
    APIPermissions[APIPermissions["All"] = 2147483647] = "All";
})(APIPermissions = exports.APIPermissions || (exports.APIPermissions = {}));
var SpawnPointPermissions;
(function (SpawnPointPermissions) {
    SpawnPointPermissions[SpawnPointPermissions["None"] = 0] = "None";
    SpawnPointPermissions[SpawnPointPermissions["Spawn"] = 1] = "Spawn";
    SpawnPointPermissions[SpawnPointPermissions["All"] = -1] = "All";
})(SpawnPointPermissions = exports.SpawnPointPermissions || (exports.SpawnPointPermissions = {}));
var ItemPlacementType;
(function (ItemPlacementType) {
    ItemPlacementType[ItemPlacementType["None"] = 0] = "None";
    ItemPlacementType[ItemPlacementType["Door"] = 1] = "Door";
    ItemPlacementType[ItemPlacementType["Plot"] = 2] = "Plot";
})(ItemPlacementType = exports.ItemPlacementType || (exports.ItemPlacementType = {}));
var ServerStatus;
(function (ServerStatus) {
    ServerStatus[ServerStatus["Offline"] = 0] = "Offline";
    ServerStatus[ServerStatus["Starting"] = 1] = "Starting";
    ServerStatus[ServerStatus["Online"] = 2] = "Online";
})(ServerStatus = exports.ServerStatus || (exports.ServerStatus = {}));
var FieldCodes;
(function (FieldCodes) {
    FieldCodes[FieldCodes["BasicSuccess"] = 0] = "BasicSuccess";
    FieldCodes[FieldCodes["GroupActionSuccess"] = 1] = "GroupActionSuccess";
    FieldCodes[FieldCodes["ModifyVoxJobSuccess"] = 2] = "ModifyVoxJobSuccess";
    FieldCodes[FieldCodes["MoveItemSuccess"] = 3] = "MoveItemSuccess";
    FieldCodes[FieldCodes["ProgressionSuccess"] = 4] = "ProgressionSuccess";
    FieldCodes[FieldCodes["ModifySecureTradeSuccess"] = 5] = "ModifySecureTradeSuccess";
    FieldCodes[FieldCodes["ModifyPlotSuccess"] = 6] = "ModifyPlotSuccess";
    FieldCodes[FieldCodes["ModifyItemSuccess"] = 7] = "ModifyItemSuccess";
    FieldCodes[FieldCodes["LoginSuccess"] = 8] = "LoginSuccess";
    FieldCodes[FieldCodes["ItemActionSuccess"] = 9] = "ItemActionSuccess";
    FieldCodes[FieldCodes["AuthActionSuccess"] = 10] = "AuthActionSuccess";
    FieldCodes[FieldCodes["UnspecifiedAuthorizationDenied"] = 1000] = "UnspecifiedAuthorizationDenied";
    FieldCodes[FieldCodes["AuthorizationFailed"] = 1001] = "AuthorizationFailed";
    FieldCodes[FieldCodes["LoginTokenAuthorizationFailed"] = 1002] = "LoginTokenAuthorizationFailed";
    FieldCodes[FieldCodes["RealmRestricted"] = 1003] = "RealmRestricted";
    FieldCodes[FieldCodes["LoginFailed"] = 1004] = "LoginFailed";
    FieldCodes[FieldCodes["LoginThrottled"] = 1005] = "LoginThrottled";
    FieldCodes[FieldCodes["UnspecifiedNotAllowed"] = 2000] = "UnspecifiedNotAllowed";
    FieldCodes[FieldCodes["RateLimitExceeded"] = 2001] = "RateLimitExceeded";
    FieldCodes[FieldCodes["InternalAction"] = 2002] = "InternalAction";
    FieldCodes[FieldCodes["UnspecifiedRequestError"] = 3000] = "UnspecifiedRequestError";
    FieldCodes[FieldCodes["UnspecifiedExecutionError"] = 4000] = "UnspecifiedExecutionError";
    FieldCodes[FieldCodes["UnhandledExecutionException"] = 4001] = "UnhandledExecutionException";
    FieldCodes[FieldCodes["DoesNotExist"] = 4002] = "DoesNotExist";
    FieldCodes[FieldCodes["UserStateConflict"] = 4003] = "UserStateConflict";
    FieldCodes[FieldCodes["InsufficientResource"] = 4004] = "InsufficientResource";
    FieldCodes[FieldCodes["VoxJobError"] = 4005] = "VoxJobError";
    FieldCodes[FieldCodes["MoveItemError"] = 4006] = "MoveItemError";
    FieldCodes[FieldCodes["SecureTradeError"] = 4007] = "SecureTradeError";
    FieldCodes[FieldCodes["ProgressionError"] = 4008] = "ProgressionError";
    FieldCodes[FieldCodes["GroupActionError"] = 4009] = "GroupActionError";
    FieldCodes[FieldCodes["TimeoutError"] = 4010] = "TimeoutError";
    FieldCodes[FieldCodes["ModifyItemError"] = 4011] = "ModifyItemError";
    FieldCodes[FieldCodes["ItemActionError"] = 4012] = "ItemActionError";
    FieldCodes[FieldCodes["AuthActionError"] = 4013] = "AuthActionError";
    FieldCodes[FieldCodes["UnspecifiedServiceUnavailable"] = 5000] = "UnspecifiedServiceUnavailable";
    FieldCodes[FieldCodes["DatabaseUnavailable"] = 5001] = "DatabaseUnavailable";
    FieldCodes[FieldCodes["GroupServiceUnavailable"] = 5002] = "GroupServiceUnavailable";
    FieldCodes[FieldCodes["GameServiceUnavailable"] = 5003] = "GameServiceUnavailable";
    FieldCodes[FieldCodes["PresenceServiceUnavailable"] = 5004] = "PresenceServiceUnavailable";
    FieldCodes[FieldCodes["InvalidModel"] = 30001] = "InvalidModel";
})(FieldCodes = exports.FieldCodes || (exports.FieldCodes = {}));
exports.CharactersAPI = {
    CreateCharacterV2: function CreateCharacterV2(config, shardID, character) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/characters/create', {
            shardID: shardID
        }, character, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    DeleteCharacterV1: function DeleteCharacterV1(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/characters/delete', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.ContentAPI = {
    MessageOfTheDayV1: function MessageOfTheDayV1(config, channel) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/messageoftheday', {
            channel: channel
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    PatcherHeroContentV1: function PatcherHeroContentV1(config) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/patcherherocontent', {}, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    PatcherAlertsV1: function PatcherAlertsV1(config) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/patcheralerts', {}, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.CraftingAPI = {
    SetVoxJob: function SetVoxJob(config, shardID, characterID, job) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/setvoxjob', {
            shardID: shardID,
            characterID: characterID,
            job: job
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    ClearVoxJob: function ClearVoxJob(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/clearvoxjob', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    SetRecipeID: function SetRecipeID(config, shardID, characterID, recipeID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/setvoxrecipeid', {
            shardID: shardID,
            characterID: characterID,
            recipeID: recipeID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    SetQuality: function SetQuality(config, shardID, characterID, quality) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/setvoxquality', {
            shardID: shardID,
            characterID: characterID,
            quality: quality
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    SetCustomItemName: function SetCustomItemName(config, shardID, characterID, itemName) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/setvoxcustomitemname', {
            shardID: shardID,
            characterID: characterID,
            itemName: itemName
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    AddIngredient: function AddIngredient(config, shardID, characterID, itemInstanceID, unitCount, slot) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/addvoxingredient', {
            shardID: shardID,
            characterID: characterID,
            itemInstanceID: itemInstanceID,
            unitCount: unitCount,
            slot: slot
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    RemoveVoxIngredient: function RemoveVoxIngredient(config, shardID, characterID, itemInstanceID, unitCount) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/removevoxingredient', {
            shardID: shardID,
            characterID: characterID,
            itemInstanceID: itemInstanceID,
            unitCount: unitCount
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    StartVoxJob: function StartVoxJob(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/startvoxjob', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    CollectFinishedVoxJob: function CollectFinishedVoxJob(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/collectfinishedvoxjob', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    CancelVoxJob: function CancelVoxJob(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/cancelvoxjob', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    SetVoxItemCount: function SetVoxItemCount(config, shardID, characterID, count) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/crafting/setvoxitemcount', {
            shardID: shardID,
            characterID: characterID,
            count: count
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.GameDataAPI = {
    GetFactionInfoV1: function GetFactionInfoV1(config) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/gamedata/factionInfo', {}, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetFactionsV1: function GetFactionsV1(config) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/gamedata/factions', {}, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetAttributeInfoV1: function GetAttributeInfoV1(config, shard) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/gamedata/attributeInfo', {
            shard: shard
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetArchetypesV1: function GetArchetypesV1(config) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/gamedata/archetypes', {}, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetRacesV1: function GetRacesV1(config) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/gamedata/races', {}, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetAttributeOffsetsV1: function GetAttributeOffsetsV1(config, shard) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/gamedata/attributeOffsets', {
            shard: shard
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetOrderPermissionsV1: function GetOrderPermissionsV1(config) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/gamedata/orderPermissions', {}, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.GroupsAPI = {
    CreateWarbandV1: function CreateWarbandV1(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/createWarband', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    CreateBattlegroupV1: function CreateBattlegroupV1(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/createBattlegroup', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    CreateOrderV1: function CreateOrderV1(config, shardID, characterID, name) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/createOrder', {
            shardID: shardID,
            characterID: characterID,
            name: name
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    KickV1: function KickV1(config, shardID, characterID, groupID, targetEntityID, targetCharacterID, targetName) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/kick', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID,
            targetEntityID: targetEntityID,
            targetCharacterID: targetCharacterID,
            targetName: targetName
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    MakeLeaderV1: function MakeLeaderV1(config, shardID, characterID, groupID, targetEntityID, targetCharacterID, targetName) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/makeleader', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID,
            targetEntityID: targetEntityID,
            targetCharacterID: targetCharacterID,
            targetName: targetName
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GrantPermissionV1: function GrantPermissionV1(config, shardID, characterID, groupID, permissionToGrant, targetEntityID, targetCharacterID, targetName) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/grantpermission', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID,
            permissionToGrant: permissionToGrant,
            targetEntityID: targetEntityID,
            targetCharacterID: targetCharacterID,
            targetName: targetName
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GrantInvitePermissionV1: function GrantInvitePermissionV1(config, shardID, characterID, groupID, targetEntityID, targetCharacterID, targetName) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/grantinvitepermission', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID,
            targetEntityID: targetEntityID,
            targetCharacterID: targetCharacterID,
            targetName: targetName
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    RevokePermissionV1: function RevokePermissionV1(config, shardID, characterID, groupID, permissionToRevoke, targetEntityID, targetCharacterID, targetName) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/revokepermission', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID,
            permissionToRevoke: permissionToRevoke,
            targetEntityID: targetEntityID,
            targetCharacterID: targetCharacterID,
            targetName: targetName
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    InviteV1: function InviteV1(config, shardID, characterID, groupID, targetID, targetName) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/invite', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID,
            targetID: targetID,
            targetName: targetName
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    JoinV1: function JoinV1(config, shardID, characterID, groupID, inviteCode) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/join', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID,
            inviteCode: inviteCode
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    QuitV1: function QuitV1(config, shardID, characterID, groupID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/quit', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    AbandonV1: function AbandonV1(config, shardID, characterID, groupID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/abandon', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    DisbandV1: function DisbandV1(config, shardID, characterID, groupID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/groups/disband', {
            shardID: shardID,
            characterID: characterID,
            groupID: groupID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.ItemAPI = {
    MoveItems: function MoveItems(config, shardID, characterID, request) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/items/moveitems', {
            shardID: shardID,
            characterID: characterID,
            request: request
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    BatchMoveItems: function BatchMoveItems(config, shardID, characterID, requests) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/items/batchmoveitems', {
            shardID: shardID,
            characterID: characterID
        }, requests, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    SetContainerColor: function SetContainerColor(config, shardID, characterID, itemInstanceID, itemEntityID, red, green, blue, alpha) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/items/setcontainercolor', {
            shardID: shardID,
            characterID: characterID,
            itemInstanceID: itemInstanceID,
            itemEntityID: itemEntityID,
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    RenameItem: function RenameItem(config, shardID, characterID, itemInstanceID, itemEntityID, newName) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/items/renameitem', {
            shardID: shardID,
            characterID: characterID,
            itemInstanceID: itemInstanceID,
            itemEntityID: itemEntityID,
            newName: newName
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    PerformItemAction: function PerformItemAction(config, shardID, characterID, itemInstanceID, itemEntityID, actionID, parameters) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/items/performitemaction', {
            shardID: shardID,
            characterID: characterID,
            itemInstanceID: itemInstanceID,
            itemEntityID: itemEntityID,
            actionID: actionID,
            parameters: parameters
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.OrdersAPI = {};
exports.PresenceAPI = {
    GetStartingServer: function GetStartingServer(config, shardID, characterID) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/presence/startingServer/{shardID}/{characterID}', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetServers: function GetServers(config, shardID) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/presence/servers/{shardID}', {
            shardID: shardID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetPlayers: function GetPlayers(config, shardID) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/presence/players/{shardID}', {
            shardID: shardID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.PlotsAPI = {
    ReleasePlot: function ReleasePlot(config, shardID, characterID, plotInstanceID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/plot/releasePlot', {
            shardID: shardID,
            characterID: characterID,
            plotInstanceID: plotInstanceID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GeneratePlotDeed: function GeneratePlotDeed(config, shardID, characterID, plotInstanceID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/plot/generatePlotDeed', {
            shardID: shardID,
            characterID: characterID,
            plotInstanceID: plotInstanceID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    TakeOwnership: function TakeOwnership(config, shardID, characterID, plotInstanceID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/plot/takeOwnership', {
            shardID: shardID,
            characterID: characterID,
            plotInstanceID: plotInstanceID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GrantPermissions: function GrantPermissions(config, shardID, characterID, plotInstanceID, newPermissions, target) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/plot/grantPermissions', {
            shardID: shardID,
            characterID: characterID,
            plotInstanceID: plotInstanceID,
            newPermissions: newPermissions,
            target: target
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    RevokePermissions: function RevokePermissions(config, shardID, characterID, plotInstanceID, revokePermissions, target) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/plot/revokePermissions', {
            shardID: shardID,
            characterID: characterID,
            plotInstanceID: plotInstanceID,
            revokePermissions: revokePermissions,
            target: target
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetQueueStatus: function GetQueueStatus(config, shardID, characterID, plotInstanceID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/plot/getQueueStatus', {
            shardID: shardID,
            characterID: characterID,
            plotInstanceID: plotInstanceID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.ProgressionAPI = {
    CollectCharacterDayProgression: function CollectCharacterDayProgression(config, shardID, characterID, logID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/character/collectdayprogression', {
            shardID: shardID,
            characterID: characterID,
            logID: logID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.SecureTradeAPI = {
    Invite: function Invite(config, shardID, characterID, tradeTargetID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/invite', {
            shardID: shardID,
            characterID: characterID,
            tradeTargetID: tradeTargetID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    RevokeInvite: function RevokeInvite(config, shardID, characterID, inviteTargetID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/revokeinvite', {
            shardID: shardID,
            characterID: characterID,
            inviteTargetID: inviteTargetID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    AcceptInvite: function AcceptInvite(config, shardID, characterID, inviterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/acceptinvite', {
            shardID: shardID,
            characterID: characterID,
            inviterID: inviterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    RejectInvite: function RejectInvite(config, shardID, characterID, inviterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/rejectinvite', {
            shardID: shardID,
            characterID: characterID,
            inviterID: inviterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    AbortSecureTrade: function AbortSecureTrade(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/abort', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    Lock: function Lock(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/lock', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    Unlock: function Unlock(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/unlock', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    AddItem: function AddItem(config, shardID, characterID, itemInstanceID, unitCount) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/additem', {
            shardID: shardID,
            characterID: characterID,
            itemInstanceID: itemInstanceID,
            unitCount: unitCount
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    RemoveItem: function RemoveItem(config, shardID, characterID, itemInstanceID, unitCount) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/removeItem', {
            shardID: shardID,
            characterID: characterID,
            itemInstanceID: itemInstanceID,
            unitCount: unitCount
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    Confirm: function Confirm(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/confirm', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    CancelTradeConfirmation: function CancelTradeConfirmation(config, shardID, characterID) {
        var conf = config();
        return request_1.request('post', conf.url + 'v1/secureTrade/cancelconfirmation', {
            shardID: shardID,
            characterID: characterID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.ServersAPI = {
    GetServersV1: function GetServersV1(config) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/servers', {}, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetServersForChannelV1: function GetServersForChannelV1(config, channelId) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/servers/getForChannel', {
            channelId: channelId
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetHostsForServerV1: function GetHostsForServerV1(config, channelId, name) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/servers/getHosts', {
            channelId: channelId,
            name: name
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetAvailableZones: function GetAvailableZones(config, shard) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/availableZones', {
            shard: shard
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    },
    GetZoneInfo: function GetZoneInfo(config, shard, zoneID) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/getZoneInfo', {
            shard: shard,
            zoneID: zoneID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};
exports.TraitsAPI = {
    GetTraitsV1: function GetTraitsV1(config, shardID) {
        var conf = config();
        return request_1.request('get', conf.url + 'v1/traits', {
            shardID: shardID
        }, null, { headers: Object.assign({}, {
                'Accept': 'application/json'
            }, conf.headers || {}) });
    }
};