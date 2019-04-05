import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailSerieComponent } from './detail-serie.component';
import { HeaderModule } from '../../common/header/header.module';
import { SerieService } from '../../../services/api';
import { SerieGatewayService } from '../../../services/api-gateway';

@NgModule({
  declarations: [DetailSerieComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  providers: [SerieService, SerieGatewayService]
})
export class DetailSerieModule { }
