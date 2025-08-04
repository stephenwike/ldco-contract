export interface UserCollectionUpdateRequest {
    name?: string;
    danceIds?: string[];
    updatedAt?: Date;
    archived?: boolean;
    archivedAt?: Date;
}