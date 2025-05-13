import Lesson from "./lesson.model";

export default class Venue {
    constructor(obj: Partial<Venue>) {
        Object.assign(this, obj);
    }

    _id!: string;
    venuename!: string;
    venueaddress!: string;
    geolocation!: [number, number];
    phone?: string;
    website?: string;

    // Loaded Data
    lessons?: Lesson[];
}