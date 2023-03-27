import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashStuComponent } from './dash-stu.component';

describe('DashStuComponent', () => {
  let component: DashStuComponent;
  let fixture: ComponentFixture<DashStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
