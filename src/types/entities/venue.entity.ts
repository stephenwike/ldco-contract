export interface VenueEntity {
    _id: string;
    venuename: string;
    venueaddress: string;
    geolocation: [number, number];
    phone: string;
    website: string;
    contactEmail: string;
    contactName: string;
    contactPhone: string;
    isDeleted?: boolean;
    deletedAt?: Date;
    createdAt?: Date;
}
