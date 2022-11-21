import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Owner } from 'src/app/models/api-models/owner.model';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  
  owners: Owner[] = [];   

  // List columns for Angular materialize table
  displayedColumns: string[] = [
    'companyName',
    'address',
    'edit',
  ];

  // Create datasource for Angular materialize table
  dataSource: MatTableDataSource<Owner> = new MatTableDataSource<Owner>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  filterString = '';

  constructor(private _ownerService: OwnerService) {}

  ngOnInit(): void {
    // Fetch owners
    this._ownerService.getOwners().subscribe(
      (successRepsonse) => {        
        this.owners = successRepsonse;
        this.dataSource = new MatTableDataSource<Owner>(this.owners);

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

  filterOwners() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}