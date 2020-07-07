import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlanInput } from "../types/plans";
import { CompanyInput } from "../types/companies";
import { PlansService } from "./plans.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  configUrl = "http://localhost:8080";
  constructor(private http: HttpClient, private plans: PlansService) {}

  getPlans() {
    this.http.get(this.configUrl + "/plans").subscribe(
      (plans) => {
        console.log("plans:", plans);
        return plans;
      },
      (err) => {
        return this.plans.getAll();
      }
    );
  }

  getPlan(planId: number) {
    this.http.get(`/plans/:${planId}`).subscribe(
      (plan) => {
        console.log("get one plan:", plan);
        return plan;
      },
      (err) => {
        return this.plans.get(planId);
      }
    );
  }

  postPlan(plan: PlanInput) {
    this.http.post("/plans", { plan }).subscribe((res) => {
      console.log("plan post res:", res);
      return res;
    });
  }

  editPlan(plan: PlanInput) {
    this.http.patch(`/plans/:${plan.id}`, { plan }).subscribe((res) => {
      console.log("plan edit res:", res);
      return res;
    });
  }

  deletePlan(planId: number) {
    this.http.delete(`/plans/:${planId}`).subscribe((res) => {
      console.log("plan delete res:", res);
      return res;
    });
  }

  getAllCompanies() {
    this.http.get(this.configUrl + "/companies").subscribe(
      (companies) => {
        console.log("companies:", companies);
        return companies;
      },
      (err) => {
        console.log("err on companies:", err);
      }
    );
  }

  getCompany(companyId: number) {
    this.http.get(`/companies/:${companyId}`).subscribe(
      (company) => {
        console.log("get one company:", company);
        return company;
      },
      (err) => {
        console.log("err on company:", err);
      }
    );
  }

  postCompany(company: CompanyInput) {
    this.http.post("/companies", { company }).subscribe((res) => {
      console.log("company post res:", res);
      return res;
    });
  }

  editCompany(company: CompanyInput) {
    this.http
      .patch(`/companies/:${company.id}`, { company })
      .subscribe((res) => {
        console.log("company edit res:", res);
        return res;
      });
  }

  deleteCompany(companyId: number) {
    this.http.delete(`/companies/:${companyId}`).subscribe((res) => {
      console.log("company delete res:", res);
      return res;
    });
  }
}
