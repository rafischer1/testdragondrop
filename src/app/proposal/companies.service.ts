import { Injectable } from "@angular/core";

export interface Company {
  companyID: number;
  name: string;
}

@Injectable({
  providedIn: "root",
})
export class CompaniesService {
  companies: Company[] = [
    { companyID: 1, name: "Artie's Workshop" },
    { companyID: 2, name: "Ben's Computer Repair" },
    { companyID: 3, name: "Nick's Hockey Supply" },
    { companyID: 4, name: "Ginnie's UX/UI" },
  ];
  constructor() {}

  getAll = () => this.companies;

  get = (id: number) => this.companies.filter((c) => c.companyID === +id)[0];
}
