export interface UserAcquaintanceDTO {
    id: string;
    username: string;
    image: string;
    bio: string;
    isVerified: boolean;
    profile: {
        dances: {
            favorites: string[];
            flagged: string[];
            known: string[];
            refresh: string[];
        };
        collections: string[];
        venues: string[];
        friendsCount: number;
        followingCount: number;
        followersCount: number;
        mutualFriendsCount: number;
        links: Record<string, string>;
    };
};
