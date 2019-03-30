import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: '/accueil',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
