import { TestBed } from '@angular/core/testing';

import { MarkentryService } from './markentry.service';

describe('MarkentryService', () => {
  let service: MarkentryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkentryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
