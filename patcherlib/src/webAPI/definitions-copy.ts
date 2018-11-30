/* tslint:disable */
/* GENERATED FILE -- DO NOT EDIT */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { request as xhrRequest, RequestResult } from '../utils/request';


  export type RequestConfig = () =>({
    url: string;
    headers?: {[key:string]:string};
  });



  export type ShardID = number;


export interface Euler3f {
  roll: number;
  pitch: number;
  yaw: number;
  x: number;
  y: number;
  z: number;
}


  export type StringID = string;



  export type ID128 = string;



  export interface Vec2f {
    x: number;
    y: number;
  }


  export interface Vec3f {
    x: number;
    y: number;
    z: number;
  }


  export type ItemInstanceID = string;



  export type EntityID = string;



  export type CharacterID = string;



  export type ScenarioTeamID = string;



  export type RoleID = string;



  export type SpawnPointID = string;



  export type ItemStackHash = string;



  export interface ProgressionResult {
    Result: ProgressionResultCode;
    IsSuccess: boolean;
    Details: string;
  }


  export interface QueueStatusMessage {
    status: string;
    numContributors: number;
    maxContributors: number;
    blueprints: QueuedBlueprintMessage[];
  }


  export interface QueuedBlueprintMessage {
    percentComplete: number;
    estTimeRemaining: number;
    subName: string;
    amtNeeded: number;
  }


  export interface ProgressionError {
    ProgressionResult: ProgressionResult;
    Message: string;
    ResultCode: ProgressionResultCode;
    Code: FieldCodes;
  }


  export interface SecureTradeError {
    SecureTradeResult: ModifySecureTradeResult;
    Message: string;
    ResultCode: ModifySecureTradeResultCode;
    Code: FieldCodes;
  }


  export interface ModifyVoxJobError {
    VoxJobResult: ModifyVoxJobResult;
    Message: string;
    VoxJobCode: ModifyVoxJobResultCode;
    Code: FieldCodes;
  }


  export interface MoveItemError {
    MoveItemResult: MoveItemResult;
    Message: string;
    MoveItemCode: MoveItemResultCode;
    Code: FieldCodes;
  }


  export interface ItemActionError {
    ItemActionResult: ItemActionResult;
    Message: string;
    ItemActionCode: ItemActionResultCode;
    Code: FieldCodes;
  }


  export interface ModifyItemError {
    ModifyItemResult: ModifyItemResult;
    Message: string;
    ReanameItemCode: ModifyItemResultCode;
    Code: FieldCodes;
  }


  export interface ModifyPlotError {
    ModifyPlotResult: ModifyPlotResult;
    Message: string;
    MoveItemCode: ModifyPlotResultCode;
    Code: FieldCodes;
  }


  export interface GroupActionError {
    Actions: IActionError[];
    Code: FieldCodes;
    Message: string;
  }


  export interface PermissibleGrantTargetConfig {
    TargetType: PermissibleTargetType;
    CharacterName: string;
    CharacterID: CharacterID;
    CharacterFaction: Faction;
  }


  export interface ItemActionParameters {
    WorldPosition: Vec3F;
    Rotation: Euler3f;
  }


  export interface ItemActionResult {
    Code: ItemActionResultCode;
    Message: string;
  }


  export interface ModifyItemResult {
    Code: ModifyItemResultCode;
    Message: string;
  }


  export interface ModifySecureTradeResult {
    Result: ModifySecureTradeResultCode;
    IsSuccess: boolean;
    Details: string;
    SecureTradeID: SecureTradeInstanceID;
    ItemsInTradeJson: string;
    TradeCompleted: boolean;
    MovedItemIDs: ItemInstanceID[];
  }


  export interface MoveItemRequest {
    MoveItemID: ItemInstanceID;
    StackHash: ItemStackHash;
    UnitCount: number;
    To: MoveItemRequestLocation;
    From: MoveItemRequestLocation;
  }


  export interface MoveItemRequestLocation {
    CharacterID: CharacterID;
    EntityID: EntityID;
    Position: number;
    ContainerID: ItemInstanceID;
    DrawerID: string;
    GearSlotIDs: string[];
    VoxSlot: SubItemSlot;
    BuildingID: BuildingPlotInstanceID;
    WorldPosition: Vec3F;
    Rotation: Euler3f;
    Location: MoveItemRequestLocationType;
  }


  export interface MoveItemResult {
    MovedItemIDs: ItemInstanceID[];
    CreatedEntityID: EntityID;
    Code: MoveItemResultCode;
    Message: string;
  }


  export interface ModifyVoxJobResult {
    Result: ModifyVoxJobResultCode;
    IsSuccess: boolean;
    Details: string;
    MovedItemID: ItemInstanceID;
    DiscoveredRecipeIDs: string[];
  }


  export interface IGroupInvite {
    Code: InviteCode;
    Shard: ShardID;
    Status: InviteStatus;
    TargetsID128: TargetID;
    ForGroup: GroupID;
    ForGroupType: GroupTypes;
    Created: string;
    MaxUses: number;
    Uses: number;
    DurationTicks: number;
  }


  export type InviteCode = string;



  export type TargetID = string;



  export type GroupID = string;



  export interface IActionError {
    Code: ActionErrorCode;
    Message: string;
  }


  export type ResourceNodeInstanceID = string;



  export type ResourceNodeSpawnerInstanceID = string;



  export type ContainerDrawerID = string;



  export interface MessageOfTheDay {
    Title: string;
    HTMLContent: string;
    JSONContent: string;
    Duration: number;
    Channels: ChannelID[];
    ChannelsAsLongs: number[];
    ID: string;
    UtcDisplayStart: string;
    UtcDisplayEnd: string;
    UtcCreated: string;
  }


  export interface PatchNote {
    Channels: ChannelID[];
    ChannelsAsLongs: number[];
    HTMLContent: string;
    JSONContent: string;
    Title: string;
    PatchNumber: string;
    ID: string;
    UtcDisplayStart: string;
    UtcDisplayEnd: string;
    UtcCreated: string;
  }


  export interface BaseContentModel {
    ID: string;
    UtcDisplayStart: string;
    UtcDisplayEnd: string;
    UtcCreated: string;
  }


  export interface PatcherAlert {
    Message: string;
    ID: string;
    UtcDisplayStart: string;
    UtcDisplayEnd: string;
    UtcCreated: string;
  }


  export interface PatcherHero {
    HTMLContent: string;
    Priority: number;
    ID: string;
    UtcDisplayStart: string;
    UtcDisplayEnd: string;
    UtcCreated: string;
  }


  export type SecureTradeInstanceID = string;



  export type BuildingCellDataInstanceID = string;



  export type BuildingPlotInstanceID = string;



  export interface ModifyPlotResult {
    Code: ModifyPlotResultCode;
    Message: string;
    QueueStatus: QueueStatusMessage;
  }


  export interface IAuthActionError {
    Code: AuthActionErrorCode;
    Message: string;
  }


  export interface AuthActionErrorFieldCode {
    Action: IAuthActionError;
    Code: FieldCodes;
    Message: string;
  }


  export type APIClientID = string;



  export type APISecret = string;



  export type JWTKey = string;



  export type StatusID = string;



  export type AbilityComponentID = string;



  export type AbilityID = string;



  export interface ArchetypeInfo {
    description: string;
    faction: Faction;
    id: Archetype;
    name: string;
  }


  export interface Channel {
    ID: number;
    Name: string;
    Description: string;
    Permissions: PatchPermissions;
  }


  export interface SimpleCharacter {
    archetype: Archetype;
    faction: Faction;
    gender: Gender;
    id: CharacterID;
    lastLogin: string;
    name: string;
    race: Race;
    shardID: ShardID;
  }


  export interface Character {
    archetype: Archetype;
    attributes: { [key: string]: number; };
    traitIDs: string[];
    faction: Faction;
    gender: Gender;
    id: string;
    lastLogin: string;
    name: string;
    race: Race;
    shardID: number;
  }


  export interface ControlGameState {
    arthurianScore: number;
    controlPoints: ControlPoint[];
    gameState: number;
    timeLeft: number;
    tuathaDeDanannScore: number;
    vikingScore: number;
  }


  export interface ControlPoint {
    faction: string;
    id: string;
    size: string;
    x: number;
    y: number;
  }


  export interface FactionInfo {
    description: string;
    id: number;
    name: string;
    shortName: string;
  }


  export interface PatcherAlert {
    id: string;
    message: string;
    utcDateEnd: string;
    utcDateStart: string;
  }


  export interface PatcherHeroContent {
    content: string;
    id: string;
    priority: number;
    utcDateEnd: string;
    utcDateStart: string;
  }


  export interface PlayerAttributeOffset {
    race: Race;
    gender: Gender;
    attributeOffsets: { [key: string]: number; };
  }


  export interface PlayerPresence {
    characterID: CharacterID;
    connectedZoneInstanceIDs: number[];
    activeZoneInstanceID: number;
    desiredZoneInstanceID: number;
  }


  export interface PlayerStatAttribute {
    baseValue: number;
    derivedFrom: string;
    description: string;
    maxOrMultipler: number;
    name: string;
    type: StatType;
    units: string;
  }


  export interface RaceInfo {
    name: string;
    description: string;
    faction: Faction;
    id: Race;
  }


  export interface ServerModel {
    accessLevel: AccessType;
    channelID: number;
    channelPatchPermissions: number;
    host: string;
    name: string;
    playerMaximum: number;
    shardID: number;
    status: ServerStatus;
    apiHost: string;
  }


  export interface ServerPresence {
    address: string;
    zoneResourceID: number;
    zoneInstanceID: number;
    shardID: ShardID;
    zoneBoundsMax: Vec2f;
    zoneBoundsMin: Vec2f;
    restrictToFaction: Faction;
    isStartingZone: boolean;
    isHidden: boolean;
    isMainInstance: boolean;
    isShuttingDown: boolean;
    isFull: boolean;
  }


  export interface ServerState {
    controlGameState: ControlGameState;
    playerCounts: PlayerCounts;
    spawnPoints: SpawnPoint[];
  }


  export interface SpawnPoint {
    id: string;
    faction: Faction;
    position: Vec3f;
  }


  export interface PlayerCounts {
    arthurian: number;
    maxPlayers: number;
    tuatha: number;
    viking: number;
  }


  export interface StartingServer {
    Address: string;
    ZoneInstanceID: number;
  }


  export interface ZoneInfo {
    ID: string;
    Name: string;
    Address: string;
    Bounds: string;
  }


  export interface Trait {
    id: string;
    name: string;
    description: string;
    icon: string;
    points: number;
    prerequisites: string[];
  }


  export interface OptionalAndRequiredTraits {
    required: string[];
    optional: string[];
  }


  export interface ExclusiveTraits {
    ids: string[];
    minRequired: number;
    maxAllowed: number;
  }


  export interface TraitList {
    traits: Trait[];
    factions: { [key: string]: OptionalAndRequiredTraits; };
    races: { [key: string]: OptionalAndRequiredTraits; };
    archetypes: { [key: string]: OptionalAndRequiredTraits; };
    ranks: string[][];
    exclusivity: ExclusiveTraits[];
  }


  export interface WarbandMember {
    additionalPermissions: string[];
    archetype: Archetype;
    avatar: string;
    blood: CurrentMaxValue;
    characterID: string;
    gender: Gender;
    health: CurrentMaxValue[];
    joined: string;
    name: string;
    panic: CurrentMaxValue;
    parted: string;
    race: Race;
    rank: string;
    stamina: CurrentMaxValue;
    temperature: Temperature;
    wounds: number[];
  }


  export interface ApiErrorResponse {
    Code: number;
    Message: string;
    FieldCodes: IFieldCode[];
  }


  export interface BadRequestFieldCode {
    Code: FieldCodes;
    Message: string;
  }


  export interface UnspecifiedRequestError {
    Code: FieldCodes;
    Message: string;
  }


  export interface InvalidModel {
    ModelErrors: ModelError[];
    Code: FieldCodes;
    Message: string;
  }


  export interface ModelError {
    Message: string;
    ParamName: string;
    TypeName: string;
  }


  export interface ExecutionErrorFieldCode {
    Code: FieldCodes;
    Message: string;
  }


  export interface UnspecifiedExecutionError {
    Code: FieldCodes;
    Message: string;
  }


  export interface TimeoutError {
    Code: FieldCodes;
    Message: string;
  }


  export interface UnhandledExecutionException {
    Exception: string;
    Code: FieldCodes;
    Message: string;
  }


  export interface DoesNotExist {
    Code: FieldCodes;
    Message: string;
  }


  export interface UserStateConflict {
    Code: FieldCodes;
    Message: string;
  }


  export interface InsufficientResource {
    Resources: ResourceRequirement[];
    Code: FieldCodes;
    Message: string;
  }


  export interface ResourceRequirement {
    Name: string;
    Required: Object;
    Available: Object;
  }


  export interface IFieldCode {
    Code: FieldCodes;
    Message: string;
  }


  export interface NotAllowedFieldCode {
    Code: FieldCodes;
    Message: string;
  }


  export interface UnspecifiedNotAllowed {
    Code: FieldCodes;
    Message: string;
  }


  export interface RateLimitExceeded {
    Retry: number;
    Code: FieldCodes;
    Message: string;
  }


  export interface InternalAction {
    Code: FieldCodes;
    Message: string;
  }


  export interface ServiceUnavailableFieldCode {
    Code: FieldCodes;
    Message: string;
  }


  export interface UnspecifiedServiceUnavailable {
    Code: FieldCodes;
    Message: string;
  }


  export interface DatabaseUnavailable {
    Code: FieldCodes;
    Message: string;
  }


  export interface GroupServiceUnavailable {
    Code: FieldCodes;
    Message: string;
  }


  export interface GameServiceUnavailable {
    Code: FieldCodes;
    Message: string;
  }


  export interface PresenceServiceUnavailable {
    Code: FieldCodes;
    Message: string;
  }


  export interface UnauthorizedFieldCode {
    Code: FieldCodes;
    Message: string;
  }


  export interface UnspecifiedAuthorizationDenied {
    Code: FieldCodes;
    Message: string;
  }


  export interface APIKeyAuthorizationFailed {
    Code: FieldCodes;
    Message: string;
  }


  export interface LoginTokenAuthorizationFailed {
    Code: FieldCodes;
    Message: string;
  }


  export interface RealmRestricted {
    Code: FieldCodes;
    Message: string;
  }


  export interface Status {
    id: number;
    duration: number;
    startTime: number;
    name: string;
    icon: string;
    description: string;
  }


  export interface Health {
    current: number;
    max: number;
    wounds: number;
  }


  export interface CurrentMax {
    current: number;
    max: number;
  }


  export interface GroupMemberState {
    type: 'player';
    entityID: string;
    characterID: string;
    faction: Faction;
    classID: Archetype;
    name: string;
    isAlive: boolean;
    position: Vec3f;
    statuses: Status[];
    race: Race;
    gender: Gender;
    health: Health[];
    stamina: CurrentMax;
    blood: CurrentMax;
    displayOrder: number;
    warbandID: string;
    isLeader: boolean;
    canInvite: boolean;
    canKick: boolean;
    rankLevel: number;
  }


  export interface LoginSuccess {
    Token: string;
    Code: FieldCodes;
    Message: string;
  }


  export interface LoginFailed {
    Code: FieldCodes;
    Message: string;
  }


  export interface LoginThrottled {
    Code: FieldCodes;
    Message: string;
  }

export enum AccessType {
  Public = 0,
  Beta3 = 1,
  Beta2 = 2,
  Beta1 = 3,
  Alpha = 4,
  InternalTest = 5,
  Employees = 6,
}



  export type ChannelID = number;

export enum StatType {
  None = 0,
  Primary = 1,
  Secondary = 2,
  Derived = 3,
  Hidden = 4,
}

export enum SubItemSlot {
  Invalid = 0,
  PrimaryIngredient = 1,
  SecondaryIngredient1 = 2,
  SecondaryIngredient2 = 3,
  SecondaryIngredient3 = 4,
  SecondaryIngredient4 = 5,
  Alloy = 6,
  WeaponBlade = 7,
  WeaponHandle = 8,
  NonRecipe = 9,
}

export enum Archetype {
  BlackKnight = 8,
  Fianna = 9,
  Mjolnir = 10,
  Physician = 11,
  Empath = 12,
  Stonehealer = 13,
  Blackguard = 14,
  ForestStalker = 15,
  WintersShadow = 16,
}

export enum Faction {
  Factionless = 0,
  TDD = 1,
  Viking = 2,
  Arthurian = 3,
  COUNT = 4,
}

export enum Gender {
  None = 0,
  Male = 1,
  Female = 2,
}

export enum Race {
  Luchorpan = 2,
  Valkyrie = 4,
  HumanMaleV = 15,
  HumanMaleA = 16,
  HumanMaleT = 17,
  Pict = 18,
}

export enum ZoneType {
  None = 0,
  Home = 1,
  Builder = 2,
  Contested = 3,
}

export enum ProgressionResultCode {
  Success = 0,
  InProgress = 1,
  PlayerNotFound = 2,
  DailyLogNotFound = 3,
  DBError = 4,
  DailyLogNotPublished = 5,
  NotNextDayLog = 6,
  InItemLoadoutScenario = 7,
  InvalidRequest = -1,
}



  export type SkillID = number;

export enum ItemActionResultCode {
  Invalid = 0,
  Success = 1,
  UnknownError = 2,
  PermissionDenied = 3,
  ErrorNotFound = 4,
  OutOfRange = 5,
  ActionNotFound = 6,
  OnCooldown = 7,
  PositionNotFound = 8,
  LimitReached = 9,
  InvalidPosition = 10,
  FeatureNotEnabled = 11,
}

export enum ModifyItemResultCode {
  Invalid = 0,
  Success = 1,
  NotSupported = 2,
  InvalidName = 3,
  PermissionDenied = 4,
  EntityNotFound = 5,
  ItemNotFound = 6,
  IncompatiblePermissions = 7,
  UnknownError = 8,
}

export enum ModifySecureTradeResultCode {
  Success = 0,
  NoTrade = 1,
  IncorrectState = 2,
  ItemNotFound = 3,
  InventoryNotFound = 4,
  DuplicateItemInRequest = 5,
  NoPendingInvite = 6,
  MissingFaction = 7,
  FactionMismatch = 8,
  TradeSourceNotAlive = 9,
  TradeTargetNotAlive = 10,
  NoEntityPosition = 11,
  TooFarAway = 12,
  EntityMismatch = 13,
  CanceledEntityMissing = 14,
  DBError = 15,
  NotLoggedIn = 16,
  EntityToTradeWithNotFound = 17,
  CannotTradeWithSelf = 18,
  MoveItemError = 19,
  EntityCannotTrade = 20,
  LockTimeNotPassed = 21,
  UnknownError = 22,
  InvalidRequest = -1,
}


export enum MoveItemRequestLocationType {
  Invalid = 0,
  Container = 1,
  Equipment = 2,
  Ground = 3,
  Inventory = 4,
  Vox = 5,
  Trash = 6,
  BuildingPlaced = 7,
}

export enum MoveItemResultCode {
  Success = 0,
  None = 1,
  Timeout = 2,
  PlayerNotFound = 3,
  EntityNotFound = 4,
  ItemNotFound = 5,
  ItemNotValid = 6,
  MixedError = 7,
  TooManyItems = 8,
  InventoryNotFound = 9,
  EquipmentNotFound = 10,
  DefinitionNotFound = 11,
  SecureTradeNotFound = 12,
  InvalidParameter = 13,
  SpatialNotFound = 14,
  ItemFeatureTurnedOff = 15,
  BrokenItem = 16,
  ItemRequirementNotMet = 17,
  ItemStatRequirementNotMet = 18,
  EntityNotValid = 19,
  MultiItemMoveNotSupported = 20,
  ItemsDoNotStack = 21,
  TooFarAway = 22,
  PermissionDenied = 23,
  ItemInversion = 24,
  InvalidVoxSlot = 25,
  ItemCannotBeTraded = 26,
  RestrictedToScenario = 27,
  CannotRemoveFromRunningScenario = 28,
  TrashingItemNotAllowed = 29,
  OutOfRange = 30,
  UnknownError = 31,
}

export enum ModifyVoxJobResultCode {
  Success = 0,
  JobAlreadyExists = 1,
  InvalidJob = 2,
  NoCurrentJob = 3,
  ItemsInVox = 4,
  IncorrectJobState = 5,
  DBError = 6,
  NotSupported = 7,
  InvalidRecipe = 8,
  TooManyIngredients = 9,
  NotEnoughIngredients = 10,
  IncorrectIngredient = 11,
  InvalidIngredient = 12,
  InvalidQuality = 13,
  InventoryFull = 14,
  NoRepairPoints = 15,
  InvalidUnitCount = 16,
  ParameterError = 17,
  VoxNotFound = 18,
  RecipeAlreadyDiscovered = 19,
  RecipeNotSet = 20,
  ItemSlotNotSupported = 21,
  IngredientsExist = 22,
  VoxBroken = 23,
  IngredientBroken = 24,
  PlayerNotFound = 25,
  MoveItemError = 26,
  InvalidItemName = 27,
  UnknownError = 28,
  InvalidRequest = -1,
}

export enum InviteStatus {
  Active = 0,
  Revoked = 1,
  UsageLimitReached = 2,
  Expired = 3,
}

export enum GroupTypes {
  Warband = 0,
  Battlegroup = 1,
  Order = 2,
  Campaign = 3,
}


export enum ActionErrorCode {
  UnspecifiedError = 0,
  ServerException = 1,
  TokenAuthorizationFailed = 2,
  NoActionRequired = 3,
  GeneralDatabaseError = 4,
  PermissionDenied = 5,
  CharacterNotFound = 6,
  GroupNotFound = 7,
  WrongGroupType = 8,
  WrongFaction = 9,
  NameLength = 10,
  NameContainsInvalidCharacters = 11,
  NameContainsNaughtyWords = 12,
  NameContainsReservedWords = 13,
  NameAlreadyInUse = 14,
  ActiveWarbandAlreadyExists = 15,
  AlreadyAnOrderMember = 16,
  MemberLimitReached = 17,
  InviteCodeNotFound = 18,
  InviteRequirementsNotMet = 19,
  InviteExpired = 20,
  InviteRevoked = 21,
  InviteUsageLimitReached = 22,
  RankLimitReached = 23,
  InvalidRankLevel = 24,
}


export enum PatchPermissions {
  Public = 0,
  AllBackers = 1,
  InternalTest = 2,
  Development = 4,
  Alpha = 8,
  Beta1 = 16,
  Beta2 = 32,
  Beta3 = 64,
}


export enum ResourceNodePermissions {
  None = 0,
  Take = 1,
  AutoDiscovered = 2,
  All = -1,
}


export enum PermissibleSetKeyType {
  Invalid = 0,
  Faction = 1,
  ScenarioTeam = 2,
  ScenarioRole = 3,
}


export enum PermissibleTargetType {
  Invalid = 0,
  Any = 1,
  Faction = 2,
  Character = 3,
  ScenarioTeam = 4,
  Warband = 5,
  CharactersWarband = 6,
  CharactersFaction = 7,
  CharactersOrder = 8,
  InNoScenario = 9,
  Inverse = 10,
  And = 11,
  ScenarioRole = 12,
  Scenario = 13,
  Account = 14,
}



export enum VoxJobType {
  Invalid = 0,
  Block = 1,
  Grind = 2,
  Make = 3,
  Purify = 4,
  Repair = 5,
  Salvage = 6,
  Shape = 7,
}



export enum ItemPermissions {
  None = 0,
  Trade = 1,
  Trash = 2,
  CraftWithVox = 4,
  Control = 8,
  AddContents = 16,
  RemoveContents = 32,
  ViewContents = 64,
  ModifyDisplay = 128,
  Ground = 256,
  Inventory = 512,
  Equipment = 1024,
  Container = 2048,
  Vox = 4096,
  All = -1,
}

export enum ModifyPlotResultCode {
  Success = 0,
  PlotNotFound = 1,
  CharacterNotFound = 2,
  InvalidParameter = 3,
  NoMatchingPermissionSetFound = 4,
  PermissionDenied = 5,
  CharacterNotOnPlot = 6,
  PlotNotCompatibleWithScenario = 7,
  PlotNotCompatibleWithFaction = 8,
  ScenarioNotFound = 9,
  TeamNotForScenario = 10,
  DatabaseError = 11,
  NotSupported = 12,
  FeatureDisabled = 13,
  UnknownError = 14,
  MaxPlotsOwned = 15,
}

export enum PlotPermissions {
  None = 0,
  ModifyPlannedBuilding = 1,
  RemoveDroppedBlocks = 2,
  Owned = 4,
  UseSpawnPoint = 8,
  AddItems = 16,
  RemoveItems = 32,
  NoPlayerOwnerPermissions = -5,
  All = -1,
}

export enum AuthActionErrorCode {
  Unknown = 0,
  NoActionRequired = 1,
  Unauthorized = 2,
  InvalidToken = 3,
  CharacterNotFound = 4,
  PermissionExpired = 5,
  RenewalTimerExpired = 6,
  TokenGenerationFailed = 7,
  TokenAccessRevoked = 8,
  InvalidEmailOrPassword = 9,
  RequirePrivacyPolicyAcceptance = 10,
  Throttled = 11,
  NoScreenName = 12,
}

export enum APIPermissions {
  None = 0,
  EquipmentRead = 1,
  InventoryRead = 2,
  StatsAndTraitsRead = 3,
  LiveStatusRead = 4,
  ProgressionRead = 5,
  FriendsRead = 6,
  EnemiesRead = 7,
  ActiveWarbandRead = 8,
  BattlegroupRead = 9,
  WarbandsRead = 10,
  OrderRead = 11,
  CampaignsRead = 12,
  LiveWarbandRead = 13,
  LiveBattlegroupRead = 14,
  VoxInventoryRead = 15,
  VoxJobsRead = 16,
  InvitesRead = 17,
  PlotRead = 30,
  PlotQueueRead = 31,
  CreateCharacters = 1000,
  DeleteCharacters = 1001,
  ManageEquipment = 1002,
  ManageInventory = 1003,
  ManageContainers = 1004,
  AcceptInvites = 2000,
  ManageOrder = 2003,
  ManageWarbands = 2003,
  ManageBattlegroups = 2004,
  VoxDeposit = 3000,
  VoxWithdraw = 3001,
  ManageVoxJobs = 3002,
  ManagePlot = 4000,
  Game = 9001,
  Chat = 9002,
  CSE = 2147483646,
  All = 2147483647,
}

export enum SpawnPointPermissions {
  None = 0,
  Spawn = 1,
  All = -1,
}

export enum ItemPlacementType {
  None = 0,
  Door = 1,
  Plot = 2,
}

export enum ServerStatus {
  Offline = 0,
  Starting = 1,
  Online = 2,
}

export enum FieldCodes {
  BasicSuccess = 0,
  GroupActionSuccess = 1,
  ModifyVoxJobSuccess = 2,
  MoveItemSuccess = 3,
  ProgressionSuccess = 4,
  ModifySecureTradeSuccess = 5,
  ModifyPlotSuccess = 6,
  ModifyItemSuccess = 7,
  LoginSuccess = 8,
  ItemActionSuccess = 9,
  AuthActionSuccess = 10,
  UnspecifiedAuthorizationDenied = 1000,
  AuthorizationFailed = 1001,
  LoginTokenAuthorizationFailed = 1002,
  RealmRestricted = 1003,
  LoginFailed = 1004,
  LoginThrottled = 1005,
  UnspecifiedNotAllowed = 2000,
  RateLimitExceeded = 2001,
  InternalAction = 2002,
  UnspecifiedRequestError = 3000,
  UnspecifiedExecutionError = 4000,
  UnhandledExecutionException = 4001,
  DoesNotExist = 4002,
  UserStateConflict = 4003,
  InsufficientResource = 4004,
  VoxJobError = 4005,
  MoveItemError = 4006,
  SecureTradeError = 4007,
  ProgressionError = 4008,
  GroupActionError = 4009,
  TimeoutError = 4010,
  ModifyItemError = 4011,
  ItemActionError = 4012,
  AuthActionError = 4013,
  UnspecifiedServiceUnavailable = 5000,
  DatabaseUnavailable = 5001,
  GroupServiceUnavailable = 5002,
  GameServiceUnavailable = 5003,
  PresenceServiceUnavailable = 5004,
  InvalidModel = 30001,
}


export const CharactersAPI = {
  CreateCharacterV2: function(config: RequestConfig, shardID: Partial<ShardID>, character: Partial<Character>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/characters/create', {
      shardID: shardID,
    }, character, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  DeleteCharacterV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/characters/delete', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const ContentAPI = {
  MessageOfTheDayV1: function(config: RequestConfig, channel: Partial<ChannelID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/messageoftheday', {
      channel: channel,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  PatcherHeroContentV1: function(config: RequestConfig, ): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/patcherherocontent', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  PatcherAlertsV1: function(config: RequestConfig, ): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/patcheralerts', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const CraftingAPI = {
  SetVoxJob: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, job: Partial<VoxJobType>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/setvoxjob', {
      shardID: shardID,
      characterID: characterID,
      job: job,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  ClearVoxJob: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/clearvoxjob', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  SetRecipeID: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, recipeID: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/setvoxrecipeid', {
      shardID: shardID,
      characterID: characterID,
      recipeID: recipeID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  SetQuality: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, quality: Partial<number>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/setvoxquality', {
      shardID: shardID,
      characterID: characterID,
      quality: quality,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  SetCustomItemName: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, itemName: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/setvoxcustomitemname', {
      shardID: shardID,
      characterID: characterID,
      itemName: itemName,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  AddIngredient: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, itemInstanceID: Partial<ItemInstanceID>, unitCount: Partial<number>, slot: Partial<SubItemSlot>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/addvoxingredient', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      unitCount: unitCount,
      slot: slot,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  RemoveVoxIngredient: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, itemInstanceID: Partial<ItemInstanceID>, unitCount: Partial<number>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/removevoxingredient', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      unitCount: unitCount,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  StartVoxJob: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/startvoxjob', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  CollectFinishedVoxJob: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/collectfinishedvoxjob', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  CancelVoxJob: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/cancelvoxjob', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  SetVoxItemCount: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, count: Partial<number>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/crafting/setvoxitemcount', {
      shardID: shardID,
      characterID: characterID,
      count: count,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const GameDataAPI = {
  GetFactionInfoV1: function(config: RequestConfig, ): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/gamedata/factionInfo', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetFactionsV1: function(config: RequestConfig, ): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/gamedata/factions', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetAttributeInfoV1: function(config: RequestConfig, shard: Partial<ShardID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/gamedata/attributeInfo', {
      shard: shard,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetArchetypesV1: function(config: RequestConfig, ): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/gamedata/archetypes', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetRacesV1: function(config: RequestConfig, ): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/gamedata/races', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetAttributeOffsetsV1: function(config: RequestConfig, shard: Partial<ShardID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/gamedata/attributeOffsets', {
      shard: shard,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetOrderPermissionsV1: function(config: RequestConfig, ): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/gamedata/orderPermissions', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const GroupsAPI = {
  CreateWarbandV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/createWarband', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  CreateBattlegroupV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/createBattlegroup', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  CreateOrderV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, name: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/createOrder', {
      shardID: shardID,
      characterID: characterID,
      name: name,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  KickV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID>, targetEntityID: Partial<EntityID | null>, targetCharacterID: Partial<CharacterID | null>, targetName: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/kick', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      targetEntityID: targetEntityID,
      targetCharacterID: targetCharacterID,
      targetName: targetName,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  MakeLeaderV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID>, targetEntityID: Partial<EntityID | null>, targetCharacterID: Partial<CharacterID | null>, targetName: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/makeleader', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      targetEntityID: targetEntityID,
      targetCharacterID: targetCharacterID,
      targetName: targetName,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GrantPermissionV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID>, permissionToGrant: Partial<string>, targetEntityID: Partial<EntityID | null>, targetCharacterID: Partial<CharacterID | null>, targetName: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/grantpermission', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      permissionToGrant: permissionToGrant,
      targetEntityID: targetEntityID,
      targetCharacterID: targetCharacterID,
      targetName: targetName,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GrantInvitePermissionV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID>, targetEntityID: Partial<EntityID | null>, targetCharacterID: Partial<CharacterID | null>, targetName: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/grantinvitepermission', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      targetEntityID: targetEntityID,
      targetCharacterID: targetCharacterID,
      targetName: targetName,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  RevokePermissionV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID>, permissionToRevoke: Partial<string>, targetEntityID: Partial<EntityID | null>, targetCharacterID: Partial<CharacterID | null>, targetName: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/revokepermission', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      permissionToRevoke: permissionToRevoke,
      targetEntityID: targetEntityID,
      targetCharacterID: targetCharacterID,
      targetName: targetName,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  InviteV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID | null>, targetID: Partial<CharacterID | null>, targetName: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/invite', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      targetID: targetID,
      targetName: targetName,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  JoinV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID>, inviteCode: Partial<InviteCode | null>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/join', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      inviteCode: inviteCode,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  QuitV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID | null>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/quit', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  AbandonV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/abandon', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  DisbandV1: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, groupID: Partial<GroupID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/groups/disband', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const ItemAPI = {
  MoveItems: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, request: Partial<MoveItemRequest>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/items/moveitems', {
      shardID: shardID,
      characterID: characterID,
      request: request,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  BatchMoveItems: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, requests: Partial<MoveItemRequest[]>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/items/batchmoveitems', {
      shardID: shardID,
      characterID: characterID,
    }, requests, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  SetContainerColor: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, itemInstanceID: Partial<ItemInstanceID>, itemEntityID: Partial<EntityID>, red: Partial<number>, green: Partial<number>, blue: Partial<number>, alpha: Partial<number>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/items/setcontainercolor', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      itemEntityID: itemEntityID,
      red: red,
      green: green,
      blue: blue,
      alpha: alpha,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  RenameItem: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, itemInstanceID: Partial<ItemInstanceID>, itemEntityID: Partial<EntityID>, newName: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/items/renameitem', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      itemEntityID: itemEntityID,
      newName: newName,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  PerformItemAction: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, itemInstanceID: Partial<ItemInstanceID>, itemEntityID: Partial<EntityID>, actionID: Partial<string>, parameters: Partial<ItemActionParameters>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/items/performitemaction', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      itemEntityID: itemEntityID,
      actionID: actionID,
      parameters: parameters,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const OrdersAPI = {
}

export const PresenceAPI = {
  GetStartingServer: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/presence/startingServer/{shardID}/{characterID}', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetServers: function(config: RequestConfig, shardID: Partial<ShardID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/presence/servers/{shardID}', {
      shardID: shardID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetPlayers: function(config: RequestConfig, shardID: Partial<ShardID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/presence/players/{shardID}', {
      shardID: shardID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const PlotsAPI = {
  ReleasePlot: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, plotInstanceID: Partial<BuildingPlotInstanceID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/plot/releasePlot', {
      shardID: shardID,
      characterID: characterID,
      plotInstanceID: plotInstanceID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GeneratePlotDeed: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, plotInstanceID: Partial<BuildingPlotInstanceID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/plot/generatePlotDeed', {
      shardID: shardID,
      characterID: characterID,
      plotInstanceID: plotInstanceID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  TakeOwnership: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, plotInstanceID: Partial<BuildingPlotInstanceID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/plot/takeOwnership', {
      shardID: shardID,
      characterID: characterID,
      plotInstanceID: plotInstanceID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GrantPermissions: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, plotInstanceID: Partial<BuildingPlotInstanceID>, newPermissions: Partial<PlotPermissions>, target: Partial<PermissibleGrantTargetConfig>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/plot/grantPermissions', {
      shardID: shardID,
      characterID: characterID,
      plotInstanceID: plotInstanceID,
      newPermissions: newPermissions,
      target: target,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  RevokePermissions: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, plotInstanceID: Partial<BuildingPlotInstanceID>, revokePermissions: Partial<PlotPermissions>, target: Partial<PermissibleGrantTargetConfig>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/plot/revokePermissions', {
      shardID: shardID,
      characterID: characterID,
      plotInstanceID: plotInstanceID,
      revokePermissions: revokePermissions,
      target: target,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetQueueStatus: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, plotInstanceID: Partial<BuildingPlotInstanceID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/plot/getQueueStatus', {
      shardID: shardID,
      characterID: characterID,
      plotInstanceID: plotInstanceID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const ProgressionAPI = {
  CollectCharacterDayProgression: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, logID: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/character/collectdayprogression', {
      shardID: shardID,
      characterID: characterID,
      logID: logID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const SecureTradeAPI = {
  Invite: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, tradeTargetID: Partial<EntityID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/invite', {
      shardID: shardID,
      characterID: characterID,
      tradeTargetID: tradeTargetID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  RevokeInvite: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, inviteTargetID: Partial<EntityID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/revokeinvite', {
      shardID: shardID,
      characterID: characterID,
      inviteTargetID: inviteTargetID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  AcceptInvite: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, inviterID: Partial<EntityID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/acceptinvite', {
      shardID: shardID,
      characterID: characterID,
      inviterID: inviterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  RejectInvite: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, inviterID: Partial<EntityID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/rejectinvite', {
      shardID: shardID,
      characterID: characterID,
      inviterID: inviterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  AbortSecureTrade: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/abort', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  Lock: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/lock', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  Unlock: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/unlock', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  AddItem: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, itemInstanceID: Partial<ItemInstanceID>, unitCount: Partial<number>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/additem', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      unitCount: unitCount,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  RemoveItem: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>, itemInstanceID: Partial<ItemInstanceID>, unitCount: Partial<number>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/removeItem', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      unitCount: unitCount,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  Confirm: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/confirm', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  CancelTradeConfirmation: function(config: RequestConfig, shardID: Partial<ShardID>, characterID: Partial<CharacterID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('post', conf.url + 'v1/secureTrade/cancelconfirmation', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const ServersAPI = {
  GetServersV1: function(config: RequestConfig, ): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/servers', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetServersForChannelV1: function(config: RequestConfig, channelId: Partial<ChannelID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/servers/getForChannel', {
      channelId: channelId,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetHostsForServerV1: function(config: RequestConfig, channelId: Partial<ChannelID>, name: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/servers/getHosts', {
      channelId: channelId,
      name: name,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetAvailableZones: function(config: RequestConfig, shard: Partial<ShardID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/availableZones', {
      shard: shard,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

  GetZoneInfo: function(config: RequestConfig, shard: Partial<ShardID>, zoneID: Partial<string>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/getZoneInfo', {
      shard: shard,
      zoneID: zoneID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}

export const TraitsAPI = {
  GetTraitsV1: function(config: RequestConfig, shardID: Partial<ShardID>): Promise<RequestResult> {
    const conf = config();
    return xhrRequest('get', conf.url + 'v1/traits', {
      shardID: shardID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, conf.headers || {}) });
  },

}



  interface CurrentMaxValue {
    current: number;
    maximum: number;
  }
  
  interface Temperature {
    current: number;
    freezingThreshold: number;
    burndingThreshold: number;
  }
  
  export type Vec2F = Vec2f;
  export type Vec3F = Vec3f;

