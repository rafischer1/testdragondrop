import { Injectable } from "@angular/core";
import { PlanDesign } from "../list/list.component";
import { HelpersService } from "./helpers.service";

@Injectable({
  providedIn: "root",
})
export class PlansService {
  plans: PlanDesign[] = [
    {
      name: "Humana EPO-3500",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 1,
      locked: false,
    },
    {
      name: "Aetna NY-2000-XYZ",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 2,
      locked: false,
    },
    {
      name: "Anthem Gold 5500",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 3,
      locked: false,
    },
    {
      name: "Aetna NY-HDHP-4500",
      rates: this.help.rates(),
      renewalDate: "1/1/21",
      id: 4,
      locked: false,
    },
  ];

  constructor(private help: HelpersService) {}

  getAll = () => this.plans;

  get = (id: number) => this.plans.filter((c) => c.id === +id)[0];

  getThree = () => this.plans.splice(0, 1);
}
