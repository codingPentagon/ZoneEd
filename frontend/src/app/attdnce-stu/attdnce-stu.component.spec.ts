import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttdnceStuComponent } from './attdnce-stu.component';

describe('AttdnceStuComponent', () => {
  let component: AttdnceStuComponent;
  let fixture: ComponentFixture<AttdnceStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttdnceStuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttdnceStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
