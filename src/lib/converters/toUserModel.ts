import { UserDTO } from "../../types/dto/user.dto";
import { CollectionModel } from "../../types/model/collection.model";
import { DanceModel } from "../../types/model/dance.model";
import { UserModel } from "../../types/model/user.model";
import { UserAcquaintanceModel } from "../../types/model/userAcquaintance.model";
import { VenueModel } from "../../types/model/venue.model";

export function toUserModel(
    userDTO: UserDTO,
    danceMap: Record<string, DanceModel>,
    collectionMap: Record<string, CollectionModel>,
    venueMap: Record<string, VenueModel>,
    friendsMap: Record<string, UserAcquaintanceModel>,
    followingMap: Record<string, UserAcquaintanceModel>
): UserModel {
    const expand = <T>(ids: string[] = [], map: Record<string, T>): T[] => ids.map(id => map[id]).filter(Boolean);

    return {
        _id: userDTO.id,
        email: userDTO.email,
        name: userDTO.name,
        username: userDTO.username ?? userDTO.name ?? '',
        image: userDTO.image,
        bio: userDTO.bio,
        isVerified: userDTO.isVerified,
        profile: {
            dances: {
                favorites: expand(userDTO.profile?.danceIds?.favorites, danceMap),
                flagged: expand(userDTO.profile?.danceIds?.flagged, danceMap),
                known: expand(userDTO.profile?.danceIds?.known, danceMap),
                refresh: expand(userDTO.profile?.danceIds?.refresh, danceMap),
            },
            collections: expand(userDTO.profile?.collections, collectionMap),
            venues: expand(userDTO.profile?.venues, venueMap),
            friends: expand(userDTO.profile?.friends, friendsMap),
            following: expand(userDTO.profile?.following, followingMap),
            friendsRequested: expand(userDTO.profile?.friendsRequested, friendsMap),
            friendRequests: expand(userDTO.profile?.friendRequests, friendsMap),
            followersCount: userDTO.profile?.followersCount || 0,
            links: userDTO.profile?.links || [],
        },
    };
}
