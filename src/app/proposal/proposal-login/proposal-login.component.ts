import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-proposal-login",
  templateUrl: "./proposal-login.component.html",
  styleUrls: ["./proposal-login.component.css"],
})
export class ProposalLoginComponent implements OnInit {
  constructor(private router: Router) {}
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
    this.router.navigate(["proposal"]);
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