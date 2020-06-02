import { Injectable } from "@angular/core";
import { WizardStateStore } from "./wizard-state.store";
import { WizardStage } from "./wizard-stages.interface";
import { ListComponent } from "../../list/list.component";
import { ResizerComponent } from "../../resizer/resizer.component";
import { CursorsComponent } from "../../cursors/cursors.component";

@Injectable({
  providedIn: "root",
})
export class WizardService {
  constructor(private store: WizardStateStore) {}

  get(order: number) {
    return defaultWizardStages.filter((stage) => stage.order === order);
  }

  add(stage: WizardStage) {
    this.store.add(stage);
  }

  update(stage: Partial<WizardStage>) {
    // @ts-ignore
    this.store.update(stage);
  }

  remove(order: number) {
    this.store.remove(order);
  }
}

export const defaultWizardStages: WizardStage[] = [
  {
    order: 1,
    navFrom: ListComponent,
    navTo: ResizerComponent,
    completed: false,
    title: "Stage One",
  },
  {
    order: 2,
    navFrom: ResizerComponent,
    navTo: CursorsComponent,
    completed: false,
    title: "Stage Two",
  },
  {
    order: 3,
    navFrom: CursorsComponent,
    navTo: ListComponent,
    completed: false,
    title: "Stage Three",
  },
];
