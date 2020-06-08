import { Injectable } from "@angular/core";
import { WizardStateStore } from "./wizard-state.store";
import { defaultWizardStages, WizardStage } from "./wizard-stages.interface";
import { ListComponent } from "../../list/list.component";
import { ResizerComponent } from "../../resizer/resizer.component";
import { CursorsComponent } from "../../cursors/cursors.component";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class WizardService {
  constructor(private store: WizardStateStore, private router: Router) {}

  get(order: number): WizardStage | undefined {
    let foundStage: WizardStage = {
      order: 0,
      title: "",
      completed: false,
      navTo: "",
      navFrom: "",
      tasks: undefined,
    };
    defaultWizardStages.forEach((stage) => {
      return stage.order === order ? (foundStage = stage) : foundStage;
    });
    return foundStage;
  }

  add(stage: WizardStage) {
    this.store.add(stage);
  }

  update(stage: Partial<WizardStage>) {
    // @ts-ignore
    this.store.update(stage);
  }

  showWizard = (order: number) => {
    const stage: WizardStage = this.get(order);
    console.log("stage in service:", stage);
    return this.add(stage);
  };

  resetWizard = () => this.store.resetWizard();

  navigate(component: string, stage: number) {
    this.router.navigate([component]);
    this.resetWizard();
    this.showWizard(stage);
  }
}
