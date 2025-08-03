import { UserAcquaintanceDTO } from "../../types/dto/userAcquaintance.dto";
import { UserEntity } from "../../types/entities/user.entity";

export function toUserAcquaintanceDTO(
  user: UserEntity,
  isVerified: boolean,
  userProfile: {
    favorites: string[];
    flagged: string[];
    known: string[];
    refresh: string[];
    collections: string[];
    venues: string[];
    friendsCount: number;
    followingCount: number;
    followersCount: number;
    mutualFriendsCount: number;
  }
): UserAcquaintanceDTO {
  return {
    id: user._id,
    username: user.username || user.name || '',
    image: user.image || '',
    bio: user.bio || '',
    isVerified,
    profile: {
      dances: {
        favorites: userProfile.favorites,
        flagged: userProfile.flagged,
        known: userProfile.known,
        refresh: userProfile.refresh,
      },
      collections: userProfile.collections,
      venues: userProfile.venues,
      friendsCount: userProfile.friendsCount,
      followingCount: userProfile.followingCount,
      followersCount: userProfile.followersCount,
      mutualFriendsCount: userProfile.mutualFriendsCount,
      links: user.links ?? {},
    },
  };
}
