import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTchrComponent } from './reg-tchr.component';

describe('RegTchrComponent', () => {
  let component: RegTchrComponent;
  let fixture: ComponentFixture<RegTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
