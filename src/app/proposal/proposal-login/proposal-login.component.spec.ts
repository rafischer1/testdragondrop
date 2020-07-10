import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalLoginComponent } from "./proposal-login.component";
import { ReactiveFormsModule } from "@angular/forms";
import {MatIcon} from "@angular/material";
import {SnackButtonComponent} from "../../shared/snack-button/snack-button.component";

describe("ProposalLoginComponent", () => {
  let component: ProposalLoginComponent;
  let fixture: ComponentFixture<ProposalLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProposalLoginComponent, MatIcon, SnackButtonComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
