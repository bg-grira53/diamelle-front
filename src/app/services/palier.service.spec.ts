import { TestBed } from '@angular/core/testing';

import { PalierService } from './palier.service';

describe('PalierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalierService = TestBed.get(PalierService);
    expect(service).toBeTruthy();
  });
});
