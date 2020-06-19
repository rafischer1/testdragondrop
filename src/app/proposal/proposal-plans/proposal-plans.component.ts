import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProposalNavigateService } from "../proposal-navigate.service";
import { CompaniesService, Company } from "../companies.service";
import { PlanDesign } from "../../list/list.component";
import { HelpersService } from "../../services/helpers.service";

@Component({
  selector: "app-proposal-plans",
  templateUrl: "./proposal-plans.component.html",
  styleUrls: ["./proposal-plans.component.css"],
})
export class ProposalPlansComponent implements OnInit {
  companyID: number;
  company: Company;
  list: PlanDesign[] = [
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
  ];
  constructor(
    private route: ActivatedRoute,
    private service: ProposalNavigateService,
    private companiesService: CompaniesService,
    private help: HelpersService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.companyID = params.selected;
    });
    this.company = this.companiesService.get(this.companyID);
  }

  nav(type: string) {
    switch (type) {
      case "next":
        return this.service.navigate("rates", this.companyID);
      case "prev":
        return this.service.navigate("overview", this.companyID);
      case "logout":
        return this.service.navigate("proposal");
    }
  }
}
