import { AddressType } from "./address-type.model";

export interface UpdateAddress {
  id: number,
  type: AddressType,
  description: string,
  streetName: string,
  streetNumber: string,
  postalCode: string,
  city: string
}
