import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesTchrComponent } from './grades-tchr.component';

describe('GradesTchrComponent', () => {
  let component: GradesTchrComponent;
  let fixture: ComponentFixture<GradesTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
