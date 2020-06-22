export interface CompaniesInput {
  name: string;
  location: Location;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}
