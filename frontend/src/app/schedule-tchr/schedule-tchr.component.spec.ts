import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTchrComponent } from './schedule-tchr.component';

describe('ScheduleTchrComponent', () => {
  let component: ScheduleTchrComponent;
  let fixture: ComponentFixture<ScheduleTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
