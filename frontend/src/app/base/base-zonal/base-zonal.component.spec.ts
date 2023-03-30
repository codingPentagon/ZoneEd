import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseZonalComponent } from './base-zonal.component';

describe('BaseZonalComponent', () => {
  let component: BaseZonalComponent;
  let fixture: ComponentFixture<BaseZonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseZonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseZonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
