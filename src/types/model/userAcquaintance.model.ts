import { CollectionModel } from "./collection.model";
import { SocialMediaLinks } from "./userTypes/socialMediaLinks";
import { UserDances } from "./userTypes/userDances";

export interface UserAcquaintanceModel {
    id: string;
    username: string;
    image: string;
    bio: string;
    dances: UserDances;
    collections: CollectionModel[];
    followersCount: number;
    friendsCount: number;
    mutualFriendsCount: number;
    links?: SocialMediaLinks;
    isVerified: boolean;
}
