import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashParentComponent } from './dash-parent.component';

describe('DashParentComponent', () => {
  let component: DashParentComponent;
  let fixture: ComponentFixture<DashParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
