import { TestBed } from '@angular/core/testing';

import { TrendingGatewayService } from './trending-gateway.service';

describe('TrendingGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingGatewayService = TestBed.get(TrendingGatewayService);
    expect(service).toBeTruthy();
  });
});
