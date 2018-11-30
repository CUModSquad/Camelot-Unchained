/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
declare class EventEmitter {
    private events;
    constructor();
    /**
     * addListener() is called to register a listener for a topic.
     *
     * @param topic {string}         Topic name
     * @param once {boolean}         Fire event only once (auto-unregister) [optional]
     * @param callback {function}    Handler to call when topic is fired
     */
    addListener(topic: string, once: boolean, callback: (data: any) => void): any;
    /**
     * on() is called to register a listener for a topic.
     *
     * @param topic {string}         Topic name
     * @param callback {function}    Handler to call when topic is fired
     */
    on(topic: string, callback: (data: any) => void): any;
    /**
     * listenOnce() is called to register a listener for a topic that will
     * fire only once before being auto-removed.
     *
     * @param topic {string}         Topic name
     * @param callback {function}    Handler to call when topic is fired
     */
    listenOnce(topic: string, callback: (data: any) => void): any;
    /**
     * removeListener() is called to deregister an existing listener
     *
     * @param listener {any}   Handle returned by previous call to addListener()
     */
    removeListener(listener: any): void;
    /**
     * emit() is called to pass the supplied data to the registered handlers for the topic
     *
     * @param topic {string}         Topic name
     * @param data {any}  The data being passed (depends on topic)
     */
    emit(topic: string, data?: any): void;
    /**
     * diagnostics() - dump data to console.log
     */
    diagnostics: () => void;
}
export default EventEmitter;
