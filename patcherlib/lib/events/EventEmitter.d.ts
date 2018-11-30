/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export interface EventEmitter {
    addListener: (topic: string, once: boolean, callback: (...params: any[]) => void) => number;
    on: (topic: string, callback: (...params: any[]) => void) => number;
    listenOnce: (topic: string, callback: (...params: any[]) => void) => number;
    removeListener: (handle: number) => void;
    emit: (topic: string, ...params: any[]) => void;
    diagnostics: () => void;
}
export declare function createEventEmitter(): EventEmitter;
export declare const emitter: EventEmitter;
