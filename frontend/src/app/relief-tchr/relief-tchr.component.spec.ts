import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefTchrComponent } from './relief-tchr.component';

describe('ReliefTchrComponent', () => {
  let component: ReliefTchrComponent;
  let fixture: ComponentFixture<ReliefTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliefTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReliefTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
