import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class DiscoverService {

  constructor(private http: HttpClient) { }

  public getDiscoverMovies(page): Observable<any> {
    const options = {
      api_key: environment.apiKey,
      page: page,
      language: 'fr-FR'
    };
    return this.http.get(environment.apiUrl + '/discover/movie', {params: options});
  }

  public getDiscoverSeries(page): Observable<any> {
    const options = {
      api_key: environment.apiKey,
      page: page,
      language: 'fr-FR'
    };
    return this.http.get(environment.apiUrl + '/discover/tv', {params: options});
  }

}
