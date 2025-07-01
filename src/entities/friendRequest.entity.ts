export default class FriendRequestEntity {
    constructor(obj: Partial<FriendRequestEntity>) {
        Object.assign(this, obj);
    }

    _id!: string;
    requester!: string;
    requestee!: string;
    status!: string;
    timestamp!: Date;
}