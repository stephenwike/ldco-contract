import { ChoreographerModel } from './choreographer.model';
import { TrackModel } from './track.model';

export interface DanceModel {
    danceName: string;
    choreographers: ChoreographerModel[];
    stepsheet: string;
    difficulty: string;
    isVerified: boolean;
    primaryTrack: TrackModel;
    tracks: TrackModel[];
}
