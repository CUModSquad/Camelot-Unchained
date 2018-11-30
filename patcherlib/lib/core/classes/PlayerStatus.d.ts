import { Race, Gender, Archetype } from '../..';
export interface PlayerStatus {
    name: string;
    avatar: string;
    race: Race;
    gender: Gender;
    archetype: Archetype;
    characterID: string;
    health: {
        current: number;
        maximum: number;
    }[];
    wounds: number[];
    stamina: {
        current: number;
        maximum: number;
    };
    blood: {
        current: number;
        maximum: number;
    };
    panic: {
        current: number;
        maximum: number;
    };
    temperature: {
        current: number;
        freezingThreshold: number;
        burningThreshold: number;
    };
}
