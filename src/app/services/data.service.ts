import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  configUrl = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) {}

  getPlans() {
    this.http
      .get(this.configUrl + "/plans", this.httpOptions)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
