import { ID } from './id';

export interface Post {
  id: ID;
  userId: ID;
  title: string;
  body: string;
}
