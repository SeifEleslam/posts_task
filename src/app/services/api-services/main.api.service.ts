import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Params } from 'src/app/models/params';

@Injectable()
export class MainApiService {
  url = environment.urlDomain;

  constructor(private http: HttpClient) {}

  fetchData<In, Out>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    endpoint: string,
    params?: Partial<Params>,
    body?: In
  ): Observable<Out> {
    return this.http.request<Out>(
      ...[
        method,
        this.url + endpoint,
        {
          body,
          params,
        },
      ]
    );
  }
}
