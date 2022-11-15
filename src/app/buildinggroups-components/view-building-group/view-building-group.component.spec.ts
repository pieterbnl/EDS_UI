import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuildingGroupComponent } from './view-building-group.component';

describe('ViewBuildingGroupComponent', () => {
  let component: ViewBuildingGroupComponent;
  let fixture: ComponentFixture<ViewBuildingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuildingGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBuildingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
