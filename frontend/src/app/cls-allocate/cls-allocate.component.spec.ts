import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClsAllocateComponent } from './cls-allocate.component';

describe('ClsAllocateComponent', () => {
  let component: ClsAllocateComponent;
  let fixture: ComponentFixture<ClsAllocateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClsAllocateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClsAllocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
