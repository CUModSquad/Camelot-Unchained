import { SignalRHub } from '../SignalRHub';
export declare const hubEvents: {
    joined: string;
    update: string;
    quit: string;
    abandoned: string;
    memberJoined: string;
    memberUpdate: string;
    memberRemoved: string;
    inviteReceived: string;
};
export declare const groupsHub: SignalRHub;
