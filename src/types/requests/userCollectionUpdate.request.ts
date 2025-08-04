
export interface UserCollectionUpdateRequest {
    name?: string;
    danceIds?: string[];
    createdBy?: string;
    updatedAt?: Date;
    archived?: boolean;
    archivedAt?: Date;
}