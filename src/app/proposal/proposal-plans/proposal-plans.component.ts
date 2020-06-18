import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProposalNavigateService } from "../proposal-navigate.service";
import { CompaniesService, Company } from "../companies.service";

@Component({
  selector: "app-proposal-plans",
  templateUrl: "./proposal-plans.component.html",
  styleUrls: ["./proposal-plans.component.css"],
})
export class ProposalPlansComponent implements OnInit {
  companyID: number;
  company: Company;
  constructor(
    private route: ActivatedRoute,
    private service: ProposalNavigateService,
    private companiesService: CompaniesService
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
      case "logout":
        return this.service.navigate("proposal");
    }
  }
}
