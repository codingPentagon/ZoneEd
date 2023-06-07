import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEventsComponent } from './school-events.component';

describe('SchoolEventsComponent', () => {
  let component: SchoolEventsComponent;
  let fixture: ComponentFixture<SchoolEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
