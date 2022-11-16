import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from 'src/app/models/api-models/address-type.model';
import { Address } from 'src/app/models/api-models/address.model';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.scss'],
})
export class ViewAddressComponent implements OnInit {
  addressId: string | null | undefined;

  address: Address = {
    id: 0,
    type: 0,
    description: '',
    streetName: '',
    streetNumber: '',
    postalCode: '',
    city: '',
  };

  isNewAddress = false;
  pageHeader = '';

  public addressType = AddressType;

  @ViewChild('addressDetailsForm') addressDetailsForm?: NgForm;

  constructor(
    private readonly _addressService: AddressService,
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {      
      this.addressId = params.get('id');      

      // check if address Id is available and if this is about adding a new address ('add' present in url), or updating one
      if (this.addressId) {
        if (this.addressId.toLowerCase() === 'Add'.toLowerCase()) {
          this.isNewAddress = true;
          this.pageHeader = 'Add new address';
          // this.setAddressImage();
        } else {
          this.isNewAddress = false;
          this.pageHeader = 'Edit address';

          this._addressService.getAddress(this.addressId).subscribe(
            (successResponse) => {
              console.log("fetching address");
              this.address = successResponse;
              console.log(this.address);
              // this.setAddressImage();
            },
            (errorResponse) => {
              // this.setAddressImage();
            }
          );
        }
      }
    });
  }

  onUpdate(): void {
    // if (this.addressDetailsForm?.form.valid) {
    //   // do additional validation if needed
    //   console.log("not validated?");
    // } else {
      console.log("id: " + this.address.id)
      console.log("address: " + this.address)

      this._addressService
        .updateAddress(Number(this.address.id), this.address)
        .subscribe(
          (successResponse) => {
            this.snackbar.open('Address updated succesfully', undefined, {
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
    this._addressService.deleteAddress(this.address.id).subscribe(
      (successResponse) => {
        this.router.navigateByUrl('addresses');
        this.snackbar.open('Address deleted succesfully', undefined, {
          duration: 2000,
        });
      },
      (errorResponse) => {
        // log it
      }
    );
  }

  onAdd(): void {
    if (this.addressDetailsForm?.form.valid) {
      // Submit form data to API      
      this._addressService.addAddress(this.address).subscribe(
        (successResponse) => {
          this.snackbar.open('Address added succesfully', undefined, {
            duration: 2000,
          });
          setTimeout(() => {
            this.router.navigateByUrl(`addresses/${successResponse.id}`);
          }, 2000);
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
    } 
  }
}