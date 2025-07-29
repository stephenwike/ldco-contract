export interface TrackDTO {
    id: string;
    name: string;
    artists: string[];
    isrc: string;
    uri: string;
    duration_ms: number;
    explicit: boolean;
    isVerified: boolean;
}
