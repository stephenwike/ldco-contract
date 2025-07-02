export default class FriendEntity {
    constructor(obj: Partial<FriendEntity>) {
        Object.assign(this, obj);
    }

    _id!: string;
    userA!: string;
    userB!: string;
    timestamp!: Date;
}