import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttdnceTchrComponent } from './attdnce-tchr.component';

describe('AttdnceTchrComponent', () => {
  let component: AttdnceTchrComponent;
  let fixture: ComponentFixture<AttdnceTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttdnceTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttdnceTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
