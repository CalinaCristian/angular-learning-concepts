import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithOnPushComponent } from './child-with-on-push.component';

describe('ChildWithOnPushComponent', () => {
  let component: ChildWithOnPushComponent;
  let fixture: ComponentFixture<ChildWithOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildWithOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWithOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
