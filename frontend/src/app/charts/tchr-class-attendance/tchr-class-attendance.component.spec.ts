import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchrClassAttendanceComponent } from './tchr-class-attendance.component';

describe('TchrClassAttendanceComponent', () => {
  let component: TchrClassAttendanceComponent;
  let fixture: ComponentFixture<TchrClassAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TchrClassAttendanceComponent]
    });
    fixture = TestBed.createComponent(TchrClassAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
