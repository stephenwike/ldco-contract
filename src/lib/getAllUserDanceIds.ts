import UserDances from "../models/userDances.model";

export function getAllUserDanceIds(userDances: Partial<UserDances>): string[] {
    const { favorites = [], flagged = [], known = [], refresh = [] } = userDances ?? {};

    const all = [
        ...favorites,
        ...flagged,
        ...known,
        ...refresh,
    ];

    return Array.from(new Set(all));
}
