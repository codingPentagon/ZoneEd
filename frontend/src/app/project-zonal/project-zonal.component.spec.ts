import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectZonalComponent } from './project-zonal.component';

describe('ProjectZonalComponent', () => {
  let component: ProjectZonalComponent;
  let fixture: ComponentFixture<ProjectZonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectZonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectZonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
