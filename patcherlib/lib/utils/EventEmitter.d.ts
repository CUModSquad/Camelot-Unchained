/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
declare global {
    /**
     * Handle to an event used to unsubscribe the associated callback from an event
     */
    interface EventHandle {
        /**
         * Removes the associated callback from the event queue
         */
        readonly clear: () => void;
        /**
         * Name of the event.
         */
        readonly name: string;
        /**
         * ID of the event.
         */
        readonly id: number;
    }
}
interface Callback {
    (...args: any[]): any;
}
export interface EventEmitter {
    addListener: (name: string, once: boolean, callback: Callback) => EventHandle;
    on: (name: string, callback: Callback) => EventHandle;
    listenOnce: (name: string, callback: Callback) => EventHandle;
    removeListener: (handle: number) => void;
    emit: (name: string, ...params: any[]) => void;
    diagnostics: () => void;
}
export declare function createEventEmitter(): EventEmitter;
export {};
