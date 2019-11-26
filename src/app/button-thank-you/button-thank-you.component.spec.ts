import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonThankYouComponent } from './button-thank-you.component';

describe('ButtonThankYouComponent', () => {
  let component: ButtonThankYouComponent;
  let fixture: ComponentFixture<ButtonThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
