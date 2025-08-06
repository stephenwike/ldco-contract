import { UserDances } from "../types/model/userTypes/userDances";

export function getAllUserDanceIds(userDances: UserDances): string[] {
    const { favorites = [], flagged = [], known = [], refresh = [] } = userDances ?? {};

    const all = [
        ...favorites,
        ...flagged,
        ...known,
        ...refresh,
    ];

    // Remove duplicates and return array of string IDs
    return all
        .filter((item, index, self) => self.findIndex(i => i.id === item.id) === index)
        .map(item => item.id);
}