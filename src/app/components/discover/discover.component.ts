import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscoverGatewayService } from '../../services/api-gateway';
import { DiscoverMovie, DiscoverSerie } from '../../models';

import * as moment from 'moment';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  public discoverMovies: DiscoverMovie[];
  public discoverSeries: DiscoverSerie[];
  public currentPage = 1;
  public title: string;

  constructor(
    private discoverGatewayService: DiscoverGatewayService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(() => {
      this.loadDicoverData(this.currentPage);
    });
  }

  private async loadDicoverData(page: number) {
    this.discoverMovies = null;
    this.discoverSeries = null;
    if (this.activatedRoute.snapshot.queryParams['type'] === 'film') {
      this.title = 'Découvrez des films';
      try {
        this.discoverMovies = await this.discoverGatewayService.getDiscoverMovies(page);
      } catch (error) {
        console.error(error);
      }
      return;
    }
    this.title = 'Découvrez des séries';
    try {
      this.discoverSeries = await this.discoverGatewayService.getDiscoverSeries(page);
    } catch (error) {
      console.error(error);
    }
  }

  public nextPage() {
    this.currentPage += 1;
    this.loadDicoverData(this.currentPage);
    this.scrollToTop();
  }

  public previousPage() {
    this.currentPage -= 1;
    this.loadDicoverData(this.currentPage);
    this.scrollToTop();
  }

  public formatDate(date: string) {
    return moment(date, 'YYYY-MM-DD').format('DD') + ' '
           + moment(date, 'YYYY-MM-DD').locale('fr').format('MMMM') + ' '
           + moment(date, 'YYYY-MM-DD').format('YYYY');
  }

  public scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
