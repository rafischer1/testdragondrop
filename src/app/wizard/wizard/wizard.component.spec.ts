import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WizardComponent } from "./wizard.component";
import { WizardStateStore } from "../state/wizard-state.store";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterStub } from "../../proposal/proposal-navigate.service.spec";
import { WizardService } from "../state/wizard.service";

describe("WizardComponent", () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardComponent],
      providers: [
        WizardStateStore,
        { provide: Router, useClass: RouterStub },
        RouterTestingModule,
        WizardService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
