import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { WizardService } from "../state/wizard.service";
import { WizardStage } from "../state/wizard-stages.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.css"],
})
export class WizardComponent implements OnInit {
  @Input() wizard: WizardStage;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: WizardService, private router: Router) {}

  ngOnInit() {
    console.log("opened with stage:", this.wizard);
  }

  resetWizard() {
    this.service.resetWizard();
  }

  close() {
    this.toggle.emit();
  }

  navPrev() {
    this.router.navigate([this.wizard.navFrom]);
  }

  navNext() {
    this.router.navigate([this.wizard.navTo]);
  }
}
