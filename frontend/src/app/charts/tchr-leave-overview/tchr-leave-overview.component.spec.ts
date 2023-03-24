import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchrLeaveOverviewComponent } from './tchr-leave-overview.component';

describe('TchrLeaveOverviewComponent', () => {
  let component: TchrLeaveOverviewComponent;
  let fixture: ComponentFixture<TchrLeaveOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchrLeaveOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TchrLeaveOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
