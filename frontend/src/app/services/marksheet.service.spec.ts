import { TestBed } from '@angular/core/testing';

import { MarksheetService } from './marksheet.service';

describe('MarksheetService', () => {
  let service: MarksheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
