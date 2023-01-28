import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePrinComponent } from './schedule-prin.component';

describe('SchedulePrinComponent', () => {
  let component: SchedulePrinComponent;
  let fixture: ComponentFixture<SchedulePrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulePrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulePrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
