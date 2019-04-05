import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SerieGatewayService } from '../../../services/api-gateway';
import { Serie } from '../../../models';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.scss']
})
export class DetailSerieComponent implements OnInit {
  public serie: Serie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serieServiceGateway: SerieGatewayService
  ) { }

  ngOnInit() {
    this.loadSerie(this.activatedRoute.snapshot.queryParams['id']);
  }

  private async loadSerie(id: number) {
    try {
      this.serie = await this.serieServiceGateway.getDetailMovie(id);
    } catch (error) {
      console.error(error);
    }
  }

}
