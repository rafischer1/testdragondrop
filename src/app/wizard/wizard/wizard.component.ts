import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { WizardService } from "../state/wizard.service";
import { WizardStage } from "../state/wizard-stages.interface";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.css"],
})
export class WizardComponent implements OnInit {
  @Input() wizard: WizardStage;

  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: WizardService) {}

  ngOnInit() {
    console.log("opened with stage:", this.wizard);
  }

  resetWizard = () => this.service.resetWizard();

  close = () => this.toggle.emit();

  nav = (component: string, stage: number) =>
    this.service.navigate(component, stage);
}
