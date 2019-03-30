import { TestBed } from '@angular/core/testing';

import { MovieGatewayService } from './movie-gateway.service';

describe('MovieGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieGatewayService = TestBed.get(MovieGatewayService);
    expect(service).toBeTruthy();
  });
});
