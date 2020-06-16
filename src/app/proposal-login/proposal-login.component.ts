import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-proposal-login",
  templateUrl: "./proposal-login.component.html",
  styleUrls: ["./proposal-login.component.css"],
})
export class ProposalLoginComponent implements OnInit {
  constructor() {}
  passwordVerified: boolean;
  signInDisabled: boolean;

  email = new FormControl("");
  peoID = new FormControl("");
  password = new FormControl("");
  confirmPassword = new FormControl("");

  ngOnInit() {
    this.passwordVerified = false;
    this.signInDisabled = true;
  }

  submitForm() {
    console.log("form submitted:");
  }

  getEmail() {
    return this.email.value;
  }

  checkValidity() {
    this.confirmPassword.value === this.password.value
      ? (this.signInDisabled = false)
      : (this.signInDisabled = true);
  }
}
