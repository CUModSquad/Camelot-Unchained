import { EventEmitter } from '../../events/EventEmitter';
export default class BuildingModeListener {
    listening: boolean;
    ktype: string;
    topic: string;
    start(emitter: EventEmitter): void;
}
