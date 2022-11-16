import { AddressType } from "./address-type.model";

export interface UpdateAddress {
  type: AddressType,
  description: string,
  streetName: string,
  streetNumber: string,
  postalCode: string,
  city: string
}
