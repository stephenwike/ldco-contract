import FriendRequestEntity from "../entities/friendRequest.entity";
import { UserEntity } from "../entities/user.entity";
import ProfileData from "../models/profileData.model";
import User from "../models/user.model";
import UserAcquaintance from "../models/userAcquaintance.model";

export async function convertUserToModel(
  user: UserEntity,
  {
    friends,
    following,
    friendRequests,
    followersCount = 0,
    mutualsCount = 0,
  }: {
    friends: UserEntity[];
    following: UserEntity[];
    friendRequests: FriendRequestEntity[];
    followersCount?: number;
    mutualsCount?: number;
  }
): Promise<User> {
  const dances = {
    favorites: user.favorites || [],
    flagged: user.flagged || [],
    known: user.known || [],
    refresh: user.refresh || [],
  };

  const transformAcquaintance = (u: UserEntity): UserAcquaintance => ({
    _id: u._id,
    email: u.email,
    name: u.name,
    image: u.image,
    bio: u.bio,
    friends: u.friends || [],
    following: u.following || [],
    dances: {
      favorites: u.favorites || [],
      flagged: u.flagged || [],
      known: u.known || [],
      refresh: u.refresh || [],
    },
    collections: u.collections || [],
    followersCount: followersCount,
    venuesCount: u.venues?.length || 0,
    mutualsCount: mutualsCount,
  });

  const profile: ProfileData = {
    dances,
    collections: user.collections || [],
    venues: user.venues || [],
    friends: friends.map(transformAcquaintance),
    following: following.map(transformAcquaintance),
    friendsRequested: friendRequests
      .filter(fr => fr.requester === user._id)
      .map(fr => transformAcquaintance(friends.find(f => f._id === fr.requestee)!)),
    friendRequests: friendRequests
      .filter(fr => fr.requestee === user._id)
      .map(fr => transformAcquaintance(friends.find(f => f._id === fr.requester)!)),
    followersCount: followersCount,
    links: user.links || {},
  };

  return {
    _id: user._id,
    email: user.email,
    name: user.name,
    image: user.image,
    bio: user.bio,
    profile,
  };
}
