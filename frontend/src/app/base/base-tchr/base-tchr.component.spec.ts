import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTchrComponent } from './base-tchr.component';

describe('BaseTchrComponent', () => {
  let component: BaseTchrComponent;
  let fixture: ComponentFixture<BaseTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
