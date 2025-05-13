export default class Instructor {
    constructor(obj: Partial<Instructor>) {
        Object.assign(this, obj);
    }

    _id!: string;
    name!: string;
}