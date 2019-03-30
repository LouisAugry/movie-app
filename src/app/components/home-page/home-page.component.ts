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
  public currentPage = 1;

  constructor(
    private trendingGatewayService: TrendingGatewayService
    ) { }

  ngOnInit() {
    this.loadTrendingMovies(this.currentPage);
  }

  private async loadTrendingMovies(page: number) {
    try {
      this.trendingMovies = await this.trendingGatewayService.getTrendingMovies(page);
    } catch (error) {
      console.log(error);
    }
  }

  public nextPage() {
    this.currentPage += 1;
    this.loadTrendingMovies(this.currentPage);
    this.scrollToTop();
  }

  public previousPage() {
    this.currentPage -= 1;
    this.loadTrendingMovies(this.currentPage);
    this.scrollToTop();
  }

  public scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
