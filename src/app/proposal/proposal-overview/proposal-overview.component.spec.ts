import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalOverviewComponent } from "./proposal-overview.component";
import { NavButtonComponent } from "../../shared/nav-button/nav-button.component";
import {SnackButtonComponent} from "../../shared/snack-button/snack-button.component";
import {MatButton, MatIcon} from "@angular/material";

describe("ProposalOverviewComponent", () => {
  let component: ProposalOverviewComponent;
  let fixture: ComponentFixture<ProposalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProposalOverviewComponent, NavButtonComponent, SnackButtonComponent, MatIcon, MatButton],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
