import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesOverviewComponent } from './leaves-overview.component';

describe('LeavesOverviewComponent', () => {
  let component: LeavesOverviewComponent;
  let fixture: ComponentFixture<LeavesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
