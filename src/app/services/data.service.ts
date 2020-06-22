import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  configUrl = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getPlans() {
    this.http.get(this.configUrl + "/plans").subscribe((res) => {
      console.log("plans:", res);
    });
  }

  postPlan() {
    this.http.post("/plans", {})
  }

  getCompanies() {
    this.http.get(this.configUrl + "/companies").subscribe((res) => {
      console.log("companies:", res);
    });
  }
}
