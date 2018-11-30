import { EventEmitter } from '../../events/EventEmitter';
export default class BlockSelectListener {
    listening: boolean;
    type: string;
    topic: string;
    start(emitter: EventEmitter): void;
}
