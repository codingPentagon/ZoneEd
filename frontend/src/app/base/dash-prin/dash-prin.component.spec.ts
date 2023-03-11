import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPrinComponent } from './dash-prin.component';

describe('DashPrinComponent', () => {
  let component: DashPrinComponent;
  let fixture: ComponentFixture<DashPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
