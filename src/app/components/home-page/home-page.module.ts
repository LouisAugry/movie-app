import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material';

import { HomePageComponent } from './home-page.component';
import { HeaderModule } from '../common/header/header.module';
import { TrendingGatewayService } from '../../services/api-gateway';
import { TrendingService } from '../../services/api';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HeaderModule,

    // Angular Material
    MatCardModule
  ],
  providers: [TrendingService, TrendingGatewayService]
})
export class HomePageModule { }
