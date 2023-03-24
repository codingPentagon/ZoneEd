import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchrSubjectsPerfComponent } from './tchr-subjects-perf.component';

describe('TchrSubjectsPerfComponent', () => {
  let component: TchrSubjectsPerfComponent;
  let fixture: ComponentFixture<TchrSubjectsPerfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchrSubjectsPerfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TchrSubjectsPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
