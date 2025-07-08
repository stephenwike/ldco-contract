export interface DanceDTO {
    id: string;
    danceName: string;
    choreographers: string[];
    stepsheet: string;
    difficulty: string;
    primaryTrack: string;
    tracks: string[];
    isVerified: boolean;
}
