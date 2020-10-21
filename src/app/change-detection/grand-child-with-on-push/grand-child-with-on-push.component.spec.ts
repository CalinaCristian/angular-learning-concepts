import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildWithOnPushComponent } from './grand-child-with-on-push.component';

describe('GrandChildWithOnPushComponent', () => {
  let component: GrandChildWithOnPushComponent;
  let fixture: ComponentFixture<GrandChildWithOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildWithOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildWithOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
