import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatChipsModule } from '@angular/material';

import { HomePageComponent } from './home-page.component';
import { HeaderModule } from '../common/header/header.module';
import { TrendingGatewayService } from '../../services/api-gateway';
import { TrendingService } from '../../services/api';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    HeaderModule,

    // Angular Material
    MatCardModule,
    MatChipsModule
  ],
  providers: [TrendingService, TrendingGatewayService]
})
export class HomePageModule { }
