import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentStuComponent } from './assessment-stu.component';

describe('AssessmentStuComponent', () => {
  let component: AssessmentStuComponent;
  let fixture: ComponentFixture<AssessmentStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
