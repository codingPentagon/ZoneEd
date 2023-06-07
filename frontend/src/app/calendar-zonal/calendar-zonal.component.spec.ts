import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarZonalComponent } from './calendar-zonal.component';

describe('CalendarZonalComponent', () => {
  let component: CalendarZonalComponent;
  let fixture: ComponentFixture<CalendarZonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarZonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarZonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
