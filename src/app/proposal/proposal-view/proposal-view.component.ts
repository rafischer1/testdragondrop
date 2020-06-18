import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
  constructor(private r: Router) {}

  ngOnInit() {}

  logOut = () => this.r.navigate(["login"]);

  select() {
    this.r.navigate(["plans"], { queryParams: { selected: this.selected } });
  }
}
