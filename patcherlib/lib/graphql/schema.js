"use strict";
/* tslint:disable */

Object.defineProperty(exports, "__esModule", { value: true });
/** AccessType */
var AccessType;
(function (AccessType) {
    AccessType["Public"] = "Public";
    AccessType["Beta3"] = "Beta3";
    AccessType["Beta2"] = "Beta2";
    AccessType["Beta1"] = "Beta1";
    AccessType["Alpha"] = "Alpha";
    AccessType["InternalTest"] = "InternalTest";
    AccessType["Employees"] = "Employees";
    AccessType["Invalid"] = "Invalid";
})(AccessType = exports.AccessType || (exports.AccessType = {}));
/** ServerLib.ApiModels.ServerStatus */
var ServerStatus;
(function (ServerStatus) {
    ServerStatus["Offline"] = "Offline";
    ServerStatus["Starting"] = "Starting";
    ServerStatus["Online"] = "Online";
})(ServerStatus = exports.ServerStatus || (exports.ServerStatus = {}));
/** CU.Groups.InviteStatus */
var InviteStatus;
(function (InviteStatus) {
    InviteStatus["Active"] = "Active";
    InviteStatus["Revoked"] = "Revoked";
    InviteStatus["UsageLimitReached"] = "UsageLimitReached";
    InviteStatus["Expired"] = "Expired";
})(InviteStatus = exports.InviteStatus || (exports.InviteStatus = {}));
/** CU.Groups.GroupTypes */
var GroupTypes;
(function (GroupTypes) {
    GroupTypes["Warband"] = "Warband";
    GroupTypes["Battlegroup"] = "Battlegroup";
    GroupTypes["Order"] = "Order";
    GroupTypes["Campaign"] = "Campaign";
})(GroupTypes = exports.GroupTypes || (exports.GroupTypes = {}));
/** CU.Faction */
var Faction;
(function (Faction) {
    Faction["Factionless"] = "Factionless";
    Faction["TDD"] = "TDD";
    Faction["Viking"] = "Viking";
    Faction["Arthurian"] = "Arthurian";
    Faction["COUNT"] = "COUNT";
})(Faction = exports.Faction || (exports.Faction = {}));
/** CU.Race */
var Race;
(function (Race) {
    Race["Tuatha"] = "Tuatha";
    Race["Hamadryad"] = "Hamadryad";
    Race["Luchorpan"] = "Luchorpan";
    Race["Firbog"] = "Firbog";
    Race["Valkyrie"] = "Valkyrie";
    Race["Helbound"] = "Helbound";
    Race["FrostGiant"] = "FrostGiant";
    Race["Dvergr"] = "Dvergr";
    Race["Strm"] = "Strm";
    Race["CaitSith"] = "CaitSith";
    Race["Golem"] = "Golem";
    Race["Gargoyle"] = "Gargoyle";
    Race["StormRider"] = "StormRider";
    Race["StormRiderT"] = "StormRiderT";
    Race["StormRiderV"] = "StormRiderV";
    Race["HumanMaleV"] = "HumanMaleV";
    Race["HumanMaleA"] = "HumanMaleA";
    Race["HumanMaleT"] = "HumanMaleT";
    Race["Pict"] = "Pict";
    Race["Any"] = "Any";
})(Race = exports.Race || (exports.Race = {}));
/** CU.Gender */
var Gender;
(function (Gender) {
    Gender["None"] = "None";
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
/** CU.Archetype */
var Archetype;
(function (Archetype) {
    Archetype["None"] = "None";
    Archetype["EarthMage"] = "EarthMage";
    Archetype["WaterMage"] = "WaterMage";
    Archetype["Fighter"] = "Fighter";
    Archetype["Healer"] = "Healer";
    Archetype["Archer"] = "Archer";
    Archetype["MeleeCombatTest"] = "MeleeCombatTest";
    Archetype["ArcherTest"] = "ArcherTest";
    Archetype["BlackKnight"] = "BlackKnight";
    Archetype["Fianna"] = "Fianna";
    Archetype["Mjolnir"] = "Mjolnir";
    Archetype["Physician"] = "Physician";
    Archetype["Empath"] = "Empath";
    Archetype["Stonehealer"] = "Stonehealer";
    Archetype["Blackguard"] = "Blackguard";
    Archetype["ForestStalker"] = "ForestStalker";
    Archetype["WintersShadow"] = "WintersShadow";
    Archetype["FireMage"] = "FireMage";
    Archetype["Any"] = "Any";
})(Archetype = exports.Archetype || (exports.Archetype = {}));
/** World.TraitCategory */
var TraitCategory;
(function (TraitCategory) {
    TraitCategory["General"] = "General";
    TraitCategory["Faction"] = "Faction";
    TraitCategory["Race"] = "Race";
    TraitCategory["Class"] = "Class";
})(TraitCategory = exports.TraitCategory || (exports.TraitCategory = {}));
/** World.SkillTracks */
var SkillTracks;
(function (SkillTracks) {
    SkillTracks["None"] = "None";
    SkillTracks["PrimaryWeapon"] = "PrimaryWeapon";
    SkillTracks["SecondaryWeapon"] = "SecondaryWeapon";
    SkillTracks["BothWeapons"] = "BothWeapons";
    SkillTracks["Voice"] = "Voice";
    SkillTracks["Mind"] = "Mind";
    SkillTracks["All"] = "All";
    SkillTracks["ErrorFlag"] = "ErrorFlag";
    SkillTracks["EitherWeaponPreferPrimary"] = "EitherWeaponPreferPrimary";
    SkillTracks["EitherWeaponPreferSecondary"] = "EitherWeaponPreferSecondary";
    SkillTracks["ChoiceFlags"] = "ChoiceFlags";
})(SkillTracks = exports.SkillTracks || (exports.SkillTracks = {}));
/** CU.Databases.Models.Progression.Logs.ScenarioResolution */
var ScenarioResolution;
(function (ScenarioResolution) {
    ScenarioResolution["Started"] = "Started";
    ScenarioResolution["Finished"] = "Finished";
    ScenarioResolution["Restarted"] = "Restarted";
    ScenarioResolution["Killed"] = "Killed";
})(ScenarioResolution = exports.ScenarioResolution || (exports.ScenarioResolution = {}));
/** CU.Databases.Models.Progression.Events.ScenarioOutcome */
var ScenarioOutcome;
(function (ScenarioOutcome) {
    ScenarioOutcome["Invalid"] = "Invalid";
    ScenarioOutcome["Win"] = "Win";
    ScenarioOutcome["Lose"] = "Lose";
    ScenarioOutcome["Draw"] = "Draw";
    ScenarioOutcome["Killed"] = "Killed";
    ScenarioOutcome["Restart"] = "Restart";
})(ScenarioOutcome = exports.ScenarioOutcome || (exports.ScenarioOutcome = {}));
/** CU.Databases.Models.Progression.ProgressionCharacterType */
var ProgressionCharacterType;
(function (ProgressionCharacterType) {
    ProgressionCharacterType["Unknown"] = "Unknown";
    ProgressionCharacterType["PlayerCharacter"] = "PlayerCharacter";
    ProgressionCharacterType["NonPlayerCharacter"] = "NonPlayerCharacter";
    ProgressionCharacterType["Dummy"] = "Dummy";
})(ProgressionCharacterType = exports.ProgressionCharacterType || (exports.ProgressionCharacterType = {}));
/** World.ItemPlacementType */
var ItemPlacementType;
(function (ItemPlacementType) {
    ItemPlacementType["None"] = "None";
    ItemPlacementType["Door"] = "Door";
    ItemPlacementType["Plot"] = "Plot";
})(ItemPlacementType = exports.ItemPlacementType || (exports.ItemPlacementType = {}));
/** CU.ZoneType */
var ZoneType;
(function (ZoneType) {
    ZoneType["None"] = "None";
    ZoneType["Home"] = "Home";
    ZoneType["Builder"] = "Builder";
    ZoneType["Contested"] = "Contested";
})(ZoneType = exports.ZoneType || (exports.ZoneType = {}));
/** armor stat calculation types are used when computing how much of an effect a piece of equipped armor has on a per GearSlot basis. */
var ArmorStatCalculationType;
(function (ArmorStatCalculationType) {
    ArmorStatCalculationType["None"] = "None";
    ArmorStatCalculationType["Average"] = "Average";
    ArmorStatCalculationType["Add"] = "Add";
})(ArmorStatCalculationType = exports.ArmorStatCalculationType || (exports.ArmorStatCalculationType = {}));
/** World.GearLayerType */
var GearLayerType;
(function (GearLayerType) {
    GearLayerType["Unknown"] = "Unknown";
    GearLayerType["Weapon"] = "Weapon";
    GearLayerType["Armor"] = "Armor";
})(GearLayerType = exports.GearLayerType || (exports.GearLayerType = {}));
/** CU.Skills.SubpartId */
var SubpartId;
(function (SubpartId) {
    SubpartId["None"] = "None";
    SubpartId["_BODY_PART_COUNT"] = "_BODY_PART_COUNT";
    SubpartId["Any"] = "Any";
    SubpartId["_BUILDING_VAL"] = "_BUILDING_VAL";
    SubpartId["_BODY_VAL"] = "_BODY_VAL";
    SubpartId["_BODY_BEGIN"] = "_BODY_BEGIN";
    SubpartId["Head"] = "Head";
    SubpartId["LeftArm"] = "LeftArm";
    SubpartId["RightArm"] = "RightArm";
    SubpartId["LeftLeg"] = "LeftLeg";
    SubpartId["RightLeg"] = "RightLeg";
    SubpartId["_BODY_END"] = "_BODY_END";
    SubpartId["_SINGULAR_VAL"] = "_SINGULAR_VAL";
    SubpartId["_TYPE_MASK"] = "_TYPE_MASK";
})(SubpartId = exports.SubpartId || (exports.SubpartId = {}));
/** World.ItemType */
var ItemType;
(function (ItemType) {
    ItemType["Basic"] = "Basic";
    ItemType["Vox"] = "Vox";
    ItemType["Ammo"] = "Ammo";
    ItemType["Armor"] = "Armor";
    ItemType["Weapon"] = "Weapon";
    ItemType["Block"] = "Block";
    ItemType["Alloy"] = "Alloy";
    ItemType["Substance"] = "Substance";
    ItemType["SiegeEngine"] = "SiegeEngine";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
/** CU.SubItemSlot */
var SubItemSlot;
(function (SubItemSlot) {
    SubItemSlot["Invalid"] = "Invalid";
    SubItemSlot["PrimaryIngredient"] = "PrimaryIngredient";
    SubItemSlot["SecondaryIngredient1"] = "SecondaryIngredient1";
    SubItemSlot["SecondaryIngredient2"] = "SecondaryIngredient2";
    SubItemSlot["SecondaryIngredient3"] = "SecondaryIngredient3";
    SubItemSlot["SecondaryIngredient4"] = "SecondaryIngredient4";
    SubItemSlot["Alloy"] = "Alloy";
    SubItemSlot["WeaponBlade"] = "WeaponBlade";
    SubItemSlot["WeaponHandle"] = "WeaponHandle";
    SubItemSlot["NonRecipe"] = "NonRecipe";
})(SubItemSlot = exports.SubItemSlot || (exports.SubItemSlot = {}));
/** World.Items.ItemEquipRequirement+EquipRequirementStatus */
var EquipRequirementStatus;
(function (EquipRequirementStatus) {
    EquipRequirementStatus["Unknown"] = "Unknown";
    EquipRequirementStatus["NoRequirement"] = "NoRequirement";
    EquipRequirementStatus["RequirementMet"] = "RequirementMet";
    EquipRequirementStatus["RequirementNotMet"] = "RequirementNotMet";
    EquipRequirementStatus["NoCharacterContext"] = "NoCharacterContext";
})(EquipRequirementStatus = exports.EquipRequirementStatus || (exports.EquipRequirementStatus = {}));
/** CU.Databases.Models.Permissibles.PermissibleTargetType */
var PermissibleTargetType;
(function (PermissibleTargetType) {
    PermissibleTargetType["Invalid"] = "Invalid";
    PermissibleTargetType["Any"] = "Any";
    PermissibleTargetType["Faction"] = "Faction";
    PermissibleTargetType["Character"] = "Character";
    PermissibleTargetType["ScenarioTeam"] = "ScenarioTeam";
    PermissibleTargetType["Warband"] = "Warband";
    PermissibleTargetType["CharactersWarband"] = "CharactersWarband";
    PermissibleTargetType["CharactersFaction"] = "CharactersFaction";
    PermissibleTargetType["CharactersOrder"] = "CharactersOrder";
    PermissibleTargetType["InNoScenario"] = "InNoScenario";
    PermissibleTargetType["Inverse"] = "Inverse";
    PermissibleTargetType["And"] = "And";
    PermissibleTargetType["ScenarioRole"] = "ScenarioRole";
    PermissibleTargetType["Scenario"] = "Scenario";
    PermissibleTargetType["Account"] = "Account";
})(PermissibleTargetType = exports.PermissibleTargetType || (exports.PermissibleTargetType = {}));
/** CU.Databases.Models.Permissibles.PermissibleSetKeyType */
var PermissibleSetKeyType;
(function (PermissibleSetKeyType) {
    PermissibleSetKeyType["Invalid"] = "Invalid";
    PermissibleSetKeyType["Faction"] = "Faction";
    PermissibleSetKeyType["ScenarioTeam"] = "ScenarioTeam";
    PermissibleSetKeyType["ScenarioRole"] = "ScenarioRole";
})(PermissibleSetKeyType = exports.PermissibleSetKeyType || (exports.PermissibleSetKeyType = {}));
/** World.ItemActionUIReaction */
var ItemActionUIReaction;
(function (ItemActionUIReaction) {
    ItemActionUIReaction["None"] = "None";
    ItemActionUIReaction["CloseInventory"] = "CloseInventory";
    ItemActionUIReaction["PlacementMode"] = "PlacementMode";
    ItemActionUIReaction["OpenMiniMap"] = "OpenMiniMap";
})(ItemActionUIReaction = exports.ItemActionUIReaction || (exports.ItemActionUIReaction = {}));
/** World.BuildingPlotResult+PlotContestedState */
var PlotContestedState;
(function (PlotContestedState) {
    PlotContestedState["Invalid"] = "Invalid";
    PlotContestedState["Contested"] = "Contested";
    PlotContestedState["NonContested"] = "NonContested";
    PlotContestedState["ChangingControl"] = "ChangingControl";
})(PlotContestedState = exports.PlotContestedState || (exports.PlotContestedState = {}));
/** CU.Databases.Models.Progression.Logs.CharacterDaySummaryDBModel+States */
var States;
(function (States) {
    States["Unpublished"] = "Unpublished";
    States["Initial"] = "Initial";
    States["Handled"] = "Handled";
    States["Preserved"] = "Preserved";
})(States = exports.States || (exports.States = {}));
/** World.SecureTradeState */
var SecureTradeState;
(function (SecureTradeState) {
    SecureTradeState["None"] = "None";
    SecureTradeState["Invited"] = "Invited";
    SecureTradeState["ModifyingItems"] = "ModifyingItems";
    SecureTradeState["Locked"] = "Locked";
    SecureTradeState["Confirmed"] = "Confirmed";
})(SecureTradeState = exports.SecureTradeState || (exports.SecureTradeState = {}));
/** ServerLib.GraphQL.Models.AlertCategory */
var AlertCategory;
(function (AlertCategory) {
    AlertCategory["None"] = "None";
    AlertCategory["Trade"] = "Trade";
    AlertCategory["Group"] = "Group";
    AlertCategory["Progression"] = "Progression";
})(AlertCategory = exports.AlertCategory || (exports.AlertCategory = {}));
/** CU.StatType */
var StatType;
(function (StatType) {
    StatType["None"] = "None";
    StatType["Primary"] = "Primary";
    StatType["Secondary"] = "Secondary";
    StatType["Derived"] = "Derived";
    StatType["Hidden"] = "Hidden";
})(StatType = exports.StatType || (exports.StatType = {}));
/** ServerLib.Game.MapPointActionType */
var MapPointActionType;
(function (MapPointActionType) {
    MapPointActionType["ClientCommand"] = "ClientCommand";
})(MapPointActionType = exports.MapPointActionType || (exports.MapPointActionType = {}));
/** World.VoxState */
var VoxState;
(function (VoxState) {
    VoxState["NotFound"] = "NotFound";
    VoxState["NotOwnedByPlayer"] = "NotOwnedByPlayer";
    VoxState["Found"] = "Found";
})(VoxState = exports.VoxState || (exports.VoxState = {}));
/** CU.Databases.Models.Items.VoxJobType */
var VoxJobType;
(function (VoxJobType) {
    VoxJobType["Invalid"] = "Invalid";
    VoxJobType["Block"] = "Block";
    VoxJobType["Grind"] = "Grind";
    VoxJobType["Make"] = "Make";
    VoxJobType["Purify"] = "Purify";
    VoxJobType["Repair"] = "Repair";
    VoxJobType["Salvage"] = "Salvage";
    VoxJobType["Shape"] = "Shape";
})(VoxJobType = exports.VoxJobType || (exports.VoxJobType = {}));
/** CU.Databases.Models.Items.VoxJobState */
var VoxJobState;
(function (VoxJobState) {
    VoxJobState["None"] = "None";
    VoxJobState["Configuring"] = "Configuring";
    VoxJobState["Running"] = "Running";
    VoxJobState["Finished"] = "Finished";
})(VoxJobState = exports.VoxJobState || (exports.VoxJobState = {}));
/** CU.Databases.Models.PatchPermissions */
var PatchPermissions;
(function (PatchPermissions) {
    PatchPermissions["Public"] = "Public";
    PatchPermissions["AllBackers"] = "AllBackers";
    PatchPermissions["InternalTest"] = "InternalTest";
    PatchPermissions["Development"] = "Development";
    PatchPermissions["Alpha"] = "Alpha";
    PatchPermissions["Beta1"] = "Beta1";
    PatchPermissions["Beta2"] = "Beta2";
    PatchPermissions["Beta3"] = "Beta3";
})(PatchPermissions = exports.PatchPermissions || (exports.PatchPermissions = {}));
/** ServerLib.GraphQL.ServerUpdateType */
var ServerUpdateType;
(function (ServerUpdateType) {
    ServerUpdateType["None"] = "None";
    ServerUpdateType["Updated"] = "Updated";
    ServerUpdateType["UpdatedAll"] = "UpdatedAll";
    ServerUpdateType["UnavailableAll"] = "UnavailableAll";
})(ServerUpdateType = exports.ServerUpdateType || (exports.ServerUpdateType = {}));
/** ServerLib.GraphQL.Models.SecureTradeUpdateCategory */
var SecureTradeUpdateCategory;
(function (SecureTradeUpdateCategory) {
    SecureTradeUpdateCategory["None"] = "None";
    SecureTradeUpdateCategory["Complete"] = "Complete";
    SecureTradeUpdateCategory["StateUpdate"] = "StateUpdate";
    SecureTradeUpdateCategory["ItemUpdate"] = "ItemUpdate";
})(SecureTradeUpdateCategory = exports.SecureTradeUpdateCategory || (exports.SecureTradeUpdateCategory = {}));
/** ServerLib.ApiModels.PatcherCharacterUpdateType */
var PatcherCharacterUpdateType;
(function (PatcherCharacterUpdateType) {
    PatcherCharacterUpdateType["None"] = "None";
    PatcherCharacterUpdateType["Updated"] = "Updated";
    PatcherCharacterUpdateType["Removed"] = "Removed";
})(PatcherCharacterUpdateType = exports.PatcherCharacterUpdateType || (exports.PatcherCharacterUpdateType = {}));
/** CSEUtilsNET.ChannelID */
var ChannelID;
(function (ChannelID) {
    ChannelID["None"] = "None";
})(ChannelID = exports.ChannelID || (exports.ChannelID = {}));
/** World.WeaponType */
var WeaponType;
(function (WeaponType) {
    WeaponType["NONE"] = "NONE";
    WeaponType["Arrow"] = "Arrow";
    WeaponType["Dagger"] = "Dagger";
    WeaponType["Sword"] = "Sword";
    WeaponType["Hammer"] = "Hammer";
    WeaponType["Axe"] = "Axe";
    WeaponType["Mace"] = "Mace";
    WeaponType["GreatSword"] = "GreatSword";
    WeaponType["GreatHammer"] = "GreatHammer";
    WeaponType["GreatAxe"] = "GreatAxe";
    WeaponType["GreatMace"] = "GreatMace";
    WeaponType["Spear"] = "Spear";
    WeaponType["Staff"] = "Staff";
    WeaponType["Polearm"] = "Polearm";
    WeaponType["Shield"] = "Shield";
    WeaponType["LongBow"] = "LongBow";
    WeaponType["ShortBow"] = "ShortBow";
    WeaponType["Throwing"] = "Throwing";
    WeaponType["Focus"] = "Focus";
    WeaponType["LongSword"] = "LongSword";
    WeaponType["All"] = "All";
})(WeaponType = exports.WeaponType || (exports.WeaponType = {}));
/** ServerLib.GraphQL.Models.GroupAlertKind */
var GroupAlertKind;
(function (GroupAlertKind) {
    GroupAlertKind["None"] = "None";
    GroupAlertKind["WarbandInvite"] = "WarbandInvite";
    GroupAlertKind["BattlegroupInvite"] = "BattlegroupInvite";
    GroupAlertKind["OrderInvite"] = "OrderInvite";
    GroupAlertKind["CampaignInvite"] = "CampaignInvite";
})(GroupAlertKind = exports.GroupAlertKind || (exports.GroupAlertKind = {}));
/** ServerLib.GraphQL.Models.TradeAlertKind */
var TradeAlertKind;
(function (TradeAlertKind) {
    TradeAlertKind["None"] = "None";
    TradeAlertKind["NewInvite"] = "NewInvite";
    TradeAlertKind["InviteRevoked"] = "InviteRevoked";
    TradeAlertKind["InviteAccepted"] = "InviteAccepted";
    TradeAlertKind["InviteDeclined"] = "InviteDeclined";
})(TradeAlertKind = exports.TradeAlertKind || (exports.TradeAlertKind = {}));
/** ServerLib.GraphQL.Models.SecureTradeDoneReason */
var SecureTradeDoneReason;
(function (SecureTradeDoneReason) {
    SecureTradeDoneReason["None"] = "None";
    SecureTradeDoneReason["Completed"] = "Completed";
    SecureTradeDoneReason["Canceled"] = "Canceled";
})(SecureTradeDoneReason = exports.SecureTradeDoneReason || (exports.SecureTradeDoneReason = {}));