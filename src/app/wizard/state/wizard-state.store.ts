import { Store, StoreConfig } from "@datorama/akita";
import { WizardStage } from "./wizard-stages.interface";

export interface WizardState {
  stages: WizardStage[];
}

export function createInitialState(): WizardState {
  return {
    stages: undefined,
  };
}

@StoreConfig({ name: "wizard" })
export class WizardStateStore extends Store<WizardState> {
  constructor() {
    super(createInitialState());
  }

  add(stage: WizardStage) {
    this.update(() => stage[0]);
  }

  remove(order: number) {}

  resetWizard() {
    this.update(createInitialState());
  }
}
