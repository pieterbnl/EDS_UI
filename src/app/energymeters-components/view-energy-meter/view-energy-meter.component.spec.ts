import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnergyMeterComponent } from './view-energy-meter.component';

describe('ViewEnergyMeterComponent', () => {
  let component: ViewEnergyMeterComponent;
  let fixture: ComponentFixture<ViewEnergyMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEnergyMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEnergyMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
