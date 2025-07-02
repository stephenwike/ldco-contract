import UserDances from "./userDances.model";
import SocialMediaLinks from "./socialMediaLinks.model";
import Collection from "./collection.model";

export default class UserAcquaintance {

    constructor(data: Partial<UserAcquaintance>) {
        this._id = data._id ?? '';
        this.email = data.email ?? '';
        this.name = data.name ?? '';
        this.username = data.username ?? '';
        this.image = data.image;
        this.dances = new UserDances(data.dances);
        this.collections = data.collections ?? [];
        this.followersCount = data.followersCount ?? 0;
        this.venuesCount = data.venuesCount ?? 0;
        this.mutualsCount = data.mutualsCount ?? 0;
        this.friends = data.friends ?? [];
        this.following = data.following ?? [];
    }

    _id!: string;
    email!: string;
    name!: string;
    username?: string;
    image?: string;
    bio?: string;

    friends: string[];
    following: string[];
    dances: UserDances;
    collections: Collection[];

    followersCount: number;
    venuesCount: number;
    mutualsCount: number;

    links?: SocialMediaLinks;
}
