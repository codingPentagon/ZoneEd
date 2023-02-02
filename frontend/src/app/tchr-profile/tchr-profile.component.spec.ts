import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchrProfileComponent } from './tchr-profile.component';

describe('TchrProfileComponent', () => {
  let component: TchrProfileComponent;
  let fixture: ComponentFixture<TchrProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchrProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TchrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
