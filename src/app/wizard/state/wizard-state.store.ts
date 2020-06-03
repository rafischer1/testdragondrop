import { Store, StoreConfig } from "@datorama/akita";
import { WizardStage } from "./wizard-stages.interface";

export interface WizardState {
  stage: WizardStage;
}

export function createInitialState(): WizardState {
  return {
    stage: undefined,
  };
}

@StoreConfig({ name: "wizard" })
export class WizardStateStore extends Store<WizardState> {
  constructor() {
    super(createInitialState());
  }

  add(stage: WizardStage) {
    this.update((old) => {
      return { stage };
    });
  }

  resetWizard() {
    this.update(createInitialState());
  }
}
