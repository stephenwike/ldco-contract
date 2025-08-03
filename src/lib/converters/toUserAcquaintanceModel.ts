import { ChoreographerDTO } from "../../types/dto/choreographer.dto";
import { CollectionDTO } from "../../types/dto/collection.dto";
import { DanceDTO } from "../../types/dto/dance.dto";
import { TrackDTO } from "../../types/dto/track.dto";
import { UserAcquaintanceDTO } from "../../types/dto/userAcquaintance.dto";
import { UserAcquaintanceModel } from "../../types/model/userAcquaintance.model";
import { toCollectionModel } from "./toCollectionsModel";
import { toDanceModel } from "./toDanceModel";

export function toUserAcquaintanceModel(
    dto: UserAcquaintanceDTO,
    danceMap: Record<string, DanceDTO>,
    trackMap: Record<string, TrackDTO>,
    collectionMap: Record<string, CollectionDTO>,
    choreographerMap: Record<string, ChoreographerDTO>
): UserAcquaintanceModel {

    return {
        id: dto.id,
        username: dto.username,
        image: dto.image,
        bio: dto.bio,
        isVerified: dto.isVerified,
        friendsCount: dto.profile.friendsCount,
        followersCount: dto.profile.followersCount,
        mutualFriendsCount: dto.profile.mutualFriendsCount,
        links: dto.profile.links,
        dances: {
            favorites: dto.profile.dances.favorites.map(id => toDanceModel(danceMap[id], trackMap, choreographerMap)),
            flagged: dto.profile.dances.flagged.map(id => toDanceModel(danceMap[id], trackMap, choreographerMap)),
            known: dto.profile.dances.known.map(id => toDanceModel(danceMap[id], trackMap, choreographerMap)),
            refresh: dto.profile.dances.refresh.map(id => toDanceModel(danceMap[id], trackMap, choreographerMap))
        },
        collections: dto.profile.collections.map(id => toCollectionModel(collectionMap[id], danceMap, trackMap, choreographerMap)),
    };
}
