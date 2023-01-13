import { TestBed } from '@angular/core/testing';

import { RegStuService } from './reg-stu.service';

describe('RegStuService', () => {
  let service: RegStuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegStuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
