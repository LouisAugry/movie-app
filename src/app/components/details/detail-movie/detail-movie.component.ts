import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { MovieGatewayService } from '../../../services/api-gateway';
import { Movie } from '../../../models';

import * as moment from 'moment';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  public movie: Movie;
  public tabDataSource;
  displayedColumns: string[] = ['image', 'name', 'character'];

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
      this.tabDataSource = new MatTableDataSource(this.movie.credits.cast);
    } catch (error) {
      console.error(error);
    }
  }

  public formatDate(date: string) {
    return moment(date, 'YYYY-MM-DD').format('DD') + ' '
           + moment(date, 'YYYY-MM-DD').locale('fr').format('MMMM') + ' '
           + moment(date, 'YYYY-MM-DD').format('YYYY');
  }

  public transfromRuntime(minutes: number) {
    return moment.duration({minutes: minutes}).locale('fr').humanize();
  }

  public applyFilter(filterValue: string) {
    this.tabDataSource.filter = filterValue.trim().toLowerCase();
  }

  test(string) {
    console.log(string);
  }

}
