import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WizardContainerComponent } from "./wizard-container.component";
import { WizardComponent } from "../wizard/wizard.component";
import { WizardStateStore } from "../state/wizard-state.store";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterStub } from "../../proposal/proposal-navigate.service.spec";

describe("WizardContainerComponent", () => {
  let component: WizardContainerComponent;
  let fixture: ComponentFixture<WizardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardContainerComponent, WizardComponent],
      providers: [
        WizardStateStore,
        { provide: Router, useClass: RouterStub },
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
