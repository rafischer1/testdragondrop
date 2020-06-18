import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProposalNavigateService } from "../proposal-navigate.service";
import { CompaniesService, Company } from "../companies.service";

@Component({
  selector: "app-proposal-view",
  templateUrl: "./proposal-view.component.html",
  styleUrls: ["./proposal-view.component.css"],
})
export class ProposalViewComponent implements OnInit {
  selected: number;
  companies: Company[];

  agentName = "Agent Cooper";
  agentEmail = "cooper@demo-company.com";
  agentPhone = "(555) 934-8765";

  constructor(
    private r: Router,
    private proposalService: ProposalNavigateService,
    private companiesService: CompaniesService
  ) {}

  ngOnInit() {
    this.companies = this.companiesService.getAll();
  }

  nav(type: string) {
    switch (type) {
      case "select":
        return this.proposalService.navigate("plans", this.selected);
      case "logout":
        return this.proposalService.navigate("login");
    }
  }

  setCompanyName = () =>
    this.selected ? this.companiesService.get(this.selected).name : undefined;
}
