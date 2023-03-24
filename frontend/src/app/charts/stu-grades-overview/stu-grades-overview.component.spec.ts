import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuGradesOverviewComponent } from './stu-grades-overview.component';

describe('StuGradesOverviewComponent', () => {
  let component: StuGradesOverviewComponent;
  let fixture: ComponentFixture<StuGradesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuGradesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuGradesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
