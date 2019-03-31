import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Actor } from '../../models';
import { ActorGatewayService } from '../../services/api-gateway';

@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.scss']
})
export class DetailActorComponent implements OnInit {
  public actor: Actor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private actorServiceGateway: ActorGatewayService
  ) { }

  ngOnInit() {
    this.loadActor(this.activatedRoute.snapshot.queryParams['id']);
  }

  private async loadActor(id: number) {
    try {
      this.actor = await this.actorServiceGateway.getDetailActor(id);
    } catch (error) {
      console.log(error);
    }
  }

}
