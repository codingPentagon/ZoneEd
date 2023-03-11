import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashZonalComponent } from './dash-zonal.component';

describe('DashZonalComponent', () => {
  let component: DashZonalComponent;
  let fixture: ComponentFixture<DashZonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashZonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashZonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
