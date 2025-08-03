import { VenueDTO } from "../../types/dto/venue.dto";
import { VenueEntity } from "../../types/entities/venue.entity";

export function toVenueDTO(
    venue: VenueEntity,
    lessonIds: string[],
    isVerified: boolean
): VenueDTO {

    return {
        id: venue._id,
        venuename: venue.venuename,
        venueaddress: venue.venueaddress,
        geolocation: venue.geolocation,
        phone: venue.phone,
        website: venue.website,
        contactEmail: venue.contactEmail,
        contactName: venue.contactName,
        contactPhone: venue.contactPhone,
        lessonsIds: lessonIds,
        isVerified: isVerified,
        isDeleted: venue.isDeleted ?? false,
        deletedAt: venue.deletedAt ?? null,
        createdAt: venue.createdAt ?? null,
    };
}