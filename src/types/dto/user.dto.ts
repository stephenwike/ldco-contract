export interface UserDTO {
  _id: string;
  email: string;
  name: string;
  username: string;
  image: string;
  bio: string;
  isVerified: boolean;
  profile: {
    danceIds: {
      favorites: string[];
      flagged: string[];
      known: string[];
      refresh: string[];
    };
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
