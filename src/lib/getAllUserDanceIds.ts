import UserDances from "../models/userDances.model";

export function getAllUserDanceIds(userDances: UserDances): string[] {
    if (!(userDances instanceof UserDances)) {
        throw new Error("Invalid UserDances instance");
    }

    const all = [
        ...userDances.favorites,
        ...userDances.flagged,
        ...userDances.known,
        ...userDances.refresh,
    ];

    return Array.from(new Set(all));
}
