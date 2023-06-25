import { TestBed } from '@angular/core/testing';

import { FavorecidoService } from './favorecido.service';

describe('FavorecidoService', () => {
  let service: FavorecidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorecidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
