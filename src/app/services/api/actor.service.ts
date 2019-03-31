import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class ActorService {

  constructor(private http: HttpClient) { }

  public getDetailActor(id): Observable<any> {
    const options = {
      api_key: environment.apiKey,
      append_to_response: 'movie_credits',
      language: 'fr-FR'
    };
    return this.http.get(environment.apiUrl + '/person/' + id, {params: options});
  }
}
