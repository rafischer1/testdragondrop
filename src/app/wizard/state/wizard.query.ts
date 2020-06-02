import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { WizardStateStore, WizardState } from "./wizard-state.store";

@Injectable({ providedIn: "root" })
export class WizardQuery extends Query<WizardState> {
  selectStage$ = this.select("stages");

  constructor(protected store: WizardStateStore) {
    super(store);
  }
}
