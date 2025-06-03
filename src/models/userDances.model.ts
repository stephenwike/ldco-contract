export default class UserDances {

    constructor(data: Partial<UserDances> = {}) {
        this.favorites = data.favorites ?? [];
        this.flagged = data.flagged ?? [];
        this.known = data.known ?? [];
        this.refresh = data.refresh ?? [];
    }

    favorites: string[];
    flagged: string[];
    known: string[];
    refresh: string[];
}
