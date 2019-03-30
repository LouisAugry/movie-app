import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../common/header/header.module';
import { DetailMovieComponent } from './detail-movie.component';
import { MovieService } from '../../services/api';
import { MovieGatewayService } from '../../services/api-gateway';

@NgModule({
  declarations: [DetailMovieComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  providers: [MovieService, MovieGatewayService]
})
export class DetailMovieModule { }
