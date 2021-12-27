import { TestBed } from '@angular/core/testing';

import { DispatchingService } from './dispatching.service';

describe('DispatchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispatchingService = TestBed.get(DispatchingService);
    expect(service).toBeTruthy();
  });
});
