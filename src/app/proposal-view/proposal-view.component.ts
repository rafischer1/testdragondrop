import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-proposal-view",
  templateUrl: "./proposal-view.component.html",
  styleUrls: ["./proposal-view.component.css"],
})
export class ProposalViewComponent implements OnInit {
  constructor(private r: Router) {}

  ngOnInit() {}

  logOut = () => this.r.navigate(["login"]);
}
