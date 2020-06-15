import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-proposal-login",
  templateUrl: "./proposal-login.component.html",
  styleUrls: ["./proposal-login.component.css"],
})
export class ProposalLoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submitForm() {
    console.log("form submitted");
  }
}
