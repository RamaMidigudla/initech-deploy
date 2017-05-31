import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThermalComponent } from './view-thermal.component';

describe('ViewThermalComponent', () => {
  let component: ViewThermalComponent;
  let fixture: ComponentFixture<ViewThermalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewThermalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewThermalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
