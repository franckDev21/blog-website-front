import User from "./User";

export default interface Post {
  id: number;
  image: string;
  title: string;
  author: User;
  created_at: string;
  description: string;
  tags: Tag[];
  like: number;
}

export interface Tag {
  name: string;
  created_ad: string;
}

