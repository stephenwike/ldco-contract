export default class Collection {
    constructor(obj: Partial<Collection>) {
        Object.assign(this, obj);
    }

    name?: string;
    dances?: string[];
}