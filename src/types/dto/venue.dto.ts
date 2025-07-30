export interface VenueDTO {
    id: string;
    venuename: string;
    venueaddress: string;
    geolocation: [number, number];
    phone: string;
    website: string;
    contactEmail: string;
    contactName: string;
    contactPhone: string;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date | null;

    // Added Data
    lessonsIds: string[];
    isVerified: boolean;
}