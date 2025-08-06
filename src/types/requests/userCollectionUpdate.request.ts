export interface UserCollectionUpdateRequest {
    name?: string;
    danceIds?: string[];
    updatedAt?: Date;
    isArchived?: boolean;
    archivedAt?: Date;
}