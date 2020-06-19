import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProposalNavigateService } from "../proposal-navigate.service";
import { CompaniesService, Company } from "../companies.service";
import { PlanDesign } from "../../list/list.component";
import { PlansService } from "../../services/plans.service";

@Component({
  selector: "app-proposal-plans",
  templateUrl: "./proposal-plans.component.html",
  styleUrls: ["./proposal-plans.component.css"],
})
export class ProposalPlansComponent implements OnInit {
  companyID: number;
  company: Company;
  list: PlanDesign[];

  constructor(
    private route: ActivatedRoute,
    private service: ProposalNavigateService,
    private companiesService: CompaniesService,
    private plansService: PlansService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.companyID = params.selected;
    });
    this.company = this.companiesService.get(this.companyID);
    this.list = this.plansService.getAll();
    this.list.pop();
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
