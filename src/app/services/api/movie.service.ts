import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  public getDetailMovie(id): Observable<any> {
    const options = {
      api_key: environment.apiKey,
      append_to_response: 'videos,credits',
      language: 'fr-FR'
    };
    return this.http.get(environment.apiUrl + '/movie/' + id, {params: options});
  }
}
