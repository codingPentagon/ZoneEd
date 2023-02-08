import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesStuComponent } from './grades-stu.component';

describe('GradesStuComponent', () => {
  let component: GradesStuComponent;
  let fixture: ComponentFixture<GradesStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
