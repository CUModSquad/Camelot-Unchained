/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Callback } from './GameClientModels/_Updatable';

import { LoadingState } from './GameClientModels/LoadingState';
import { SelfPlayerState } from './GameClientModels/PlayerState';
import { FriendlyTargetState } from './GameClientModels/FriendlyTargetState';
import { EnemyTargetState } from './GameClientModels/EnemyTargetState';

/**
 * Export all models
 */
export {
  Callback,
  LoadingState,
  SelfPlayerState,
  FriendlyTargetState,
  EnemyTargetState,
};

/**
 * GameModel interface defines the structure and functionality of the global game object as presented by the game
 * client.
 *
 * If game is not defined, then the page has not yet been initialized by the game engine or we are not running in the
 * context of the game client.
 *
 * In the case that game is not defined, replacement methods are in place to mock Coherent engine support for functions
 * provided through this global api object.
 */

export interface GameModel {

  /**
   * The Patch resource channel identification number.
   */
  patchResourceChannel: number;

  /**
   * The current access token used to identify the user in requests to CSE services.
   */
  accessToken: string;

  /**
   * The host address for the Web Api server the UI should make requests to.
   */
  webAPIHost: string;

  /**
   * The host address for the specific game server that this client is connected to.
   * *Note:* some API requests will be made directly to the game server itself, those use this address.
   */
  serverHost: string;

  /**
   * Identifying number for the server shard this client is currently logged in to.
   */
  shardID: number;

  /**
   * Unique Network Identifier (I think??)
   * TODO: Should we remove this?
   */
  pktHash: string;

  /**
   * Forces the client to reload the entire UI.
   */
  reloadUI: () => void;

  /**
   * Quit the game!
   */
  quit: () => void;

  /**
   * Forcibly crashes the game client!
   */
  crashTheGame: () => void;

  /**
   * Drops a client-side only point light at the characters current origin position. (At the characters feet)
   * This light exists only as long as the current client session and while they have the zone in which the light
   * was dropped loaded.
   * @param {Number (-10000 - 10000)} brightness How bright the light will be
   * @param {Number (1 - 10000)} radius Radius, in meters, for the spherical dimensions of the point light
   * @param {Number (0 - 255)} red The red byte value of the light's color.
   * @param {Number (0 - 255)} green The green byte value of the light's color.
   * @param {Number (0 - 255)} blue The blue byte value of the light's color.
   */
  dropLight: (brightness: number, radius: number, red: number, green: number, blue: number) => void;

  /**
   * Removes **all** drop lights from the game world.
   */
  resetLights: () => void;

  /**
   * Removes the last drop light added to the game world.
   */
  removeLight: () => void;

  /**
   * Sends a slash command to the game client.
   * @param {String} command the command to send, does not include a preceding slash
   */
  sendSlashCommand: (command: string) => void;

  /* -------------------------------------------------- */
  /* OPTIONS                                            */
  /* -------------------------------------------------- */
  /**
   * Gets all Keybinds from the client
   */
  getKeybinds: () => Keybind[];

  /**
   * Request that the client listen for a key combination to bind a key value to.
   * @param {Number} id Identifier of the Keybinding to be bound
   * @param {Number} index Index of binds to set / replace with the new binding
   * @returns {Binding} The newly bound key information
   */
  bindKey: (id: number, index: number) => Binding;

  /**
   * Request that the client clear a particular key bind
   * @param {Number} id Identifier of the Keybinding to be cleared
   * @param {Number} index Index of bind to clear
   */
  clearKeybind: (id: number, index: number) => void;

  /**
   * Get all options from the client
   */
  getOptions: () => GameOption[];

  /**
   * Batch set of all passed in options
   * @param {GameOption[]} options The options to set
   * @return {Boolean} Whether or not the options all saved correctly
   */
  setOptions: (options: GameOption[]) => Success | Failure & { failures: [GameOption & { reason: string }] };

  /**
   * Test a single option without saving it, this allows preview of changes without saving them immediately
   * When called, this method should change the setting on the client without saving it to file or the server
   * @param {GameOption} option The option to test
   * @return {Boolean} Whether or not the option was valid to test
   */
  testOption: (option: GameOption) => Success | Failure;

  /**
   * Cancels all option tests and revert to the currently saved options
   */
  cancelTests: () => void;

  /**
   * Restores options to their default values based on category
   * @param {OptionCategory} The category of options to reset
   */
  resetOptions: (category: OptionCategory) => void;

  /* -------------------------------------------------- */
  /* ITEM PLACEMENT API                                 */
  /* -------------------------------------------------- */

  /**
   * Action used to begin deployment of a deployable item
   * @param {Number} itemDefID Item Definition ID of the deployable
   * @param {String} itemInstanceID Instance ID of the deployable item
   * @return {Boolean} whether or not placement actually started in the client.
   */
  startItemPlacement: (itemDefID: number, itemInstanceID: string) => boolean;

  /**
   * Commit active placed item with its current position & orientation
   * *IMPORTANT* This item placement is client-side only! The UI must make a move item request with the returned
   * positional data from this call to actually move the item to position on th e game server.
   * @return
   * {
   *   success: true | false - whether or not the commit was successful
   *   position?: {Vec3f} - where the item was placed
   *   rotation?: {Euler3f} - orientation of the placed item
   *   actionID?: {String} - ID used in creating a move request
   * }
   */
  commitItemPlacement: () => Failure | (Success & { position: Vec3f; rotation: Euler3f, actionID: string });

  /**
   * Reset active placed item's position and orientation
   */
  resetItemPlacement: () => void;

  /**
   * Cancel active placed item's placement
   * @return {Boolean} whether or not the placement was cancelled
   */
  cancelItemPlacement: () => boolean;

  /**
   * Drop an item on the ground.
   * **NOTE** this notification is client-side only, UI must also send a move item request to the API server
   * TODO: Make client do the move item request in response automatically
   * @param {String} itemInstanceID Instance ID of the item to drop
   * @return {Boolean} whether the client allowed the player to drop the item
   */
  dropItem: (itemInstanceID: string) => boolean;
}

/**
 * GameInterface is an extension of the GameModel adding additional features to the provided global game object in order
 * to maintain a single primary interface for all interactions with the game client itself.
 */
export interface GameInterface extends GameModel {

  /**
   * Indicates whether the game interface has been initialized.
   */
  ready: boolean;

  /**
   * Indicates whether the game client is attached to the UI.
   */
  isClientAttached: boolean;

  /**
   * Subscribes a function to be executed when the game client interface has been initialized.
   * @param {() => any} callback callback function to be executed when the game client interface is initialized.
   */
  onReady: (callback: () => any) => EventHandle;

  /**
   * Indicates whether to run the ui in debug mode with debug logging enabled.
   */
  debug: boolean;

  /**
   * Version of WebAPI requests to use with this version of the library.
   */
  apiVersion: number;

  /**
   * Subscribes a function to be executed when the game client wishes to begin writing a chat message.
   * (this usually means the user pressed 'Enter' when not focusing the chat interface itself)
   * @param {(message: string) => any} callback callback function to be executed when the game client wished to being
   * chat.
   */
  onBeginChat: (callback: (message: string) => any) => EventHandle;

  /**
   * Subscribes a function to be executed when the game client wishes to print a system message to the system log.
   * @param {(message: string) => any} callback callback function to be executed when the game client sends a system
   * message to the ui.
   */
  onSystemMessage: (callback: (message: string) => any) => EventHandle;

  /**
   * Subscribes a function to be executed when a scenario round ends.
   * @param {((scenarioID: string, roundID: string, didEnd: boolean, didWin: boolean) => any} callback
   * function to be executed when the scenario round ends
   */
  onScenarioRoundEnded: (callback: (scenarioID: string, roundID: string, didEnd: boolean, didWin: boolean) => any)
   => EventHandle;


  /**
   * Subscribe to client combat event messages
   * @param {((events: CombatEvent[]) => any)} callback function to be executed when a combat event is received
   */
  onCombatEvent: (callback: (events: CombatEvent[]) => any) => EventHandle;

  /**
   * Subscribe to console text messages
   * @param {(text: string) => any} callback function to be executed when a console text message is received
   */
  onConsoleText: (callback: (text: string) => any) => EventHandle;

  /**
   * Subscribe to DevUI updates
   * @param {(id: string, rootPage: string) => any} callback function to be executed with a DevUI update
   */
  onUpdateDevUI: (callback: (id: string, rootPage: string) => any) => EventHandle;

  /**
   * Subscribe to Announcements
   * @param {(message: string) => any} callback function to be executed when an announcement is received
   */
  onAnnouncement: (callback: (message: string) => any) => EventHandle;

  /**
   * Client requests UI navigation for a specific target.
   *
   * Expected behavior: UI toggles element requested by the navigation trigger.
   * eg. navigation request is to 'inventory.open', the UI will open the inventory if it is not open.
   *
   * @param {String} target Navigation target
   */
  onNavigate: (callback: (target: string) => any) => EventHandle;

  /* -------------------------------------------------- */
  /* GAME CLIENT MODELS                                 */
  /* -------------------------------------------------- */

  /**
   * Player's current state. Includes health, name, and basic character data
   */
  selfPlayerState: SelfPlayerState;

  /**
   * The state of the player's current enemy target. Includes health, name, and basic character data
   * If undefined the player does not have an enemy target selected.
   */
  enemyTargetState: EnemyTargetState;

  /**
   * The state of the player's current friendly target. Includes health, name, and basic character data
   * If undefined the player does not have a friendly target selected.
   */
  friendlyTargetState: FriendlyTargetState;

  /**
   * The loading state for the client.
   */
  loadingState: LoadingState;

  /* -------------------------------------------------- */
  /* EVENTS                                             */
  /* -------------------------------------------------- */

  /**
   * Subscribes a function to be called when an event with the given name is triggered.
   * @param {String} name The event name
   * @param {Callback} callback The function to be called when the event is triggered.
   * @return {EventHandle} Handle to unsubscribe the callback from the event.
   */
  on: (name: string, callback: Callback) => EventHandle;

  /**
   * Subscribes a function to be called only once when an event with the given name is triggered.
   * @param {String} name The event name
   * @param {Callback} callback The function to be called once when the event is triggered.
   * @return {EventHandle} Handle to unsubscribe the callback from the event.
   */
  once: (name: string, callback: Callback) => EventHandle;

  /**
   * Trigger an event of the given name.
   * @param {String} name The event name
   * @param {...any[]} args The parameters to pass into callbacks subscribed to this event.
   */
  trigger: (name: string, ...args: any[]) => void;

  /**
   * Unsubscribe from an event
   * @param {number | EventHandle} handle Either the EventHandle or ID of an event to unsubscribe
   */
  off: (handle: number | EventHandle) => void;
}