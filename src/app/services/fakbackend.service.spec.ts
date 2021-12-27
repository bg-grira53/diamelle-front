import { TestBed } from '@angular/core/testing';

import { FakbackendService } from './fakbackend.service';

describe('FakbackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakbackendService = TestBed.get(FakbackendService);
    expect(service).toBeTruthy();
  });
});
