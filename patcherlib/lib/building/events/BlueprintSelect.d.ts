import { EventEmitter } from '../../events/EventEmitter';
export default class BlueprintSelectListener {
    listening: boolean;
    type: string;
    topic: string;
    start(emitter: EventEmitter): void;
}
