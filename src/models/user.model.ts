import ProfileData from "./profileData.model";

export default class User {

    constructor(data: Partial<User>) {
        this._id = data._id ?? '';
        this.email = data.email ?? '';
        this.name = data.name ?? '';
        this.image = data.image;
        this.profile = new ProfileData(data?.profile as ProfileData ?? {});
    }

    _id!: string;
    email!: string;
    name!: string;
    image?: string;
    bio?: string;
    profile: ProfileData;
}
