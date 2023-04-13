import { TestBed } from '@angular/core/testing';

import { ReliefService } from './relief.service';

describe('ReliefService', () => {
  let service: ReliefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReliefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
