import { Injectable } from '@angular/core';

import { MovieService } from '../api/movie.service';
import { Movie } from '../../models';

import {throwError as observableThrowError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class MovieGatewayService {

  constructor(private service: MovieService) { }

  public getDetailMovie(id: number): Promise<Movie> {
    return new Promise((resolve, reject) => {
      this.service.getDetailMovie(id).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
        return observableThrowError(err || 'Server error');
      });
    });
  }
}
