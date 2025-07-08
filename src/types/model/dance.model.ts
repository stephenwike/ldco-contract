import { ChoreographerModel } from './choreographer.model';
import { TrackModel } from './track';

export interface DanceModel {
    danceName: string;
    choreographers: ChoreographerModel[];
    stepsheet: string;
    difficulty: string;
    isVerified: boolean;
    primaryTrack: TrackModel;
    tracks: TrackModel[];
}
