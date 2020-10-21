import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentWithOnPushComponent } from './parent-with-on-push.component';

describe('ParentWithOnPushComponent', () => {
  let component: ParentWithOnPushComponent;
  let fixture: ComponentFixture<ParentWithOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentWithOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentWithOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
