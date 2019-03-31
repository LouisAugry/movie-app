import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '../common/header/header.module';
import { DetailActorComponent } from './detail-actor.component';
import { ActorService } from '../../services/api';
import { ActorGatewayService } from '../../services/api-gateway';

@NgModule({
  declarations: [DetailActorComponent],
  imports: [
    CommonModule,
    RouterModule,

    HeaderModule
  ],
  providers: [ActorService, ActorGatewayService]
})
export class DetailActorModule { }
