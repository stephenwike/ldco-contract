
export interface UserCollectionUpdateRequest {
    name?: string;
    danceIds?: string[];
    createdBy?: string;
    updated?: string;
    archived?: boolean;
    archivedAt?: Date;
}