import { Component, OnInit } from "@angular/core";
import { WizardStage } from "../state/wizard-stages.interface";
import { Observable } from "rxjs";
import { WizardService } from "../state/wizard.service";
import { WizardQuery } from "../state/wizard.query";

@Component({
  selector: "app-wizard-container",
  templateUrl: "./wizard-container.component.html",
  styleUrls: ["./wizard-container.component.css"],
})
export class WizardContainerComponent implements OnInit {
  wizard$: Observable<WizardStage[]>;
  wrapperClass = "wrapper-hidden";
  constructor(private service: WizardService, private query: WizardQuery) {}

  ngOnInit() {
    this.wizard$ = this.query.select("stages").pipe();
    console.log("in container");
    this.wizard$
      ? this.wizard$.subscribe((res) =>
          res
            ? (this.wrapperClass = "wizard-wrapper")
            : (this.wrapperClass = "wrapper-hidden")
        )
      : (this.wrapperClass = "wrapper-hidden");
  }

  close = () => (this.wrapperClass = "wrapper-hidden");
}
