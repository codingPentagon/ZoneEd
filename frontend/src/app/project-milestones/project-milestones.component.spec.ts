import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMilestonesComponent } from './project-milestones.component';

describe('ProjectMilestonesComponent', () => {
  let component: ProjectMilestonesComponent;
  let fixture: ComponentFixture<ProjectMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectMilestonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
