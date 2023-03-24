import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuYearlyAttendenceComponent } from './stu-yearly-attendence.component';

describe('StuYearlyAttendenceComponent', () => {
  let component: StuYearlyAttendenceComponent;
  let fixture: ComponentFixture<StuYearlyAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuYearlyAttendenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuYearlyAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
