export interface FriendRequestEntity {
  _id: string;
  requesterId: string;
  requesteeId: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Date;
}
