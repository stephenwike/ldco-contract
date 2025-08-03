export interface DanceCollectionEntity {
  _id: string;
  name: string;
  danceIds: string[];
  createdBy: string;
  createdAt: Date;
  isPrivate: boolean;
}
