import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalPlansComponent } from "./proposal-plans.component";
import { NavButtonComponent } from "../../shared/nav-button/nav-button.component";
import { CardComponent } from "../../list/card/card.component";
import { Router } from "@angular/router";

describe("ProposalPlansComponent", () => {
  let component: ProposalPlansComponent;
  let fixture: ComponentFixture<ProposalPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProposalPlansComponent, NavButtonComponent, CardComponent],
      providers: [Router],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
