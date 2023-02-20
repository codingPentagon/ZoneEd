import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentTchrComponent } from './assessment-tchr.component';

describe('AssessmentTchrComponent', () => {
  let component: AssessmentTchrComponent;
  let fixture: ComponentFixture<AssessmentTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
