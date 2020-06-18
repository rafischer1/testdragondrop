import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProposalNavigateService } from "../proposal-navigate.service";

@Component({
  selector: "app-proposal-view",
  templateUrl: "./proposal-view.component.html",
  styleUrls: ["./proposal-view.component.css"],
})
export class ProposalViewComponent implements OnInit {
  companies: string[] = [
    "Artie's Workshop",
    "Ben's Computer Repair",
    "Nick's Hockey Supply",
    "Ginnie's UX/UI",
  ];

  selected: string;

  constructor(
    private r: Router,
    private proposalService: ProposalNavigateService
  ) {}

  ngOnInit() {}

  nav(type: string) {
    switch (type) {
      case "select":
        return this.proposalService.navigate("plans", this.selected);
      case "logout":
        return this.proposalService.navigate("login");
    }
  }
}
