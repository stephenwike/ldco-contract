import { DanceModel } from "./dance.model";

export interface CollectionModel {
    name: string;
    dances: DanceModel[];
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    isCopyable: boolean;
    isVerified: boolean;
}