import { Injectable } from '@angular/core';
import { MainApiService } from './main.api.service';
import { User } from 'src/app/models/user';

@Injectable()
export class UserApiService {
  constructor(private fetcher: MainApiService) {}

  endpoint = 'users';

  getUserById(id: number) {
    return this.fetcher.fetchData<undefined, User>(
      'GET',
      this.endpoint + `/${id}`
    );
  }
}
