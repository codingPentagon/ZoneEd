import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTchrComponent } from './leave-tchr.component';

describe('LeaveTchrComponent', () => {
  let component: LeaveTchrComponent;
  let fixture: ComponentFixture<LeaveTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
