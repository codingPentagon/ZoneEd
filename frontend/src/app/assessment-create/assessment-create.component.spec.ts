import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentCreateDialog } from './assessment-create.component';

describe('AssessmentCreateComponent', () => {
  let component: AssessmentCreateDialog;
  let fixture: ComponentFixture<AssessmentCreateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentCreateDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentCreateDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
