import { TestBed } from '@angular/core/testing';

import { DiamondService } from './diamond.service';

describe('DiamondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiamondService = TestBed.get(DiamondService);
    expect(service).toBeTruthy();
  });
});
