import { LessonModel } from "./lesson.model";

export interface VenueModel {
    venuename: string;
    venueaddress: string;
    geolocation: [number, number];
    phone: string;
    website: string;
    contactEmail: string;
    contactName: string;
    contactPhone: string;
    lessons: LessonModel[];
    isVerified: boolean;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date | null;
}