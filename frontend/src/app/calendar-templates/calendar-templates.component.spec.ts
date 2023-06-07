import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTemplatesComponent } from './calendar-templates.component';

describe('CalendarTemplatesComponent', () => {
  let component: CalendarTemplatesComponent;
  let fixture: ComponentFixture<CalendarTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarTemplatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
