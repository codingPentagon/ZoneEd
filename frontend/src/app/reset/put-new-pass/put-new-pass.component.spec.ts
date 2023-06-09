import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutNewPassComponent } from './put-new-pass.component';

describe('PutNewPassComponent', () => {
  let component: PutNewPassComponent;
  let fixture: ComponentFixture<PutNewPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutNewPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutNewPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
