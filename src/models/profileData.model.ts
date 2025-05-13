import Collection from "./collection.model";
import SocialMediaLinks from "./socialMediaLinks.model";
import UserDances from "./userDances.model";
import UserAcquaintance from "./userAcquaintance.model";

export default class ProfileData {

    constructor(data: Partial<ProfileData>) {
        this.dances = new UserDances(data.dances);
        this.collections = data.collections ?? [];
        this.venues = data.venues ?? [];
        this.friends = data.friends ?? [];
        this.following = data.following ?? [];
        this.friendsRequested = data.friendsRequested ?? [];
        this.friendRequests = data.friendRequests ?? [];
        this.followersCount = data.followersCount ?? 0;
        this.links = {};
    }

    dances: UserDances;
    collections: Collection[];
    venues: string[];
    friends: UserAcquaintance[];
    following: UserAcquaintance[];
    friendsRequested: UserAcquaintance[];
    friendRequests: UserAcquaintance[];
    followersCount: number;
    links: SocialMediaLinks;
}
