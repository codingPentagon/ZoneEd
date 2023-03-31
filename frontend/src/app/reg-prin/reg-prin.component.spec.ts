import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPrinComponent } from './reg-prin.component';

describe('RegPrinComponent', () => {
  let component: RegPrinComponent;
  let fixture: ComponentFixture<RegPrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPrinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
