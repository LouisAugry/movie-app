import { TestBed } from '@angular/core/testing';

import { SerieGatewayService } from './serie-gateway.service';

describe('SerieGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerieGatewayService = TestBed.get(SerieGatewayService);
    expect(service).toBeTruthy();
  });
});
