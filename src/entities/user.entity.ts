import Collection from "../models/collection.model";

export interface UserEntity {
  _id: string;
  email: string;
  name: string;
  image?: string;
  bio?: string;
  favorites?: string[];
  flagged?: string[];
  known?: string[];
  refresh?: string[];
  collections?: Collection[];
  venues?: string[];
  friends?: string[];
  following?: string[];
  links?: Record<string, string>;
}
