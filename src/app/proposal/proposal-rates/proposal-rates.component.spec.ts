import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalRatesComponent } from "./proposal-rates.component";
import { NavButtonComponent } from "../../shared/nav-button/nav-button.component";
import {SnackButtonComponent} from "../../shared/snack-button/snack-button.component";
import {MatIconModule} from "@angular/material";
import {Router} from "@angular/router";

describe("ProposalRatesComponent", () => {
  let component: ProposalRatesComponent;
  let fixture: ComponentFixture<ProposalRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [ProposalRatesComponent, NavButtonComponent, SnackButtonComponent],
      providers: [Router]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
