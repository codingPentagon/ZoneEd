import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStuComponent } from './base-stu.component';

describe('BaseStuComponent', () => {
  let component: BaseStuComponent;
  let fixture: ComponentFixture<BaseStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
