import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProposalNavigateService } from "../proposal-navigate.service";

@Component({
  selector: "app-proposal-plans",
  templateUrl: "./proposal-plans.component.html",
  styleUrls: ["./proposal-plans.component.css"],
})
export class ProposalPlansComponent implements OnInit {
  wse: string;
  constructor(
    private route: ActivatedRoute,
    private service: ProposalNavigateService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.wse = params.selected;
    });
  }

  nav(type: string) {
    switch (type) {
      case "next":
        return this.service.navigate("rates", this.wse);
      case "logout":
        return this.service.navigate("proposal");
    }
  }
}
