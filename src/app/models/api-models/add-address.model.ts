import { AddressType } from "./address-type.model";

export interface AddAddress {  
  type: AddressType,
  description: string,
  streetName: string,
  streetNumber: string,
  postalCode: string,
  city: string
}
