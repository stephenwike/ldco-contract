export interface UserCollectionEntity {
  _id: string;
  name: string;
  danceIds: string[];
  createdBy: string;
  createdAt: Date;
  isPrivate: boolean;
}
