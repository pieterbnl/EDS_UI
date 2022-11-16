import { AddressType } from "./address-type.model";

export interface AddAddress {  
  type: AddressType, // NOTE: define ENUM types later
  description: string,
  streetName: string,
  streetNumber: string,
  postalCode: string,
  city: string
}
