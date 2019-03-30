import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class TrendingService {

  public getTrendingMovies(): Observable<any> {
    const options = {
      api_key: environment.apiKey
    };
    return this.http.get(environment.apiUrl + '/trending/movie/week', {params: options});
  }

  constructor(private http: HttpClient) {  }

}
