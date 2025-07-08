import { CollectionModel } from "../collection.model";
import { UserDances } from "../userDances.model";
import { SocialMediaLinks } from "./socialMediaLinks";
import { UserAcquaintanceModel } from "../userAquaintance";
import { VenueModel } from "../venue.model";

export interface ProfileData {
    dances: UserDances;
    collections: CollectionModel[];
    venues: VenueModel[];
    friends: UserAcquaintanceModel[];
    following: UserAcquaintanceModel[];
    friendsRequested: UserAcquaintanceModel[];
    friendRequests: UserAcquaintanceModel[];
    followersCount: number;
    links: SocialMediaLinks;
}
