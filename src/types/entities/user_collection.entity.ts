export interface UserCollectionEntity {
  _id: string;
  name: string;
  danceIds: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  isPrivate: boolean;
}
