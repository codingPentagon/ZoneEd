import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePrinComponent } from './leave-prin.component';

describe('LeavePrinComponent', () => {
  let component: LeavePrinComponent;
  let fixture: ComponentFixture<LeavePrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavePrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavePrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
