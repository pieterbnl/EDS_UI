import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  constructor(private _addressService: AddressService) { }

  ngOnInit(): void {
    // Fetch students
    this._addressService.getAddresses().subscribe(
      (success) => {
        console.log('Addresses fetched');
        console.log(success);
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    ); 
  }

}
