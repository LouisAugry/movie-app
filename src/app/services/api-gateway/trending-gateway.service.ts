import { Injectable } from '@angular/core';

import { TrendingMovie } from '../../models';
import { TrendingService } from '../api/trending.service';

import {throwError as observableThrowError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class TrendingGatewayService {

  constructor(private service: TrendingService) {}

  public getTrendingMovies(page: number): Promise<TrendingMovie[]> {
    return new Promise((resolve, reject) => {
      this.service.getTrendingMovies(page).subscribe(res => {
        resolve(res['results']);
      }, err => {
        reject(err);
        return observableThrowError(err || 'Server error');
      });
    });
  }

}
