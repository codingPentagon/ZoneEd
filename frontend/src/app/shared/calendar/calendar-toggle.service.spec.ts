import { TestBed } from '@angular/core/testing';

import { CalendarToggleService } from './calendar-toggle.service';

describe('CalendarToggleService', () => {
  let service: CalendarToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
