import { UserDanceDTO } from "../types/dto/userDances.dto";

export function getAllUserDanceIds(userDances: UserDanceDTO): string[] {
    const { favorites = [], flagged = [], known = [], refresh = [] } = userDances ?? {};

    const all = [
        ...favorites,
        ...flagged,
        ...known,
        ...refresh,
    ];

    // Remove duplicates and return array of string IDs
    return Array.from(new Set(all));
}