import { TestBed } from '@angular/core/testing';

import { SolvabilityService } from './solvability.service';

describe('SolvabilityService', () => {
  let service: SolvabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolvabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
