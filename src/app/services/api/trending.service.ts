import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class TrendingService {

  constructor(private http: HttpClient) {  }

  public getTrendingMovies(page): Observable<any> {
    const options = {
      api_key: environment.apiKey,
      page: page,
      language: 'fr-FR'
    };
    return this.http.get(environment.apiUrl + '/trending/movie/week', {params: options});
  }
}
