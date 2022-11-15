import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyMetersComponent } from './energy-meters.component';

describe('EnergyMetersComponent', () => {
  let component: EnergyMetersComponent;
  let fixture: ComponentFixture<EnergyMetersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyMetersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyMetersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
