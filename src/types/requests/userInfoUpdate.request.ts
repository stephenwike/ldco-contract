import { SocialMediaLinks } from "../model/userTypes/socialMediaLinks";

export interface UserInfoUpdateRequest {
    userId: string;
    name?: string;
    username?: string;
    profilePictureUrl?: string;
    bio?: string;
    socialMediaLinks?: SocialMediaLinks;
}