import { ProfileData } from "./userTypes/profileData";

export interface UserModel {
    _id: string;
    email: string;
    name: string;
    username: string;
    image: string;
    bio: string;
    profile: ProfileData;
    isVerified: boolean; // TODO: This makes sense on a UserAquaintanceModel, but is it still useful on a UserModel?
}
