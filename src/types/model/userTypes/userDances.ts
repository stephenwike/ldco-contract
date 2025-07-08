import { DanceModel } from "../dance.model";

export interface UserDances {
    favorites: DanceModel[];
    flagged: DanceModel[];
    known: DanceModel[];
    refresh: DanceModel[];
}
