import { TestBed } from '@angular/core/testing';

import { ActorGatewayService } from './actor-gateway.service';

describe('ActorGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActorGatewayService = TestBed.get(ActorGatewayService);
    expect(service).toBeTruthy();
  });
});
