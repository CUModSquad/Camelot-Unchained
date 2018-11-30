import { Faction } from '../..';
import { bodyParts } from '../constants/bodyParts';
import { damageTypes } from '../constants/damageTypes';
import { resourceTypes } from '../constants/resourceTypes';
import { skillTracks } from '../constants/skillTracks';
import { activeEffectActions } from '../constants/activeEffectActions';
export interface CombatLog {
    fromName: string;
    fromFaction: Faction;
    toName: string;
    toFaction: Faction;
    damages?: {
        sent: number;
        received: number;
        part: bodyParts;
        type: damageTypes;
    }[];
    disruption?: {
        sent: number;
        received: number;
        tracksInterrupted?: skillTracks;
        source: string;
    };
    heals?: {
        sent: number;
        received: number;
        part: bodyParts;
    }[];
    cures?: bodyParts[];
    resources?: {
        sent: number;
        received: number;
        type: resourceTypes;
    }[];
    impulse?: {
        sent: number;
        received: number;
    };
    activeEffects?: {
        name: string;
        action: activeEffectActions;
        duration: string;
    }[];
    errors?: {
        msg: string;
    }[];
}
