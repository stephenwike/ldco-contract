import { UserDanceDTO } from "./userDances.dto";

export interface UserDTO {
  id: string;
  email: string;
  name: string;
  username: string;
  image: string;
  bio: string;
  isVerified: boolean;
  profile: {
    danceIds: UserDanceDTO;
    collections: string[];
    venues: string[];
    friends: string[];
    following: string[];
    friendsRequested: string[];
    friendRequests: string[];
    followersCount?: number;
    links: Record<string, string>;
  };
}
