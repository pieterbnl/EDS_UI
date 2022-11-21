import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses-components/addresses/addresses.component';
import { ViewAddressComponent } from './addresses-components/view-address/view-address.component';
import { OwnersComponent } from './owners-components/owners/owners.component';
import { ViewOwnerComponent } from './owners-components/view-owner/view-owner.component';
import { BuildingGroupsComponent } from './buildinggroups-components/building-groups/building-groups.component';
import { ViewBuildingGroupComponent } from './buildinggroups-components/view-building-group/view-building-group.component';
import { BuildingsComponent } from './building-components/buildings/buildings.component';
import { ViewBuildingComponent } from './building-components/view-building/view-building.component';
import { EnergyMetersComponent } from './energymeters-components/energy-meters/energy-meters.component';
import { ViewEnergyMeterComponent } from './energymeters-components/view-energy-meter/view-energy-meter.component';
import { MeasurementsComponent } from './measurement-components/measurements/measurements.component';
import { ViewMeasurementComponent } from './measurement-components/view-measurement/view-measurement.component';

const routes: Routes = [
  {
    path: '',
    component: AddressesComponent,
  },
  {
    path: 'addresses',
    component: AddressesComponent,
  },
  {
    path: 'addresses/:id',
    component: ViewAddressComponent,
  },
  {
    path: 'owners',
    component: OwnersComponent,
  },
  {
    path: 'owners/:id',
    component: ViewOwnerComponent,
  },
  {
    path: 'buildinggroups',
    component: BuildingGroupsComponent,
  },
  {
    path: 'buildinggroups/:id',
    component: ViewBuildingGroupComponent,
  },
  {
    path: 'buildings',
    component: BuildingsComponent,
  },
  {
    path: 'buildings/:id',
    component: ViewBuildingComponent,
  },
  {
    path: 'energymeters',
    component: EnergyMetersComponent,
  },
  {
    path: 'energymeters/:id',
    component: ViewEnergyMeterComponent,
  },
  {
    path: 'measurements',
    component: MeasurementsComponent,
  },
  {
    path: 'measurements/:id',
    component: ViewMeasurementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
