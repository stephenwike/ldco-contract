export interface UserFollowEntity {
  _id: string;
  userId: string;
  followingId: string;
  createdAt: Date;
}
