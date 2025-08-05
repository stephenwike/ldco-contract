import { DanceModel } from "./dance.model";

export interface CollectionModel {
    id: string;
    name: string;
    dances: DanceModel[];
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    isCopyable: boolean;
    isVerified: boolean;
    isArchived: boolean;
    archivedAt?: Date;
}