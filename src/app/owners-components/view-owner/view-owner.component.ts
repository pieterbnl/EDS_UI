import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { Owner } from 'src/app/models/api-models/owner.model';
import { OwnerService } from '../owner.service';
import { Address } from 'src/app/models/api-models/address.model';
import { AddressType } from 'src/app/models/api-models/address-type.model';
import { BuildingGroup } from 'src/app/models/api-models/buildinggroup.model';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface BuildingGroupNode {
  name: string;
  children?: BuildingGroupNode[];
}

const TREE_DATA: BuildingGroupNode[] = [
{
    name: 'Building Group A',
    children: [
      { name: 'Building A1' },
      { name: 'Building A2' },
      { name: 'Building A3' }
    ],
  },
  {
    name: 'Building Group B',
    children: [
      { name: 'Building B1' },
      { name: 'Building B2' },
      { name: 'Building B3' }      
    ],
  },
];

@Component({
  selector: 'app-view-owner',
  templateUrl: './view-owner.component.html',
  styleUrls: ['./view-owner.component.scss'],
})
export class ViewOwnerComponent implements OnInit {
  ownerId: string | null | undefined;

  owner: Owner = {
    id: 0,
    companyName: '',
    // address: {} as Address,
    address: <Address>{
      id: 0,
      type: 0,
      description: '',
      streetName: '',
      streetNumber: '',
      postalCode: '',
      city: '',
    },
    buildingGroup: <BuildingGroup>{
      id: 0,
      name: '',
      ownerId: 0,
    },
  };

  public addressType = AddressType;

  isNewOwner = false;
  pageHeader = '';

  // Building group tree
  treeControl = new NestedTreeControl<BuildingGroupNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<BuildingGroupNode>();

  @ViewChild('ownerDetailsForm') ownerDetailsForm?: NgForm;

  constructor(
    private readonly _ownerService: OwnerService,
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: BuildingGroupNode) =>
    !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.ownerId = params.get('id');

      // check if an existing owner has to be edited, or a new one to be created
      if (this.ownerId) {
        if (this.ownerId.toLowerCase() === 'Add'.toLowerCase()) {
          this.isNewOwner = true;
          this.pageHeader = 'Add new owner';
          // this.setAddressImage();
        } else {
          this.isNewOwner = false;
          this.pageHeader = 'Edit owner';

          this._ownerService.getOwner(this.ownerId).subscribe(
            (successResponse) => {
              console.log('fetching owner');
              this.owner = successResponse;
              console.log(this.owner);
            },
            (errorResponse) => {
              //
            }
          );
        }
      }
    });
  }

  onUpdate(): void {
    // if (this.ownerDetailsForm?.form.valid) {
    //   // do additional validation if needed
    //   console.log("not validated?");
    // } else {
    console.log('id: ' + this.owner.id);
    console.log('owner: ' + this.owner);

    this._ownerService.updateOwner(Number(this.owner.id), this.owner).subscribe(
      (successResponse) => {
        this.snackbar.open('Owner updated succesfully', undefined, {
          duration: 2000,
        });
      },
      (errorResponse) => {
        // log it
      }
    );
    // }
  }

  onDelete(): void {
    this._ownerService.deleteOwner(this.owner.id).subscribe(
      (successResponse) => {
        this.router.navigateByUrl('owners');
        this.snackbar.open('Owner deleted succesfully', undefined, {
          duration: 2000,
        });
      },
      (errorResponse) => {
        // log it
      }
    );
  }

  onAdd(): void {
    if (this.ownerDetailsForm?.form.valid) {
      // Submit form data to API
      this._ownerService.addOwner(this.owner).subscribe(
        (successResponse) => {
          this.snackbar.open('Owner added succesfully', undefined, {
            duration: 2000,
          });
          setTimeout(() => {
            this.router.navigateByUrl(`owners/${successResponse.id}`);
          }, 2000);
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
    }
  }
}