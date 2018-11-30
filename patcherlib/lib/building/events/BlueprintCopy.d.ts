import { EventEmitter } from '../../events/EventEmitter';
export default class BlueprintCopyListener {
    listening: boolean;
    type: string;
    topic: string;
    start(emitter: EventEmitter): void;
}
