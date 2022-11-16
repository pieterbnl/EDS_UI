import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Owner } from '../models/api-models/owner.model';
import { AddOwner } from '../models/api-models/add-owner.model';
import { UpdateOwner } from '../models/api-models/update-owner.model';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) {}

  getOwners(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(this.baseApiUrl + 'owners');
  }

  getOwner(ownerId: string): Observable<Owner> {
    return this.httpClient.get<Owner>(
      this.baseApiUrl + 'owners/' + ownerId
    );
  }

  updateOwner(
    ownerId: number,
    ownerRequest: Owner
  ): Observable<Owner> {
    const updatedOwner: UpdateOwner = {
      id: ownerRequest.id,
      companyName: ownerRequest.companyName,
      addressId: ownerRequest.address.id
    };
    
    return this.httpClient.put<Owner>(
      this.baseApiUrl + 'owners/' + ownerId, updatedOwner
    );
  }

  deleteOwner(ownerId: number): Observable<Owner> {
    return this.httpClient.delete<Owner>(
      this.baseApiUrl + 'owners/' + ownerId
    );
  }

  addOwner(ownerRequest: Owner): Observable<Owner> {
    const newOwner: AddOwner = {      
      companyName: ownerRequest.companyName,
      addressId: ownerRequest.address.id
    };

    return this.httpClient.post<Owner>(
      this.baseApiUrl + 'owners/',
      newOwner
    );
  }
}