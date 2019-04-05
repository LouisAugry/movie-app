import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieGatewayService } from '../../services/api-gateway';
import { Movie } from '../../models';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  public movie: Movie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieServiceGateway: MovieGatewayService
  ) { }

  ngOnInit() {
    this.loadMovie(this.activatedRoute.snapshot.queryParams['id']);
  }

  private async loadMovie(id: number) {
    try {
      this.movie = await this.movieServiceGateway.getDetailMovie(id);
    } catch (error) {
      console.error(error);
    }
  }

}
