export default class FriendRequest {
    constructor(obj: Partial<FriendRequest>) {
        Object.assign(this, obj);
    }

    _id?: string;
    requester?: string[] = [];
    requestee?: string[] = [];
    status?: string;
    timestamp?: Date;
}