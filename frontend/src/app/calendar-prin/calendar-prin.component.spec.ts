import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPrinComponent } from './calendar-prin.component';

describe('CalendarPrinComponent', () => {
  let component: CalendarPrinComponent;
  let fixture: ComponentFixture<CalendarPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarPrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
