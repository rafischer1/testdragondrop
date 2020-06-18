import { Component, OnInit } from "@angular/core";
import { ProposalNavigateService } from "../proposal-navigate.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-proposal-rates",
  templateUrl: "./proposal-rates.component.html",
  styleUrls: ["./proposal-rates.component.css"],
})
export class ProposalRatesComponent implements OnInit {
  wse: string;
  constructor(
    private proposalService: ProposalNavigateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.wse = params.selected;
    });
  }

  nav(type: string) {
    switch (type) {
      case "prev":
        return this.proposalService.navigate("plans", this.wse);
      case "logout":
        return this.proposalService.navigate("proposal");
    }
  }
}
