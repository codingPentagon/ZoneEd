import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPrinComponent } from './project-prin.component';

describe('ProjectPrinComponent', () => {
  let component: ProjectPrinComponent;
  let fixture: ComponentFixture<ProjectPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
