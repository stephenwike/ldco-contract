export interface CollectionDTO {
    _id: string;
    name: string;
    dances: string[];
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    isPrivate: boolean; // TODO: Private collections should not be returned in public APIs
    isCopyable: boolean;

    // Added Data
    isVerified: boolean;
}