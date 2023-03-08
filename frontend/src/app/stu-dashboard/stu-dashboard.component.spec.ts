import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuDashboardComponent } from './stu-dashboard.component';

describe('StuDashboardComponent', () => {
  let component: StuDashboardComponent;
  let fixture: ComponentFixture<StuDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
