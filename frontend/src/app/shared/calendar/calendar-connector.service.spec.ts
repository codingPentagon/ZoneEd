import { TestBed } from '@angular/core/testing';

import { CalendarConnectorService } from './calendar-connector.service';

describe('CalendarConnectorService', () => {
  let service: CalendarConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
