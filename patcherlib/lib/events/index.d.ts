/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export declare const buildingEventTopics: {
    handlesBuildingMode: string;
    handlesBlockSelect: string;
    handlesBlocks: string;
    handlesBlueprintSelect: string;
    handlesBlueprintCopy: string;
    handlesBlueprints: string;
};
/**
 * Register a callback for specified topic.
 * @method on
 * @param topic {string}      The topic name of the event
 * @param callback {function} The handler to be called when the event is triggered.
 *                            Passed the event data as the first argument
 * @return {number} an event handler id (used to stop listening for the event)
 */
export declare function on(topic: string, callback: (...params: any[]) => void): number;
/**
 * Register a callback for specified topic, once only.  Automatically unregisters
 * from the event one triggered.
 * @method once
 * @param topic {string}      The topic name of the event
 * @param callback {function} The handler to be called when the event is triggered.
 *                            Passed the event data as the first argument
 * @return {number} an event handler id (used to stop listening for the event)
 */
export declare function once(topic: string, callback: (...params: any[]) => void): number;
/**
 * Register a callback for specified topic, once only.  Automatically unregisters
 * from the event one triggered.
 * @method off
 * @param listener {number} Handle returned from a call to on() once() or addEventListener()
 */
export declare function off(handle: number): void;
/**
 * Trigger an event for a topic, passing the event data (by reference) to any registered
 * handlers.  If passing by reference is an issue, the caller is responsible for cloning.
 * @method fire
 * @param topic {string}  The topic name of the event
 * @param data {any}      Data to be passed to registered handlers
 */
export declare function fire(topic: string, ...params: any[]): void;
export declare function diagnostics(): void;
export declare function addListener(topic: string, callback: (...params: any[]) => void): number;
export declare function removeListener(handle: number): void;
