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

    // Added Data
    lessonsIds: string[];
    isVerified: boolean;
}