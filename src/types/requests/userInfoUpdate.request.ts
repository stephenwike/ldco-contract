import { SocialMediaLinks } from "../model/userTypes/socialMediaLinks";

export interface UserInfoUpdateRequest {
    name?: string;
    username?: string;
    profilePictureUrl?: string;
    bio?: string;
    socialMediaLinks?: SocialMediaLinks;
}