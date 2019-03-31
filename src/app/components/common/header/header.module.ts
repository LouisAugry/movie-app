import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTooltipModule
} from '@angular/material';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,

    // Angular Material Modules
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
