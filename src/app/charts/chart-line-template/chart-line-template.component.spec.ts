import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineTemplateComponent } from './chart-line-template.component';

describe('ChartLineTemplateComponent', () => {
  let component: ChartLineTemplateComponent;
  let fixture: ComponentFixture<ChartLineTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLineTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
