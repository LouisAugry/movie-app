import { Injectable } from '@angular/core';

import { ActorService } from '../api/actor.service';
import { Actor } from '../../models';

import {throwError as observableThrowError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class ActorGatewayService {

  constructor(private service: ActorService) { }

  public getDetailActor(id: number): Promise<Actor> {
    return new Promise((resolve, reject) => {
      this.service.getDetailActor(id).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
        return observableThrowError(err || 'Server error');
      });
    });
  }
}
