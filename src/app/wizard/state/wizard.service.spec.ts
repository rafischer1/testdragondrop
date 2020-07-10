import { TestBed } from "@angular/core/testing";
import { WizardService } from "./wizard.service";
import { WizardStateStore } from "./wizard-state.store";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { RouterStub } from "../../proposal/proposal-navigate.service.spec";

describe("WizardService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [WizardStateStore, { provide: Router, useClass: RouterStub }],
      imports: [],
    })
  );

  it("should be created", () => {
    const service: WizardService = TestBed.get(WizardService);
    expect(service).toBeTruthy();
  });
});
