import { CollectionModel } from "../collection.model";
import { SocialMediaLinks } from "./socialMediaLinks";
import { VenueModel } from "../venue.model";
import { UserDances } from "./userDances";
import { UserAcquaintanceModel } from "../userAcquaintance.model";

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
