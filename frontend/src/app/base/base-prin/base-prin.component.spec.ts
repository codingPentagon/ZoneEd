import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePrinComponent } from './base-prin.component';

describe('BasePrinComponent', () => {
  let component: BasePrinComponent;
  let fixture: ComponentFixture<BasePrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
