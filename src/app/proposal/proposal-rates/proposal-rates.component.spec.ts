import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProposalRatesComponent } from "./proposal-rates.component";
import { NavButtonComponent } from "../../shared/nav-button/nav-button.component";
import { SnackButtonComponent } from "../../shared/snack-button/snack-button.component";
import { MatButton, MatIconModule, MatRippleModule } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterStub } from "../proposal-navigate.service.spec";
import {fakeActivatedRoute} from "../proposal-plans/proposal-plans.component.spec";

describe("ProposalRatesComponent", () => {
  let component: ProposalRatesComponent;
  let fixture: ComponentFixture<ProposalRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, MatRippleModule],
      declarations: [
        ProposalRatesComponent,
        NavButtonComponent,
        SnackButtonComponent,
        MatButton,
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        RouterTestingModule,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
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
