import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseParentComponent } from './base-parent.component';

describe('BaseParentComponent', () => {
  let component: BaseParentComponent;
  let fixture: ComponentFixture<BaseParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
