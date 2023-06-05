import { TestBed } from '@angular/core/testing';

import { AcsGrantService } from './acs-grant.service';

describe('AcsGrantService', () => {
  let service: AcsGrantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcsGrantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
