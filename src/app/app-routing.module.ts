import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: HomePageComponent
  },
  {
    path: 'detail/film',
    component: DetailMovieComponent
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
