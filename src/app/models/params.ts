export interface Params {
  _limit: number;
  _start: number;
}

export interface CommentsFilters {
  postId: number;
}

export class ParamsClass {
  _limit: number = 0;
  _start: number = 0;
}
