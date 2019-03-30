import { Component, OnInit } from '@angular/core';

import { TrendingMovie } from '../../../app/models';
import { TrendingGatewayService } from '../../services/api-gateway';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public trendingMovies: TrendingMovie[];

  constructor(private trendingGatewayService: TrendingGatewayService) { }

  ngOnInit() {
    this.loadTrendingMovies();
  }

  private async loadTrendingMovies() {
    try {
      this.trendingMovies = await this.trendingGatewayService.getTrendingMovies();
    } catch (error) {
      console.log(error);
    }
  }

  public moreDetails(id: number) {
    console.log(id);
  }

}
