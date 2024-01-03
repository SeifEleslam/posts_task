import { Injectable } from '@angular/core';
import { Params } from 'src/app/models/params';
import { MainApiService } from './main.api.service';
import { Post } from 'src/app/models/post';
import { ID } from 'src/app/models/id';

@Injectable()
export class PostApiService {
  constructor(private fetcher: MainApiService) {}

  endpoint = 'posts';

  getPosts(params?: Partial<Params>) {
    return this.fetcher.fetchData<undefined, Post[]>(
      'GET',
      this.endpoint,
      params
    );
  }

  updatePost(body: Partial<Post>, params?: Partial<Params>) {
    return this.fetcher.fetchData<Partial<Post>, Post>(
      'PATCH',
      this.endpoint,
      params,
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
}
