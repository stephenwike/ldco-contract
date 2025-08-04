import { ChoreographerModel } from './choreographer.model';
import { TrackModel } from './track.model';

export interface DanceModel {
    id: string;
    danceName: string;
    choreographers: ChoreographerModel[];
    stepsheet: string;
    difficulty: string;
    isVerified: boolean;
    primaryTrack: TrackModel | null; // TODO: Primary track can be null if not set but this should not be allowed (fix data then safeguard)
    tracks: TrackModel[];
}
