import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliefPrinComponent } from './relief-prin.component';

describe('ReliefPrinComponent', () => {
  let component: ReliefPrinComponent;
  let fixture: ComponentFixture<ReliefPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliefPrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReliefPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
