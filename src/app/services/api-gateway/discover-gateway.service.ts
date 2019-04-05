import { Injectable } from '@angular/core';

import { DiscoverService } from '../api/discover.service';
import { DiscoverMovie, DiscoverSerie } from '../../models';

import {throwError as observableThrowError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class DiscoverGatewayService {

  constructor(private service: DiscoverService) { }

  public getDiscoverMovies(page: number): Promise<DiscoverMovie[]> {
    return new Promise((resolve, reject) => {
      this.service.getDiscoverMovies(page).subscribe(res => {
        resolve(res['results']);
      }, err => {
        reject(err);
        return observableThrowError(err || 'Server error');
      });
    });
  }

  public getDiscoverSeries(page: number): Promise<DiscoverSerie[]> {
    return new Promise((resolve, reject) => {
      this.service.getDiscoverSeries(page).subscribe(res => {
        resolve(res['results']);
      }, err => {
        reject(err);
        return observableThrowError(err || 'Server error');
      });
    });
  }
}
