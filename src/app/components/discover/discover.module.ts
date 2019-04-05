import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatChipsModule } from '@angular/material';

import { DiscoverComponent } from './discover.component';
import { HeaderModule } from '../common/header/header.module';
import { DiscoverService } from '../../services/api';
import { DiscoverGatewayService } from '../../services/api-gateway';

@NgModule({
  declarations: [DiscoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,

    // Angular Material
    MatCardModule,
    MatChipsModule
  ],
  providers: [DiscoverService, DiscoverGatewayService]
})
export class DiscoverModule { }
