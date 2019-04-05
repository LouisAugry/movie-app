import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class SerieService {

  constructor(private http: HttpClient) { }

  public getDetailSerie(id): Observable<any> {
    const options = {
      api_key: environment.apiKey,
      append_to_response: 'credits',
      language: 'fr-FR'
    };
    return this.http.get(environment.apiUrl + '/tv/' + id, {params: options});
  }
}
