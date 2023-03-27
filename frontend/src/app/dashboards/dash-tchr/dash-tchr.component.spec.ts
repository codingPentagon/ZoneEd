import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTchrComponent } from './dash-tchr.component';

describe('DashTchrComponent', () => {
  let component: DashTchrComponent;
  let fixture: ComponentFixture<DashTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
