import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-proposal-login",
  templateUrl: "./proposal-login.component.html",
  styleUrls: ["./proposal-login.component.css"],
})
export class ProposalLoginComponent implements OnInit {
  constructor() {}
  passwordVerified: boolean;
  signInDisabled: boolean;
    this.passwordVerified = false;
    this.signInDisabled = true;

  ngOnInit() {}

  submitForm() {
    console.log("form submitted");
  }
}
