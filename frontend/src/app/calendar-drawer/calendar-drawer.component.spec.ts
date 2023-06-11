import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDrawerComponent } from './calendar-drawer.component';

describe('CalendarDrawerComponent', () => {
  let component: CalendarDrawerComponent;
  let fixture: ComponentFixture<CalendarDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
