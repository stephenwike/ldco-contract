import Track from "./track.model";

export default class Dance {
    constructor(obj: Partial<Dance>) {
        Object.assign(this, obj);
    }

    _id!: string;
    difficulty?: string;
    tracks?: Track[] = [];
    primaryTrack?: Track;
    danceName!: string;
    choreographers!: string[];
    stepsheet?: string;
}