import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/api-models/address.model';
import { AddAddress } from '../models/api-models/add-address.model';
import { UpdateAddress } from '../models/api-models/update-address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) {}

  getAddresses(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(this.baseApiUrl + 'addresses');
  }

  getAddress(addressId: string): Observable<Address> {
    return this.httpClient.get<Address>(
      this.baseApiUrl + 'addresses/' + addressId
    );
  }

  updateAddress(addressId: number, addressRequest: Address): Observable<Address> {
    const updatedAddress: UpdateAddress = {
      id: addressRequest.id,
      type: addressRequest.type,
      description: addressRequest.description,
      streetName: addressRequest.streetName,
      streetNumber: addressRequest.streetNumber,
      postalCode: addressRequest.postalCode,
      city: addressRequest.city,
    };
    
    return this.httpClient.put<Address>(
      this.baseApiUrl + 'addresses/' + addressId, updatedAddress
    );
  }

  deleteAddress(addressId: number): Observable<Address> {
    return this.httpClient.delete<Address>(
      this.baseApiUrl + 'addresses/' + addressId
    );
  }

  addAddress(addressRequest: Address): Observable<Address> {
    const newAddress: AddAddress = {
      type: addressRequest.type,
      description: addressRequest.description,
      streetName: addressRequest.streetName,
      streetNumber: addressRequest.streetNumber,
      postalCode: addressRequest.postalCode,
      city: addressRequest.city,
    };

    return this.httpClient.post<Address>(this.baseApiUrl + 'addresses/', newAddress);
  }
}
