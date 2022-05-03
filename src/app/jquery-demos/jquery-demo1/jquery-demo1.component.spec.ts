import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryDemo1Component } from './jquery-demo1.component';

describe('JqueryDemo1Component', () => {
  let component: JqueryDemo1Component;
  let fixture: ComponentFixture<JqueryDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
