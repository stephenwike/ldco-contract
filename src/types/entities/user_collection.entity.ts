export interface UserCollectionEntity {
  _id: string;
  name: string;
  danceIds: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  isPrivate: boolean;
  isCopyable: boolean;
  isArchived: boolean;
  archivedAt: Date;
}
