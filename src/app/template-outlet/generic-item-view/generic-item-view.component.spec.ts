import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericItemViewComponent } from './generic-item-view.component';

describe('GenericItemViewComponent', () => {
  let component: GenericItemViewComponent;
  let fixture: ComponentFixture<GenericItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
