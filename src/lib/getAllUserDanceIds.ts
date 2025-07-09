import { DanceModel } from "../types/model/dance.model";
import { UserDances } from "../types/model/userTypes/userDances";

export function getAllUserDanceIds(userDances: UserDances): DanceModel[] {
    const { favorites = [], flagged = [], known = [], refresh = [] } = userDances ?? {};

    const all = [
        ...favorites,
        ...flagged,
        ...known,
        ...refresh,
    ];

    return all.filter((item, index) => all.indexOf(item) === index);
}