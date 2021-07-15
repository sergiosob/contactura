import { TestBed } from '@angular/core/testing';

import { CarregarScriptsService } from './carregar-scripts.service';

describe('CarregarScriptsService', () => {
  let service: CarregarScriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarregarScriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
