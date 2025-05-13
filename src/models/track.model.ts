export default class Track {
    constructor(obj: Partial<Track>) {
        Object.assign(this, obj);
    }

    _id!: string;
    isrc!: string;
    name!: string;
    artists: string[] = [];
    duration_ms!: number;
    explicit!: boolean;
}
