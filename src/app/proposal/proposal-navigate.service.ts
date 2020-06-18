import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ProposalNavigateService {
  constructor(private r: Router) {}

  navigate(component: string, selected?: number) {
    switch (component) {
      case "proposal":
        return this.r.navigate(["proposal"]);
      case "plans":
        return this.r.navigate(["plans"], { queryParams: { selected } });
      case "rates":
        return this.r.navigate(["rates"], { queryParams: { selected } });
      case "login":
        return this.r.navigate(["login"]);
    }
  }
}
