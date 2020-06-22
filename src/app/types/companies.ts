export interface CompanyInput {
  id: number;
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
