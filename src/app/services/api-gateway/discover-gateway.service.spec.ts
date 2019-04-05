import { TestBed } from '@angular/core/testing';

import { DiscoverGatewayService } from './discover-gateway.service';

describe('DiscoverGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscoverGatewayService = TestBed.get(DiscoverGatewayService);
    expect(service).toBeTruthy();
  });
});
