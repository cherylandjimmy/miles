import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhotosComponent } from './card-photos.component';

describe('CardPhotosComponent', () => {
  let component: CardPhotosComponent;
  let fixture: ComponentFixture<CardPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
