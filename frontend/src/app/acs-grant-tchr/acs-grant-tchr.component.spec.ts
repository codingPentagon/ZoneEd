import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcGrantTchrComponent } from './arc-grant-tchr.component';

describe('ArcGrantTchrComponent', () => {
  let component: ArcGrantTchrComponent;
  let fixture: ComponentFixture<ArcGrantTchrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcGrantTchrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcGrantTchrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
