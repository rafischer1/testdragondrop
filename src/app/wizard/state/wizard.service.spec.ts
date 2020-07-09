import { TestBed } from "@angular/core/testing";

import { WizardService } from "./wizard.service";
import { WizardStateStore } from "./wizard-state.store";

describe("WizardService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [WizardStateStore] })
  );

  it("should be created", () => {
    const service: WizardService = TestBed.get(WizardService);
    expect(service).toBeTruthy();
  });
});
