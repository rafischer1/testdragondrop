import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { WizardService } from "./wizard/state/wizard.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private router: Router, private wizard: WizardService) {}
  title = "GOOEY PROPOSAL AND WIZARD TEST";

  navigate(route: string) {
    this.router
      .navigate([route])
      .then((res) => console.log("res on navigate:", res));
  }

  openWizard() {
    const url = this.router.url.split("/");
    if (!url[1]) {
      this.wizard.showWizard(1);
    } else if (url[1] === "list") {
      this.wizard.showWizard(1);
    } else if (url[1] === "cursors") {
      this.wizard.showWizard(3);
    } else if (url[1] === "resize") {
      this.wizard.showWizard(2);
    }
  }
}
