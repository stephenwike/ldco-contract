export interface CollectionDTO {
    id: string;
    name: string;
    dances: string[];
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    isPrivate: boolean; // TODO: Private collections should not be returned in public APIs
    isCopyable: boolean;
    isArchived: boolean;
    archivedAt: Date | null;

    // Added Data
    isVerified: boolean;
}