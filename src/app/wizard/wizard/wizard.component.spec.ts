import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WizardComponent } from "./wizard.component";
import { WizardStateStore } from "../state/wizard-state.store";
import {Router} from "@angular/router";

describe("WizardComponent", () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardComponent],
      providers: [WizardStateStore, Router],
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
