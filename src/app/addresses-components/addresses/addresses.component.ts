import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Address } from 'src/app/models/api-models/address.model';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {
  addresses: Address[] = []; // UI model

  // List columns for Angular materialize table
  displayedColumns: string[] = [
    'addressType',
    'description',
    'streetName',
    'streetNumber',
    'postalCode',
    'city',    
  ];

  // Create datasource for Angular materialize table
  dataSource: MatTableDataSource<Address> = new MatTableDataSource<Address>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  filterString = '';

  constructor(private _addressService: AddressService) {}

  ngOnInit(): void {
    // Fetch addresses
    this._addressService.getAddresses().subscribe(
      (successRepsonse) => {
        this.addresses = successRepsonse;
        this.dataSource = new MatTableDataSource<Address>(this.addresses); // fill dataSource with list of addresses

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      },
      (errorResponse) => {
        // console.log(errorResponse);
      }
    );
  }

  filterAddresses() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
