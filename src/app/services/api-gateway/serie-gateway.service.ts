import { Injectable } from '@angular/core';

import { SerieService } from '../api/serie.service';
import { Serie } from '../../models';

import {throwError as observableThrowError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class SerieGatewayService {

  constructor(private service: SerieService) { }

  public getDetailMovie(id: number): Promise<Serie> {
    return new Promise((resolve, reject) => {
      this.service.getDetailSerie(id).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
        return observableThrowError(err || 'Server error');
      });
    });
  }
}
