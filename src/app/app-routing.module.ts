import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { DiscoverComponent } from './components/discover/discover.component';

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
    path: 'detail/acteur',
    component: DetailActorComponent
  },
  {
    path: 'decouvrir',
    component: DiscoverComponent
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
