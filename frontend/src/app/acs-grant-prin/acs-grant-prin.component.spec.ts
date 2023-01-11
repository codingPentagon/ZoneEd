import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsGrantPrinComponent } from './acs-grant-prin.component';

describe('AcsGrantPrinComponent', () => {
  let component: AcsGrantPrinComponent;
  let fixture: ComponentFixture<AcsGrantPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcsGrantPrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcsGrantPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
