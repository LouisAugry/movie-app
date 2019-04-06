import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatChipsModule, MatFormFieldModule, MatTableModule, MatInputModule } from '@angular/material';

import { HeaderModule } from '../../common/header/header.module';
import { DetailMovieComponent } from './detail-movie.component';
import { MovieService } from '../../../services/api';
import { MovieGatewayService } from '../../../services/api-gateway';

@NgModule({
  declarations: [DetailMovieComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,

    // Angular Materials
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [MovieService, MovieGatewayService]
})
export class DetailMovieModule { }
