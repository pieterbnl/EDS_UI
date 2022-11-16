import { AddressType } from "./address-type.model";

export interface Address {
  id: number,
  type: AddressType,
  description: string,
  streetName: string,
  streetNumber: string,
  postalCode: string,
  city: string
}