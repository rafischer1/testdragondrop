import { Component, OnInit } from "@angular/core";
import { ProposalNavigateService } from "../proposal-navigate.service";
import { ActivatedRoute } from "@angular/router";
import { CompaniesService, Company } from "../companies.service";

@Component({
  selector: "app-proposal-overview",
  templateUrl: "./proposal-overview.component.html",
  styleUrls: ["./proposal-overview.component.css"],
})
export class ProposalOverviewComponent implements OnInit {
  companyID: number;
  company: Company;

  constructor(
    private proposalService: ProposalNavigateService,
    private route: ActivatedRoute,
    private companiesService: CompaniesService
  ) {}

  ngOnInit() {
    this.route.queryParams ? this.route.queryParams.subscribe((params) => {
      this.companyID = params.selected;
      this.company = this.companiesService.get(this.companyID);
    }) : this.companyID = 0;
  }

  nav(type: string) {
    switch (type) {
      case "next":
        return this.proposalService.navigate("plans", this.companyID);
      case "logout":
        return this.proposalService.navigate("proposal");
    }
  }
}
