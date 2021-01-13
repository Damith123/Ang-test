import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingItemsComponent } from './ongoing-items.component';

describe('OngoingItemsComponent', () => {
  let component: OngoingItemsComponent;
  let fixture: ComponentFixture<OngoingItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
