import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './components/home-page/home-page.module';
import { DetailMovieModule } from './components/detail-movie/detail-movie.module';
import { DetailActorModule } from './components/detail-actor/detail-actor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomePageModule,
    DetailMovieModule,
    DetailActorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
