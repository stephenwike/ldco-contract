import { UserDTO } from "../../types/dto/user.dto";
import { UserEntity } from "../../types/entities/user.entity";

export function toUserDTO(
    user: UserEntity,
    isVerified: boolean,
    danceIds: {
        favorites: string[];
        flagged: string[];
        known: string[];
        refresh: string[];
    },
    collections: string[],
    venues: string[] = [],
    friends: string[] = [],
    following: string[] = [],
    friendsRequested: string[] = [],
    friendRequests: string[] = []
): UserDTO {
    return {
        _id: user._id.toString(),
        email: user.email ?? '',
        name: user.name ?? '',
        username: user.username ?? '',
        image: user.image ?? '',
        bio: user.bio ?? '',
        isVerified,
        profile: {
            danceIds,
            collections,
            venues,
            friends,
            following,
            links: user.links ?? {},
            friendsRequested,
            friendRequests
        },
    };
};

export default toUserDTO;
