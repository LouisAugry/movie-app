import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailMovieComponent } from './components/details/detail-movie/detail-movie.component';
import { DetailActorComponent } from './components/details/detail-actor/detail-actor.component';
import { DetailSerieComponent } from './components/details/detail-serie/detail-serie.component';
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
    path: 'detail/serie',
    component: DetailSerieComponent
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
