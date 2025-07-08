export interface FriendRequestDTO {
    _id: string;
    requester: string;
    requestee: string;
    status: string;
    timestamp: Date;
}