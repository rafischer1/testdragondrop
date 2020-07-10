import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProposalNavigateService } from "../proposal-navigate.service";
import { CompaniesService, Company } from "../companies.service";
import { PlanDesign } from "../../list/list.component";
import { PlansService } from "../../services/plans.service";
import { PdfService } from "../../services/pdf.service";

@Component({
  selector: "app-proposal-plans",
  templateUrl: "./proposal-plans.component.html",
  styleUrls: ["./proposal-plans.component.scss"],
})
export class ProposalPlansComponent implements OnInit {
  @ViewChild("bodyPdf", { static: true }) pdf: ElementRef;
  companyID: number;
  company: Company;
  list: PlanDesign[];
  element: HTMLElement;

  constructor(
    private route: ActivatedRoute,
    private service: ProposalNavigateService,
    private companiesService: CompaniesService,
    private plansService: PlansService,
    private pdfService: PdfService
  ) {}

  ngOnInit() {
    this.route.queryParams ? this.route.queryParams.subscribe((params) => {
      this.companyID = params.selected;
    }) : this.companyID = 0;
    this.company = this.companiesService.get(this.companyID);
    this.list = this.plansService.getThree();
  }

  nav(type: string) {
    switch (type) {
      case "next":
        return this.service.navigate("rates", this.companyID);
      case "prev":
        return this.service.navigate("overview", this.companyID);
      case "logout":
        return this.service.navigate("proposal");
    }
  }

  toPDF() {
    this.pdfService.pdfDownloadToCanvas(document.body);
  }
}
