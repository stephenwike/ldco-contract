export interface UserEntity {
  _id: string;
  email: string;
  name: string;
  username?: string;
  image?: string;
  bio?: string;
  links?: Record<string, string>;
}
