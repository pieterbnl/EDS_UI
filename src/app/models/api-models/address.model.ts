export interface Address {
  id: number,
  addressType: number, // NOTE: define ENUM types later
  description: string,
  streetName: string,
  streetNumber: string,
  postalCode: string,
  city: string
}