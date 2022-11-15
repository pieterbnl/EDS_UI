import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingGroupsComponent } from './building-groups.component';

describe('BuildingGroupsComponent', () => {
  let component: BuildingGroupsComponent;
  let fixture: ComponentFixture<BuildingGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
