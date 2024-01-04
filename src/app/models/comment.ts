import { ID } from './id';

export interface PostComment {
  postid: ID;
  ID: ID;
  name: string;
  email: string;
  body: string;
}
