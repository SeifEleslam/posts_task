import { Injectable } from '@angular/core';
import { CommentsFilters, Params } from 'src/app/models/params';
import { MainApiService } from './main.api.service';
import { Post } from 'src/app/models/post';
import { ID } from 'src/app/models/id';
import { PostComment } from 'src/app/models/comment';

@Injectable()
export class PostApiService {
  constructor(private fetcher: MainApiService) {}

  endpoint = 'posts';
  commentsEndpoint = 'comments';

  getPosts(params?: Partial<Params>) {
    return this.fetcher.fetchData<undefined, Post[]>(
      'GET',
      this.endpoint,
      params
    );
  }

  getPostById(id: number) {
    return this.fetcher.fetchData<undefined, Post>(
      'GET',
      this.endpoint + `/${id}`
    );
  }

  updatePost(body: Partial<Post>) {
    return this.fetcher.fetchData<Partial<Post>, Post>(
      'PATCH',
      this.endpoint + `/${body.id}`,
      undefined,
      body
    );
  }

  deletePost(id: ID, params?: Partial<Params>) {
    return this.fetcher.fetchData<Partial<Post>, Post>(
      'DELETE',
      this.endpoint + `/${id}`,
      params
    );
  }

  getCommentsOfPost(params: Partial<CommentsFilters>) {
    return this.fetcher.fetchData<undefined, PostComment[]>(
      'GET',
      this.commentsEndpoint,
      params
    );
  }
}
